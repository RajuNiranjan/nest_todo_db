import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const PaginationComponent = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center gap-[24px]">
        {" "}
        <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
          <KeyboardArrowLeftIcon />{" "}
        </div>{" "}
        <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
          <p>1</p>{" "}
        </div>{" "}
        <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
          <p>2</p>{" "}
        </div>{" "}
        <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
          <KeyboardArrowRightIcon />{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default PaginationComponent;
