import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface SelectProps {
  name?: string;
}

const Select: React.FC<SelectProps> = ({ name }) => {
  return (
    <div className="border border-blue-300 rounded-md w-full px-2 py-1 flex justify-between items-center text-[12px] sm:text-[14px] sm:w-[200px]">
      {name} <KeyboardArrowDownIcon className="text-[14px] sm:text-xl" />
    </div>
  );
};

export default Select;

{/*  */}
