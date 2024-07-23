import { Flex } from "antd";
import React from "react";
import Banner from "./Banner";
import ProductLists from "./ProductLists";
import SellerList from "./SellerList";

const MainContent = () => {
  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap="2.3rem">
        <Banner />
        <ProductLists />
        <SellerList />
      </Flex>
    </div>
  );
};

export default MainContent;
