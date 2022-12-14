import { ChangeEventHandler, useState } from "react";
import { Avatar, Badge, Checkbox, Divider } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Youtube", "Twitter", "Reddit"];
const defaultCheckedList = ["Youtube", "Twitter"];

export default function MainServicesBtns() {
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);

    // console.log(e);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <div className="mx-auto my-5 w-full">
      <div className="mx-auto flex w-full justify-center">
        <Checkbox
          className="mr-5"
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          All Services
        </Checkbox>
        <CheckboxGroup
          className=""
          options={plainOptions}
          value={checkedList}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
