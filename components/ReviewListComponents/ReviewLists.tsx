import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Star from "../Star/Star";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ReviewLists = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div className={`w-full ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} drop-shadow-md rounded-[16px] p-[32px] flex flex-col gap-[32px]`}>
      <div className="flex items-center gap-[30px] flex-wrap">
      <div className="w-[210px] px-[10px] rounded-[4px] border border-[#71a7ef] cursor-pointer relative text-[14px]">
          <select name="" id="" className="w-full py-[10px] outline-none border-none bg-transparent">
            <option value="">All</option>
            <option value="">lorem</option>
          </select>
        </div>
        <div className="w-[210px] px-[10px] rounded-[4px] border border-[#71a7ef] cursor-pointer relative text-[14px]">
          <select name="" id="" className="w-full py-[10px] outline-none border-none bg-transparent">
            <option value="">Above 4+</option>
            <option value="">lorem</option>
          </select>
        </div>
        <div className="w-[210px] px-[10px] rounded-[4px] border border-[#71a7ef] cursor-pointer relative text-[14px]">
          <select name="" id="" className="w-full py-[10px] outline-none border-none bg-transparent">
            <option value="">Months</option>
            <option value="">lorem</option>
          </select>
        </div>
      </div>
      <div className="w-full flex flex-col gap-[40px] overflow-auto" style={{scrollbarWidth: 'none'}}>
        <div className="w-full flex items-center justify-between text-[16px] font-[600] gap-[10px]">
          <p className="min-w-[164px] max-w-[164px]">Username</p>
          <p className="min-w-[164px] max-w-[164px]">Name</p>
          <p className="min-w-[220px] max-w-[220px]">Email</p>
          <p className="min-w-[220px] max-w-[220px]">Feedback</p>
          <p className="min-w-[220px] max-w-[220px]">Products</p>
          <p className="min-w-[124px] max-w-[124px]">Action</p>
        </div>
        <div className="w-full flex flex-col gap-[20px]">
          <div className="w-full flex justify-between text-[14px] gap-[10px]">
            <p className="min-w-[164px] max-w-[164px]">@Ankit</p>
            <p className="min-w-[164px] max-w-[164px]">Ankit Mohanta</p>
            <p className="min-w-[220px] max-w-[220px]">abc@gmail.com</p>
            <div className="min-w-[220px] max-w-[220px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, aut! <span className="font-[600] text-[#196fe1]">Show more</span>
                <div className="flex items-center gap-[8px]">
                <Star fillColor="#34c759" />
                <Star fillColor="#34c759" />
                <Star fillColor="#34c759" />
                <Star fillColor="#34c759" />
                <Star fillColor="#b3b3b3" />
                </div>
            </div>
            <p className="min-w-[220px] max-w-[220px] text-[#196fe1] font-[500]">Nividia Head Cup</p>
            <p className="min-w-[124px] max-w-[124px] text-[#196fe1] font-[500]">Details</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-between gap-[20px] flex-wrap">
        <div className="text-[#b3b3b3] px-[8px] rounded-[8px] border border-[#b3b3b3] text-[14px]">
            <select
              name=""
              id=""
              className="w-full py-[8px] outline-none border-none bg-transparent"
            >
              <option value="">Sheet 01</option>
              <option value="">Sheet 02</option>
            </select>
          </div>

          <div className="flex items-center gap-[10px]">
            <div className="flex items-center gap-[24px]">
              <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
                <KeyboardArrowLeftIcon />
              </div>

              <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
                <p>1</p>
              </div>
              <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
                <p>2</p>
              </div>

              <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
                <KeyboardArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewLists;
