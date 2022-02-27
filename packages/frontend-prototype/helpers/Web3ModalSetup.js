import Portis from "@portis/web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Authereum from "authereum";
import Fortmatic from "fortmatic";
import WalletLink from "walletlink";
import Web3Modal from "web3modal";
import { ALCHEMY_KEY, INFURA_ID } from "../constants";

// Coinbase walletLink init

// WalletLink provider

// Portis ID: 6255fb2b-58c8-433b-a2c9-62098c05ddc9
/**
  Web3 modal helps us "connect" external wallets:
**/
const web3ModalSetup = () => {
  return () =>
    new Web3Modal({
      network: "mainnet", // Optional. If using WalletConnect on xDai, change network to "xdai" and add RPC info below for xDai chain.
      cacheProvider: true, // optional
      theme: "light", // optional. Change to "dark" for a dark theme.
      providerOptions: {
        portis: {
          display: {
            logo: "https://user-images.githubusercontent.com/9419140/128913641-d025bc0c-e059-42de-a57b-422f196867ce.png",
            name: "Portis",
            description: "Connect to Portis App",
          },
          package: Portis,
          options: {
            id: "6255fb2b-58c8-433b-a2c9-62098c05ddc9",
          },
        },
        fortmatic: {
          package: Fortmatic, // required
          options: {
            key: "pk_live_5A7C91B2FC585A17", // required
          },
        },
        // torus: {
        //   package: Torus,
        //   options: {
        //     networkParams: {
        //       host: "https://localhost:8545", // optional
        //       chainId: 1337, // optional
        //       networkId: 1337 // optional
        //     },
        //     config: {
        //       buildEnv: "development" // optional
        //     },
        //   },
        // },

        authereum: {
          package: Authereum, // required
        },
      },
    });
};
export default web3ModalSetup;
