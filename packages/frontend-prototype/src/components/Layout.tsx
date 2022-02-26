import React, { ReactNode, useState, useEffect } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  ComponentWithAs,
  IconProps,
  Button,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiShoppingCart,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { AddIcon } from "@chakra-ui/icons";
import { User, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../../firebase";
import { setCart } from "../features/cart";
import user, { setUser } from "../features/user";
import { userState } from "../store";
import Cart from "./Cart";
import router, { Router } from "next/router";
import { useStaticJsonRPC } from "../../hooks";
import { Transactor, Web3ModalSetup } from "../../helpers";
import { NETWORKS, ALCHEMY_KEY } from "../../constants";
import {
  useBalance,
  useContractLoader,
  useContractReader,
  useGasPrice,
  useOnBlock,
  useUserProviderAndSigner,
} from "eth-hooks";
import deployedContracts from "../../contracts/hardhat_contracts.json";
import externalContracts from "../../contracts/external_contracts";

const { ethers } = require("ethers");

interface LinkItemProps {
  name: string;
  icon: any;
  link: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome, link: "/" },
  { name: "Explore", icon: FiCompass, link: "/" },
  { name: "Sell an Item", icon: AddIcon, link: "/sell" },
];

// Initialising Web3 things
const initialNetwork = NETWORKS.localhost;
const web3Modal = Web3ModalSetup();

const providers = [
  "https://eth-mainnet.gateway.pokt.network/v1/lb/611156b4a585a20035148406",
  `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  "https://rpc.scaffoldeth.io:48544",
];

export default function SidebarWithHeader({
  children,
  items,
  setItems,
}: {
  children: ReactNode;
  items: any;
  setItems: any;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialNetwork = NETWORKS.localhost; // <------- select your target frontend network (localhost, rinkeby, xdai, mainnet)

  // 😬 Sorry for all the console logging
  const DEBUG = true;
  const NETWORKCHECK = true;
  const USE_BURNER_WALLET = true; // toggle burner wallet feature
  const USE_NETWORK_SELECTOR = false;

  const web3Modal = Web3ModalSetup();

  // 🛰 providers
  const providers = [
    "https://eth-mainnet.gateway.pokt.network/v1/lb/611156b4a585a20035148406",
    `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
    "https://rpc.scaffoldeth.io:48544",
  ];

  // function App(props) {
  // specify all the chains your app is available on. Eg: ['localhost', 'mainnet', ...otherNetworks ]
  // reference './constants.js' for other networks
  const networkOptions = [initialNetwork.name, "mainnet", "rinkeby"];

  const [injectedProvider, setInjectedProvider] = useState();
  const [address, setAddress] = useState();
  const [selectedNetwork, setSelectedNetwork] = useState(networkOptions[0]);
  const location = useLocation();

  const targetNetwork = NETWORKS[selectedNetwork];

  // 🔭 block explorer URL
  const blockExplorer = targetNetwork.blockExplorer;

  // load all your providers
  const localProvider = useStaticJsonRPC([
    process.env.REACT_APP_PROVIDER
      ? process.env.REACT_APP_PROVIDER
      : targetNetwork.rpcUrl,
  ]);
  const mainnetProvider = useStaticJsonRPC(providers);

  if (DEBUG) console.log(`Using ${selectedNetwork} network`);

  // 🛰 providers
  if (DEBUG) console.log("📡 Connecting to Mainnet Ethereum");

  const logoutOfWeb3Modal = async () => {
    await web3Modal.clearCachedProvider();
    if (
      injectedProvider &&
      injectedProvider.provider &&
      typeof injectedProvider.provider.disconnect == "function"
    ) {
      await injectedProvider.provider.disconnect();
    }
    setTimeout(() => {
      window.location.reload();
    }, 1);
  };

  /* 💵 This hook will get the price of ETH from 🦄 Uniswap: */
  // const price = useExchangeEthPrice(targetNetwork, mainnetProvider);

  /* 🔥 This hook will get the price of Gas from ⛽️ EtherGasStation */
  const gasPrice = useGasPrice(targetNetwork, "fast");
  // Use your injected provider from 🦊 Metamask or if you don't have it then instantly generate a 🔥 burner wallet.
  const userProviderAndSigner = useUserProviderAndSigner(
    injectedProvider,
    localProvider,
    USE_BURNER_WALLET
  );
  const userSigner = userProviderAndSigner.signer;

  useEffect(() => {
    async function getAddress() {
      if (userSigner) {
        const newAddress = await userSigner.getAddress();
        setAddress(newAddress);
      }
    }
    getAddress();
  }, [userSigner]);

  // You can warn the user if you would like them to be on a specific network
  const localChainId =
    localProvider && localProvider._network && localProvider._network.chainId;
  const selectedChainId =
    userSigner &&
    userSigner.provider &&
    userSigner.provider._network &&
    userSigner.provider._network.chainId;

  // For more hooks, check out 🔗eth-hooks at: https://www.npmjs.com/package/eth-hooks

  // The transactor wraps transactions and provides notificiations
  const tx = Transactor(userSigner, gasPrice);

  // 🏗 scaffold-eth is full of handy hooks like this one to get your balance:
  const yourLocalBalance = useBalance(localProvider, address);

  // Just plug in different 🛰 providers to get your balance on different chains:
  const yourMainnetBalance = useBalance(mainnetProvider, address);

  // const contractConfig = useContractConfig();

  const contractConfig: any = {
    deployedContracts: deployedContracts || {},
    externalContracts: externalContracts || {},
  };

  // Load in your local 📝 contract and read a value from it:
  const readContracts = useContractLoader(localProvider, contractConfig);
  const writeContracts = useContractLoader(
    userSigner,
    contractConfig,
    localChainId
  );

  // If you want to make 🔐 write transactions to your contracts, use the userSigner:
  const writeContracts = useContractLoader(
    userSigner,
    contractConfig,
    localChainId
  );
  // console.log(readContracts);
  // console.log(writeContracts);

  // EXTERNAL CONTRACT EXAMPLE:
  //
  // If you want to bring in the mainnet DAI contract it would look like:
  const mainnetContracts = useContractLoader(mainnetProvider, contractConfig);
  // If you want to call a function on a new block
  useOnBlock(mainnetProvider, () => {
    console.log(
      `⛓ A new mainnet block is here: ${mainnetProvider._lastBlockNumber}`
    );
  });

  // Then read your DAI balance like:
  const myMainnetDAIBalance = useContractReader(
    mainnetContracts,
    "DAI",
    "balanceOf",
    ["0x34aA3F359A9D614239015126635CE7732c18fDF3"]
  );

  // keep track of a variable from the contract in the local React state:
  const purpose = useContractReader(readContracts, "YourContract", "purpose");

  const user = JSON.parse(
    useSelector((state: userState) => state.user.value) || "{}"
  ) as User;
  const cart = useSelector((state: userState) => state.cart.value);

  const [avatar, setAvatar] = useState(
    `https://avatars.dicebear.com/api/avataaars/${(
      Math.random() * 1000
    ).toString()}.png`
  );

  useEffect(async () => {
    let f = await writeContracts.TotalTokens();
    // let products = writeContracts.tokenURI()
    for (let i = 0; i < f; i++) {
      let product = writeContracts.tokenURI(i);
      let r = fetch(product)
        .then((res) => res.json())
        .then(async (data) => {
          let id = await writeContracts.tokenToProduct(i);
          let price = await writeContracts.getPrice(id);
          setItems((prev: any) => {
            let temp = JSON.parse(JSON.stringify(prev));
            temp.push(data);
            return temp;
          });
        });
    }
    console.log(products);
  }, []);

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Raw Mart
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          onClick={() => {
            router.push(link.link);
          }}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        transition="all"
        transitionDuration="200ms"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const user = JSON.parse(
    useSelector((state: userState) => state.user.value) || "{}"
  ) as User;
  const { isOpen, onClose, onOpen: onOpenCart } = useDisclosure();
  const signIn = () => {
    signInWithRedirect(auth, provider);
  };
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(
    `https://avatars.dicebear.com/api/avataaars/${(
      Math.random() * 1000
    ).toString()}.png`
  );
  onAuthStateChanged(auth, (res) => {
    if (!res) {
      return;
    }
    dispatch(setUser(JSON.stringify(res)));
    setAvatar(res.photoURL || "");
  });
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Raw Mart
      </Text>

      <Cart isOpen={isOpen} onClose={onClose} />
      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          onClick={onOpenCart}
          variant="ghost"
          textAlign="center"
          aria-label="open menu"
          icon={<FiShoppingCart />}
        />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Button size="lg" rounded="lg" color="orange.300">
                  Connect to Metamask
                </Button>
              </HStack>
            </MenuButton>
            {auth.currentUser ? (
              <MenuList bg="gray.900" borderColor="gray.700">
                <MenuItem
                  onClick={() => {
                    auth.signOut();
                    // router.push("/");
                  }}
                >
                  Sign out
                </MenuItem>
              </MenuList>
            ) : (
              <MenuList bg="gray.900" borderColor="gray.700">
                <MenuItem onClick={signIn}>Sign in with Google</MenuItem>
              </MenuList>
            )}
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
