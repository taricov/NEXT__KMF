import { Pagination } from "antd";

export default function AppPagination() {
  return (
    <div className="mx-auto">
      <Pagination defaultCurrent={6} total={500} />
    </div>
  );
}
