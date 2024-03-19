"use client";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import VariableListCard from "./variable_list_card";
import { MdOutlinePhoto } from "react-icons/md";

interface VariableListItem {
  id: number;
  name: string;
  subName?: string;
  icon?: JSX.Element[];
  sizes?: SizeItem[];
  size?: string[];
}

interface SizeItem {
  id: number;
  size: string;
}

const VariableListData: VariableListItem[] = [
  {
    id: 1,
    name: "Colors",
    subName: "Black",
    icon: [
      <MdOutlinePhoto key={1} className="text-[40px]" />,
      <MdOutlinePhoto key={4} className="text-[40px]" />,
      <MdOutlinePhoto key={2} className="text-[40px]" />,
      <MdOutlinePhoto key={3} className="text-[40px]" />,
    ],
  },
  {
    id: 2,
    name: "Sizes",
    sizes: [
      {
        id: 1,
        size: "S",
      },
      {
        id: 2,
        size: "M",
      },
      {
        id: 3,
        size: "XL",
      },
    ],
    size: ["S", "M", "XL"],
  },
];

const VariableListDropDown = () => {
  const [showData, setShowData] = useState(false);
  // const handleShowDropMenu = () => {
  //   setShowData(!showData);
  // };

  const [selectedItem, setSelectedItem] = useState<number | string | null>(
    null
  );

  const handleShowDropMenu = (itemId: number | string) => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem === itemId ? null : itemId
    );
  };
  return (
    <>
      {VariableListData?.map((item, index) => (
        <div key={index}>
          <div className="w-full h-10 bg-blue-300 rounded-md flex justify-between items-center px-3">
            <h1 className="font-medium">{item?.name}</h1>
            <div
              onClick={() => handleShowDropMenu(item.id || item.name)}
              className="cursor-pointer">
              {selectedItem === (item.id || item.name) ? (
                <FaAngleUp className="text-xl" />
              ) : (
                <FaAngleDown className="text-xl" />
              )}
            </div>
          </div>
          {selectedItem === (item.id || item.name) && (
            <VariableListCard data={item} />
          )}
        </div>
      ))}
    </>
  );
};

export default VariableListDropDown;
