import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LightModeIcon from "@mui/icons-material/LightMode";
import Image from "next/image";
import Personicon from "@/components/assets/oldman.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import {
  disableEditProfileComponentShow,
  enableEditProfileComponentShow,
} from "@/redux/EditProfileComponentShow";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import {
  enableExpandedSidebarShow,
  disableExpandedSidebarShow,
} from "@/redux/ExpandedSidebarShow";
import CloseIcon from "@mui/icons-material/Close";
import { disableDarkMode, enableDarkMode } from "@/redux/IsDarkModeEnable";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import axios from "axios";

const Navbar = () => {
  
  const [userData, setUserData] = useState<{
  email: string;
  access_token: string;
  expiry: number;
} | null>(null);

const [storeDetails, setStoreDetails] = useState<{
  storeName: string;
  storeID: string;
  storeOwnerId: string;
  expiry: number;
} | null>(null);

  const { editProfileCompanentShowState } = useSelector(
    (state: RootState) => state.EditProfileComponentShow
  );
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  const dispatch = useDispatch();

  const router = useRouter();

    // const User = localStorage.getItem("User");
    // if (!User) {
    //   router.push("/login");
    // }

  const { expandedSidebarShow } = useSelector(
    (state: RootState) => state.ExpandedSidebarShow
  );

  useEffect(() => {
    // Retrieve userData from localStorage
    const userDataString = localStorage.getItem("User");
    const storeDataString = localStorage.getItem("storeDetails")
    const now = new Date()

    if (userDataString) {

      const userDataObj = JSON.parse(userDataString);
      setUserData(userDataObj);
      console.log(userDataObj)

      if(now.getTime() > userDataObj.expiry){
        localStorage.removeItem('User')
        localStorage.removeItem('storeDetails')
      }
    }

    if(!userDataString || !storeDataString){
      router.push("/login")
    }

  }, []);

  useEffect(() => {
    // Retrieve userData from localStorage
    const userDataString = localStorage.getItem("User");
    if (userDataString) {
      const userDataObj = JSON.parse(userDataString);
      setUserData(userDataObj);
    }

    const tempStoreDetails = localStorage.getItem("storeDetails");
    if (tempStoreDetails !== null) {
      setStoreDetails(JSON.parse(tempStoreDetails));
    }
  }, []);

  // useEffect(()=>{
  //   if(userData && storeDetails){
  //     axios.post(`http://localhost:5000/attribute/${storeDetails.storeID}/create`,{
  //       name: "test",
  //       value: "test",
  //       description: "test"
  //     },
  //     {
  //       headers: {
  //         Authorization: `Bearer ${userData?.access_token}`,
  //       },
  //     }).then((res)=>{
  //       console.log(res)
  //     }).catch((err)=>{
  //       console.log(err)
  //     })
  //   }
  // },[userData, storeDetails])

  return (
    <div
      className={`w-full px-[20px] py-[10px] h-[10vh] transition-all duration-500 ${
        isDarkModeEnableState ? "bg-black text-white" : "bg-white"
      } flex items-center justify-between drop-shadow h-[70px] fixed top-0 left-0 z-10`}
    >
      <p className="hidden 700px:block text-[40px] cursor-pointer">
        Logs
      </p>
      <div
        className="flex 700px:hidden h-[40px] w-[40px] rounded-full bg-[#81b4f8] items-center justify-center text-white cursor-pointer"
        onClick={() => {
          expandedSidebarShow
            ? dispatch(disableExpandedSidebarShow())
            : dispatch(enableExpandedSidebarShow());
        }}
      >
        {expandedSidebarShow ? <CloseIcon /> : <MenuIcon />}
      </div>

      <div className="w-[45vw] 1000px:w-[588px] h-[48px] bg-[#F4F5F9] rounded-full box-border overflow-hidden flex items-center justify-between gap-[10px] px-[10px] 1000px:px-[24px] py-[10px]">
        <input
          type="text"
          className="w-full h-full outline-none border-none bg-transparent text-black"
          placeholder="Search items, Products"
        />

        <div className="text-gray-400 cursor-pointer">
          <SearchIcon />
        </div>
      </div>

      <div className="flex items-center gap-[16px]">
        <div
          className={`transition-all duration-500 ${
            isDarkModeEnableState ? "text-white" : "text-gray-400"
          } relative cursor-pointer`}
        >
          <p className="w-[16px] h-[16px] text-[10px] bg-[#ff3b30] text-white flex items-center justify-center rounded-full absolute right-[-6px] top-[-6px]">
            7
          </p>
          <NotificationsIcon />
        </div>

        <div
          className={`transition-all duration-500 ${isDarkModeEnableState ? 'text-white': 'text-gray-400'} cursor-pointer`}
          onClick={() => {
            isDarkModeEnableState
              ? dispatch(disableDarkMode())
              : dispatch(enableDarkMode());
          }}
        >
          {isDarkModeEnableState ? <DarkModeIcon /> : <LightModeIcon />}
        </div>

        <div 
        className="w-[40px] h-[40px] rounded-full border-[2px] border-[#196FE1] border-opacity-20 cursor-pointer relative" onClick={() => {
            dispatch(
              editProfileCompanentShowState
                ? disableEditProfileComponentShow()
                : enableEditProfileComponentShow()
            );
          }}>
          <Image
            src={Personicon}
            alt="Person icon"
            width={38}
            height={38}
            className="w-full h-full object-cover rounded-full"
          />
          <div className="w-[14px] h-[14px] bg-white rounded-full flex items-center justify-center absolute bottom-[-2px] right-[-2px]">
            <div className="bg-[#30d158] w-[10px] h-[10px] rounded-full" />
          </div>
        </div>

        <div
          className="hidden 1000px:flex items-center gap-[10px] cursor-pointer"
          onClick={() => {
            dispatch(
              editProfileCompanentShowState
                ? disableEditProfileComponentShow()
                : enableEditProfileComponentShow()
            );
          }}
        >
          <p className="text-[14px] font-[500]">Admin</p>
          <div
            className={`${
              editProfileCompanentShowState ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
          >
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
