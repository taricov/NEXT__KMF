import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

const { Search } = Input;
const onSearch = (value: string) => console.log(value);

export default function AppSearchService() {
  return (
    <>
      <Search
        placeholder="What do you want to know"
        allowClear
        type="text"
        enterButton
        suffix={suffix}
        size="large"
        // loading
        onSearch={onSearch}
      />
    </>
  );
}
