import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const AllUserLists = () => {
  const userListArray = [
    {
      username: "@Ankit",
      realname: "Ankit Mohanta",
      gender: "Male",
      role: "Administrator",
      email: "abc@gmail.com",
      phone: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit Mohanta",
      gender: "Male",
      role: "Administrator",
      email: "abc@gmail.com",
      phone: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit Mohanta",
      gender: "Male",
      role: "Administrator",
      email: "abc@gmail.com",
      phone: "+911234567890",
      action: "Details",
    },
    {
      username: "@Ankit",
      realname: "Ankit Mohanta",
      gender: "Male",
      role: "Administrator",
      email: "abc@gmail.com",
      phone: "+911234567890",
      action: "Details",
    },
  ];

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  return (
    <div className={`w-full p-[32px] flex flex-col gap-[16px] ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} drop-shadow-md rounded-[16px]`}>
      <div className="flex items-center gap-[30px] flex-wrap">
        <div className="min-w-[210px] max-w-[210px] px-[10px] rounded-[4px] border border-[#71a7ef] cursor-pointer relative text-[14px]">
          <select
            name=""
            id=""
            className="w-full py-[10px] outline-none border-none bg-transparent"
          >
            <option value="">All</option>
            <option value="">lorem</option>
            <option value="">lorem</option>
          </select>
        </div>
        <div className="min-w-[210px] max-w-[210px] px-[10px] rounded-[4px] border border-[#71a7ef] cursor-pointer relative text-[14px]">
          <select
            name=""
            id=""
            className="w-full py-[10px] outline-none border-none bg-transparent"
          >
            <option value="">New users</option>
            <option value="">lorem</option>
            <option value="">lorem</option>
          </select>
        </div>
        <div className="min-w-[210px] max-w-[210px] px-[10px] rounded-[4px] border border-[#71a7ef] cursor-pointer relative text-[14px]">
          <select
            name=""
            id=""
            className="w-full py-[10px] outline-none border-none bg-transparent"
          >
            <option value="">Active users</option>
            <option value="">lorem</option>
            <option value="">lorem</option>
          </select>
        </div>
        <div className="min-w-[210px] max-w-[210px] px-[10px] rounded-[4px] border border-[#71a7ef] cursor-pointer relative text-[14px]">
          <select
            name=""
            id=""
            className="w-full py-[10px] outline-none border-none bg-transparent"
          >
            <option value="">Months</option>
            <option value="">lorem</option>
            <option value="">lorem</option>
          </select>
        </div>
      </div>

      <div
        className="w-full flex flex-col gap-[40px] overflow-auto"
        style={{
          scrollbarWidth: "none",
        }}
      >
        <div className="w-full flex items-center justify-between text-[16px] font-[600] gap-[10px]">
          <p className="min-w-[164px] max-w-[164px]">Username</p>
          <p className="min-w-[164px] max-w-[164px]">Name</p>
          <p className="max-w-[108px] min-w-[108px]">Gender</p>
          <p className="max-w-[108px] min-w-[108px]">Role</p>
          <p className="max-w-[220px] min-w-[220px]">Email</p>
          <p className="max-w-[220px] min-w-[220px]">Mobile</p>
          <p className="max-w-[124px] min-w-[124px]">Action</p>
        </div>

        <div className="w-full flex flex-col gap-[40px]">
          <div className="w-full flex flex-col gap-[24px]">
            {userListArray.map((details, index) => {
              return (
                <div
                  className="w-full flex items-center justify-between text-[14px] gap-[10px]"
                  key={index}
                >
                  <p className="max-w-[164px] min-w-[164px]">
                    {details.username}
                  </p>
                  <p className="max-w-[164px] min-w-[164px]">
                    {details.realname}
                  </p>
                  <p className="max-w-[108px] min-w-[108px]">
                    {details.gender}
                  </p>
                  <p className="max-w-[108px] min-w-[108px]">{details.role}</p>
                  <p className="max-w-[220px] min-w-[220px]">{details.email}</p>
                  <p className="max-w-[220px] min-w-[220px]">{details.phone}</p>
                  <p className="text-[14px] font-[500] text-[#196fe1] max-w-[124px] min-w-[124px]">
                    {details.action}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="w-full flex items-center justify-between gap-[20px] flex-wrap">
            <div className="text-[#b3b3b3] px-[10px] rounded-[8px] border border-[#b3b3b3]">
              <select
                name=""
                id=""
                className="w-full py-[10px] outline-none border-none bg-transparent"
              >
                <option value="">Sheet 01</option>
                <option value="">Sheet 02</option>
                <option value="">Sheet 03</option>
              </select>
            </div>

            <div className="flex items-center gap-[10px]">
              <div className="flex items-center gap-[24px]">
                <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
                  <KeyboardArrowLeftIcon />
                </div>

                <div className="w-[32px] h-[32px] flex items-center justify-center bg-[#196fe1] rounded border border-[#b3b3b3] text-[#b3b3b3]">
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
    </div>
  );
};

export default AllUserLists;
