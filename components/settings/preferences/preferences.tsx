"use client";
import Input from "@/ui/input";
import CustomizedSwitches from "@/ui/switch";
import React, { useState } from "react";

interface InputItem {
  id?: string;
  type: string;
  labelName: string;
  placeholder: string;
  value: string;
  name: string;
  rightIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputData: InputItem[] = [
  {
    id: "Currency",
    type: "text",
    labelName: "Currency",
    placeholder: "Currency",
    value: "Currency",
    name: "Currency",
  },
  {
    id: "Time Zone",
    type: "text",
    labelName: "Time Zone",
    placeholder: "Time Zone",
    value: "Time Zone",
    name: "Time Zone",
  },
];

interface SwitchItem {
  id: number;
  name: string;
}

const SwitchData: SwitchItem[] = [
  {
    id: 1,
    name: "I Send Or Receive Digital Currency",
  },
  {
    id: 2,
    name: "I Send Receive Merchant Order ",
  },
  {
    id: 1,
    name: "There Are Recommendation For My Account",
  },
];

const Preferences: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [switchData, setSwitchData] = useState<Record<string, boolean>>({});

  const onChange = (e: React.ChangeEvent<any>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSwitchChange = (name: string, checked: boolean) => {
    setSwitchData((prevSwitchData) => ({
      ...prevSwitchData,
      [name]: checked,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data", formData);
    console.log("Switch Data", switchData);

    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("switchData", JSON.stringify(switchData));

    setFormData({});
    setSwitchData({});
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
        {InputData?.map((item, index) => (
          <Input
            key={index}
            labelName={item?.labelName}
            value={formData[item?.name] || ""}
            placeholder={item?.placeholder}
            name={item?.name}
            type={item?.type}
            rightIcon={item?.rightIcon}
            onChange={onChange}
          />
        ))}
      </div>
      <div className="my-5">
        {SwitchData?.map((item, index) => (
          <CustomizedSwitches
            key={index}
            label={item?.name}
            checked={switchData[item.name] || false}
            onChange={(checked) => onSwitchChange(item.name, checked)}
          />
        ))}
      </div>
      <div className="flex my-5">
        <button
          type="submit"
          className="bg-[#196FE1] px-4 py-2 text-[14px] xl:px-14 rounded-full font-normal  lg:text-[18px] text-white">
          Save
        </button>
      </div>
    </form>
  );
};

export default Preferences;
