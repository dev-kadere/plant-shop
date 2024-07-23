import { Card, Flex, Image, Typography } from "antd";
import React from "react";
import plant from "../assets/plant1.png";

const ContentSide = () => {
  return (
    <div>
      <Card
        className="card"
        style={{ position: "relative", overflow: "visible" }}
      >
        <Flex vertical gap="large">
          <Typography.Title level={3} strong>
            Today <br /> 5 orders
          </Typography.Title>
          <Typography.Title level={4} strong>
            This Month <br /> 240 orders
          </Typography.Title>
        </Flex>
        <Image
          src={plant}
          style={{
            position: "absolute",
            bottom: "-50px",
            left: "120px",
            height: "300px",
            width: "auto",
            zIndex: 1,
          }}
        />
      </Card>
    </div>
  );
};

export default ContentSide;
