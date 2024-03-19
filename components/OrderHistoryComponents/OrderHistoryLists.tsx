import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const OrderHistoryLists = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  const [orderHistoryQuery, setOrderHistoryQuery] = useState("");
  const [recentFilterOpen, setRecentFilterOpen] = useState(false);
  const [activeRecentFilter, setActiveRecentFilter] = useState("Recent");
  const [monthFilterOpen, setMonthFilterOpen] = useState(false);
  const [activeMonthFilter, setActiveMonthFilter] = useState("Month");

  const recentFilterArray = ["Recent", "Last month", "Last 3 months"];
  const monthFilterArray = ["Month", "Quater", "Year"];

  return (
    <div className={`w-full ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} drop-shadow-md rounded-[16px] p-[32px] mt-[30px] flex flex-col gap-[32px]`}>
      <div className="w-full flex items-center gap-[16px] rounded-[8px] px-[24px] py-[10px] border border-[#81b4f8] bg-[#f4f5f9] text-[#b3b3b3]">
        <div className="cursor-pointer">
          <SearchIcon />
        </div>

        <input
          type="text"
          placeholder="Search order"
          className="w-full outline-none border-none bg-transparent"
          onChange={(e) => {
            setOrderHistoryQuery(e.target.value);
          }}
        />
      </div>

      <div className="w-full flex flex-col gap-[16px]">
        <div className="flex items-center gap-[16px] flex-wrap">
          <div className="px-[10px] rounded-[8px] border border-[#b3b3b3]">
          <select name="" id="" className="text-[#b3b3b3] py-[10px] flex items-center gap-[10px] relative cursor-pointer text-[14px] outline-none bg-transparent">
          {recentFilterArray.map((details, index) => {
                return (
                  <option
                  key={index}>
                    {details}
                  </option>
                );
              })}
          </select>
            </div>
          <div className="px-[10px] rounded-[8px] border border-[#b3b3b3]">
          <select name="" id="" className="text-[#b3b3b3] py-[10px] flex items-center gap-[10px] relative cursor-pointer text-[14px] outline-none bg-transparent">
          {monthFilterArray.map((details, index) => {
                return (
                  <option
                  key={index}>
                    {details}
                  </option>
                );
              })}
          </select>
            </div>
        </div>
        <div className="w-full flex flex-col gap-[48px] overflow-auto" style={{scrollbarWidth: 'none'}}>
          <div className="w-full flex items-center justify-between text-[16px] font-[600] gap-[10px]">
            <p className="min-w-[180px] max-w-[180px]">Customer name</p>

            <p className="min-w-[180px] max-w-[180px]">Username</p>

            <p className="min-w-[200px] max-w-[200px]">Email/Phone</p>

            <p className="min-w-[140px] max-w-[140px]">Address</p>

            <p className="min-w-[140px] max-w-[140px]">Product</p>

            <p className="min-w-[140px] max-w-[140px] text-center">Delivery Date</p>

            <p className="min-w-[140px] max-w-[140px] text-center">Status</p>

            <p className="min-w-[100px] max-w-[100px]">Action</p>
          </div>
          <div className="w-full flex flex-col gap-[40px]">
            <div className="w-full flex flex-col gap-[10px]">
              <div className="w-full flex justify-between text-[14px] gap-[10px]">
                <p className="min-w-[180px] max-w-[180px]">John Doe</p>
                <p className="min-w-[180px] max-w-[180px]">#123456</p>
                <p className="min-w-[200px] max-w-[200px] text-[#196fe1]">xyz@gmail.com/1234567890</p>
                <p className="min-w-[140px] max-w-[140px]">2118 Thornridge Cir. Syracuse, Connecticut 35624</p>

                <p className="min-w-[140px] max-w-[140px] text-[#196fe1]">Mens cap</p>

                <p className="min-w-[140px] max-w-[140px] text-center">August 2, 2013</p>

                <p className="min-w-[140px] max-w-[140px] text-center bg-[#30d158] h-fit text-white rounded-full px-[20px] py-[8px] cursor-pointer">August 2, 2013</p>

                <p className="min-w-[100px] max-w-[100px] text-[16px] font-[600] text-[#196fe1]">Action</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-between flex-wrap gap-[20px]">
              <div className="text-[#b3b3b3] px-[8px] rounded-[8px] border border-[#b3b3b3] text-[14px]">
                <select name="" id="" className="py-[8px] outline-none border-none bg-transparent">
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
                  <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
                    <p>3</p>
                  </div>
                  <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
                    <p>4</p>
                  </div>
                  <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
                    <p>5</p>
                  </div>

                  <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
                    <KeyboardArrowRightIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryLists;
