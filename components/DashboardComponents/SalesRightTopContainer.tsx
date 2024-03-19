import { Avatar } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const SalesRightTopContainer = () => {
  const { expandedSidebarShow } = useSelector(
    (state: RootState) => state.ExpandedSidebarShow
  );
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div className={`w-full transition-all duration-500 ${expandedSidebarShow ? 'h-full' : 'h-1/2'} rounded-[16px] drop-shadow-md ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} py-[16px] px-[20px] flex flex-col gap-[20px]`}>
      <div className="w-full flex items-center justify-between gap-[10px]">
        <p className="text-[24px] font-bold">Product Name</p>

        <p className="text-[14px]">Qty left</p>
      </div>

      <div className="w-full flex flex-col gap-[16px]">
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-[20px]">
            <div className="w-[40px] h-[40px]">
              <Avatar />
            </div>

            <div className="h-[40px] flex flex-col justify-between">
              <p className="text-[16px] font-semibold">Product Name</p>

              <p className="text-[14px]">+10lakh order</p>
            </div>
          </div>

          <p className="text-[18px] text-[#196fe1]">1,000</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-[20px]">
            <div className="w-[40px] h-[40px]">
              <Avatar />
            </div>

            <div className="h-[40px] flex flex-col justify-between">
              <p className="text-[16px] font-semibold">Product Name</p>

              <p className="text-[14px]">+10lakh order</p>
            </div>
          </div>

          <p className="text-[18px] text-[#196fe1]">1,000</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex gap-[20px]">
            <div className="w-[40px] h-[40px]">
              <Avatar />
            </div>

            <div className="h-[40px] flex flex-col justify-between">
              <p className="text-[16px] font-semibold">Product Name</p>

              <p className="text-[14px]">+10lakh order</p>
            </div>
          </div>

          <p className="text-[18px] text-[#196fe1]">1,000</p>
        </div>
      </div>

      <div
      className="w-full flex items-center justify-end">

        <div
        className="flex items-center gap-[10px] cursor-pointer">
            <p
            className="text-[12px]">
                Show more
            </p>
            <KeyboardArrowDownIcon />
        </div>

      </div>
    </div>
  );
};

export default SalesRightTopContainer;
