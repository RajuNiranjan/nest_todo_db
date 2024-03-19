import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const UserHistoryDetails = () => {
  const userHistoryArray = [
    {
      username: "@Ankit",
      realname: "Ankit",
      email: "ankit@ankit.com",
      phoneNumber: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit",
      email: "ankit@ankit.com",
      phoneNumber: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit",
      email: "ankit@ankit.com",
      phoneNumber: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit",
      email: "ankit@ankit.com",
      phoneNumber: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit",
      email: "ankit@ankit.com",
      phoneNumber: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit",
      email: "ankit@ankit.com",
      phoneNumber: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit",
      email: "ankit@ankit.com",
      phoneNumber: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit",
      email: "ankit@ankit.com",
      phoneNumber: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit",
      email: "ankit@ankit.com",
      phoneNumber: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit",
      email: "ankit@ankit.com",
      phoneNumber: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit",
      email: "ankit@ankit.com",
      phoneNumber: "+911234567890",
      action: "Details",
    },
  ];
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div className={`w-full flex flex-col gap-[16px] p-[32px] drop-shadow-md rounded-[16px] ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'}`}>
      <div className="flex items-center gap-[30px] flex-wrap">
        <div className="w-[210px] px-[10px] rounded-[4px] border border-[#71a7ef] cursor-pointer relative text-[14px]">
          <select name="" id="" className="w-full py-[10px] outline-none border-none bg-transparent">
            <option value="">All</option>
            <option value="">lorem</option>
          </select>
        </div>
        <div className="w-[210px] px-[10px] rounded-[4px] border border-[#71a7ef] cursor-pointer relative text-[14px]">
          <select name="" id="" className="w-full py-[10px] outline-none border-none bg-transparent">
            <option value="">New users</option>
            <option value="">lorem</option>
          </select>
        </div>
        <div className="w-[210px] px-[10px] rounded-[4px] border border-[#71a7ef] cursor-pointer relative text-[14px]">
          <select name="" id="" className="w-full py-[10px] outline-none border-none bg-transparent">
            <option value="">Active users</option>
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
      <div
        className="w-full flex flex-col gap-[40px] overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="w-full flex items-center justify-between text-[16px] font-[600] gap-[10px]">
          <p className="min-w-[164px] max-w-[164px]">Username</p>
          <p className="min-w-[164px] max-w-[164px]">Name</p>
          <p className="min-w-[220px] max-w-[220px]">Email</p>
          <p className="min-w-[220px] max-w-[220px]">Mobile</p>
          <p className="min-w-[124px] max-w-[124px]">Action</p>
        </div>
        <div className="w-full flex flex-col gap-[10px]">
          {userHistoryArray.map((details, index) => {
            return (
              <div
                className="w-full flex items-center justify-between text-[14px] gap-[10px]"
                key={index}
              >
                <p className="min-w-[164px] max-w-[164px]">
                  {details.username}
                </p>
                <p className="min-w-[164px] max-w-[164px]">
                  {details.realname}
                </p>
                <p className="min-w-[220px] max-w-[220px]">{details.email}</p>
                <p className="min-w-[220px] max-w-[220px]">
                  {details.phoneNumber}
                </p>
                <p className="min-w-[124px] max-w-[124px] text-[#196fe1] font-[500]">
                  {details.action}
                </p>
              </div>
            );
          })}
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

              <div className="w-[32px] h-[32px] flex items-center justify-center rounded border bg-[#196fe1] border-[#b3b3b3] text-[#b3b3b3]">
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

export default UserHistoryDetails;
