import {
  Avatar,
  Button,
  Card,
  Divider,
  Flex,
  Popover,
  Row,
  Tooltip,
  Typography,
} from "antd";
import React from "react";

const SellerList = () => {
  return (
    <Flex align="center" justify="space-between" gap="large">
      <Flex vertical="row" gap="small" className=" top-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            Top seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-between">
            <Avatar.Group
              max={{
                count: 5,
                popover: "click",
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "progress",
              }}
              size="large"
            >
              <Tooltip title="user 1" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 2" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 3" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 4" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 5" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 6" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 7" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1,200 plantd sold
              </Typography.Text>
              <Typography.Text type="secondary" strong>
                10 sellers
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>

      <Flex vertical="row" gap="small" className=" feature-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} strong className="primary--color">
            feature seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-between">
            <Avatar.Group
              max={{
                count: 5,
                popover: "click",
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "progress",
              }}
              size="large"
            >
              <Tooltip title="user 1" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 2" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 3" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 4" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 5" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 6" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
              <Tooltip title="user 7" placement="top">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical="row">
              <Typography.Text type="secondary" strong>
                1,500 plantd sold
              </Typography.Text>
              <Typography.Text type="secondary" strong>
                12 sellers
              </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default SellerList;
