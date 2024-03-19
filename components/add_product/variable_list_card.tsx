import React, { useLayoutEffect } from "react";
import { MdOutlinePhoto } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdCurrencyRupee } from "react-icons/md";

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
interface VariableListCardProps {
  data: VariableListItem;
}

const VariableListCard: React.FC<VariableListCardProps> = ({ data }) => {
  return (
    <div>
      {data?.subName && data?.icon && (
        <div className="my-4 flex justify-between items-center">
          <div>{data?.subName && <h1>{data?.name}</h1>}</div>
          <div className="flex items-center justify-between">{data?.icon}</div>
        </div>
      )}
      {data?.size && (
        <ul className="flex gap-2 my-4">
          {data?.size?.map((item, index) => (
            <li
              key={index}
              className="w-max bg-[#196FE1] text-white px-3 rounded-md text-[16px] font-normal ">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VariableListCard;
