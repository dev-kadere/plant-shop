import { Flex, Typography, Button, List, Avatar } from "antd";
import React from "react";

const data = [
  {
    name: "Nicholas Ndereba",
    ordertime: 1,
  },
  {
    name: "Emma Turner",
    ordertime: 2,
  },
  {
    name: "James  Maina",
    ordertime: 3,
  },
  {
    name: "Jot  makena",
    ordertime: 4,
  },
  {
    name: "shelly kamau",
    ordertime: 5,
  },
];
const Activity = () => {
  return (
    <Flex vertical gap="smaall">
      <Flex align="center" justify="space-between" gap="large">
        <Typography.Title level={3} strong className="primary--color ">
          Recent Activities
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>
      <List
        pagination
        dataSource={data}
        renderItem={(user, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`htpps://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="#">{user.name}</a>}
              description="ordered an new plant"
            ></List.Item.Meta>
            <span className=" gray--color">
              {user.ordertime} {user.ordertime == 1 ? "day ago" : "days ago"}
            </span>
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default Activity;
