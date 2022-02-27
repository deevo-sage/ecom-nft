import type { NextPage } from "next";
import Head from "next/head";
import BuyCard from "../src/components/BuyCard";
import Navbar from "../src/components/Navbar";
import prisma from "../lib/prisma";
import { item } from "../types/collectionTypes";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { chakra, Flex, Image } from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import styles from "../styles/carousel.module.css";
import SectionBox from "../src/components/SectionBox";
import Layout from "../src/components/Layout";

const Home: NextPage = () => {
  const [items, setItems] = useState<item[] | null>();

  useEffect(() => {
    const getItems = async () => {};
    getItems();
  }, []);

  return (
    <div>
      <Head>
        <title>The Closet</title>
        <meta name="description" content="Ecommerce but better" />
        <link rel="icon" href="/store.png" />
      </Head>

      <Layout items={items} setItems={setItems}>
        <main>
          <div className="flex flex-col pb-[10vh] min-h-screen text-gray-200 ">
            {/* <Navbar /> */}

            <chakra.div px={14} className="flex flex-wrap">
              {items?.map((e: any) => {
                return (
                  <BuyCard
                    id={e.name}
                    prodImage={e.image}
                    desc={e.description}
                    currency={"eth"}
                    price={e.price}
                    productName={e.name}
                    discount={0}
                    key={e.name}
                  />
                );
              })}
            </chakra.div>
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
