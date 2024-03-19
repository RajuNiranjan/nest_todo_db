"use client";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SearchSettings from "./search_settings";
import EditProfile from "./generals/edit_profile";
import Preferences from "./preferences/preferences";
import Security from "./security/security";
import Payment from "./payment/payment";
import Store from "./store/store";
import Generals from "./generals/generals";
import MultipleTagSelector from "@/ui/CustomSelectItems";
import MultiSelectWithSearch from "@/ui/multy_select";
import CustomSelect from "@/ui/custom_select";

const Button = [
  {
    id: 5,
    name: "Store",
  },
  {
    id: 6,
    name: "Generals",
  },
  // {
  //   id: 1,
  //   name: "Preferences",
  // },
  {
    id: 3,
    name: "Security",
  },
  {
    id: 4,
    name: "Payment",
  },
];

const SettingsPage = () => {
  const { expandedSidebarShow } = useSelector(
    (state: RootState) => state.ExpandedSidebarShow
  );
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  const [activeButton, setActiveButton] = useState(5);

  const handleButtonClick = (id: number) => {
    setActiveButton(id);
  };

  // const options = [
  //   { value: "option1", label: "Option 1" },
  //   { value: "option2", label: "Option 2" },
  //   { value: "option4", label: "Option 4" },
  //   // Add more options as needed
  // ];

  const options = ["Option 1", "Option 2", "Option 3"];

  const handleSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
    // Add your custom logic here
  };

  return (
    <div
      className={`w-full min-h-screen transition-all duration-500 ${
        isDarkModeEnableState ? "bg-[#333333]" : "bg-[#ebeef0]"
      }`}>
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />
      <div
        className={`w-full pt-[100px] transition-all duration-500 ${
          expandedSidebarShow ? "pl-[240px]" : "pl-[20px] 700px:pl-[90px]"
        } pr-[20px] pb-[20px]`}>
        <h1 className="text-[36px] font-semibold">Settings Page</h1>
        <div>
          {/* <SearchSettings /> */}
          {/* <MultipleTagSelector /> */}
          {/* <MultiSelectWithSearch /> */}
          {/* <CustomSelect options={options} />; */}
          {/* <CustomSelect options={options} onChange={handleSelect} /> */}
        </div>
        <div className="w-full bg-white border p-5 border-blue-300 rounded-md shadow-sm h-max">
          <div className="flex xl:grid xl:grid-cols-10 overflow-auto w-full gap-5">
            {Button?.map((item, index) => (
              <button
                onClick={() => handleButtonClick(item.id)}
                key={index}
                className={`${
                  activeButton === item.id
                    ? "bg-blue-500 transition-all"
                    : "bg-[#B3B3B3] transition-all"
                }  px-2 py-[10px] xl:px-1 xl:py-2 w-full text-[14px] xl:text-[16px] rounded-full font-medium tracking-[1px] text-white `}>
                {activeButton === 1 && item.id === 1
                  ? "Edit Profile"
                  : item.name}
              </button>
            ))}
          </div>
          <div className="my-10">
            {activeButton === 5 && <Store />}
            {activeButton === 6 && <Generals />}
            {/* {activeButton === 1 && <Preferences />} */}
            {activeButton === 3 && <Security />}
            {activeButton === 4 && <Payment />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
