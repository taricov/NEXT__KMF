import {
  HeartOutlined,
  HeartFilled,
  CheckOutlined,
  CopyOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { AiTwotoneHeart } from "react-icons/ai";
import { Avatar, Card, Skeleton } from "antd";
// import Meta from "antd/es/card/Meta";
import { useState } from "react";

export default function AppCard() {
  const [loading, setLoading] = useState(false);
  const [loved, setLoved] = useState(false);
  console.log(loved);

  return (
    <div>
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <HeartFilled
            style={{ color: loved ? "red" : "" }}
            key="love"
            onClick={() => setLoved((prev) => !prev)}
          />,
          <CopyOutlined
            key="copy-to-clipboard"
            onClick={() => console.log("MORE")}
          />,
          <CheckOutlined key="edit" />,
          <ArrowRightOutlined key="open-link" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          {/* <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          /> */}
        </Skeleton>
      </Card>
    </div>
  );
}
