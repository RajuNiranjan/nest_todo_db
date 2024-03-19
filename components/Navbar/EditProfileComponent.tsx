import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import EditProfileIcon from "@/components/Navbar/icons/edit_profile.png";
import AccountSettingIcon from "@/components/Navbar/icons/settings.png";
import WalletIcon from "@/components/Navbar/icons/wallet.png";
import BillsIcon from "@/components/Navbar/icons/bills.png";
import HelpCenterIcon from "@/components/Navbar/icons/help_center.png";
import LogOutIcon from "@/components/Navbar/icons/log_out.png";
import Image from "next/image";
import { useRouter } from "next/router";

const EditProfileComponent = () => {
  const { editProfileCompanentShowState } = useSelector(
    (state: RootState) => state.EditProfileComponentShow
  );
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  const router = useRouter()

  const iconsDetails = [
    {
      icon: EditProfileIcon,
      icon_name: "Edit Profile",
    },
    {
      icon: AccountSettingIcon,
      icon_name: "Account Settings",
    },
    {
      icon: WalletIcon,
      icon_name: "Wallet",
    },
    {
      icon: BillsIcon,
      icon_name: "Bills",
    },
    {
      icon: HelpCenterIcon,
      icon_name: "Help Center",
    },
    {
      icon: LogOutIcon,
      icon_name: "Log out",
    },
  ];

  function handleClick(icon_name: string){
    if(icon_name === "Log out"){
      localStorage.removeItem("User")
      router.push("/login")
    }
  }

  return (
    <div
      className={`fixed top-[80px] right-[20px] z-10 w-[180px] pl-[10px] py-[30px] rounded-[8px] ${isDarkModeEnableState ? 'bg-[#222222] text-white' : 'bg-white'} drop-shadow-md ${
        editProfileCompanentShowState ? "translate-x-0" : "translate-x-[200px]"
      } transition-all duration-500`}
    >
      <div
      className="w-full flex flex-col gap-[10px]">
        {iconsDetails.map((icon, index) => {
          return (
            <div 
            className="w-full flex items-center gap-[6px] cursor-pointer text-[#b3b3b3]" 
            key={index}
            onClick={()=>{
              handleClick(icon.icon_name)
            }} >
              <Image
                src={icon.icon}
                alt={icon.icon_name}
                width={24}
                height={24}
                className="w-[24px] h-[24px] object-cover"
              />
              <p
              className="text-[14px]">
                {icon.icon_name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditProfileComponent;
