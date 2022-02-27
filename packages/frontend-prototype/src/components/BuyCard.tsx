import { User } from "firebase/auth";
import router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { currencies } from "../../lib/utilities/currencies";
import { setCart } from "../features/cart";
import { userState } from "../store";
import { Button, chakra, useToast, Image } from "@chakra-ui/react";

const BuyCard: React.FC<{
  id: string;
  prodImage: string[];
  desc: string;
  productName: string;
  price: number;
  currency: string;
  discount?: number;
}> = ({
  id,
  prodImage,
  desc = "Hmmmm",
  productName = "Something went wrong... :(",
  price = 0,
  discount = 0,
  currency = "MATIC",
}) => {
  const img = prodImage;
  let currentPrice;
  let prevPrice;
  if (discount === 0) {
    currentPrice = price;
  } else {
    currentPrice = price * (1 - discount / 100);
    prevPrice = price;
  }
  let currenciesObj = currencies as any;

  const user = JSON.parse(
    useSelector((state: userState) => state.user.value) || "{}"
  ) as User | null;
  const email = user?.email;
  const cart = useSelector((state: userState) => state.cart.value);
  const dispatch = useDispatch();

  const addToCart = () => {
    if (!id) return;
    let temp = JSON.parse(JSON.stringify(cart));
    fetch("/api/addToCart", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email, itemId: id }),
    }).then((res) => {
      res.json().then((data) => {
        temp.push({
          item: {
            ...data,
          },
        });
        dispatch(setCart(temp));
        toast({
          title: "Item added to cart",
          description: "We've added the item in your cart",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      });
    });
  };

  const toast = useToast();
  console.log({ img });

  return (
    <chakra.div
      _hover={{ bg: "gray.700" }}
      className="flex flex-col items-center justify-center w-72 cursor-pointer p-3 rounded-md duration-200"
    >
      <Image
        className="object-cover w-full rounded-md h-72"
        src={img}
        alt="product image"
        width="512px"
        height="450px"
      />

      <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
        {productName}
      </h4>
    </chakra.div>
  );
};

export default BuyCard;
