"use client"
import React from "react";
import LockOpen from "@/components/Sidebar/icons/lock_open.png";
import DashboardIcon from '@/components/Sidebar/icons/Dashboard.png'
import OrdersIcon from '@/components/Sidebar/icons/Orders.png'
import ProductsIcon from '@/components/Sidebar/icons/Products.png'
import AddProductIcon from '@/components/Sidebar/icons/Add_product.png'
import TransactIons from '@/components/Sidebar/icons/Transactions.png'
import ReviewsIcon from '@/components/Sidebar/icons/Reviews.png'
import SettingsIcon from '@/components/Sidebar/icons/Settings.png'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { enableExpandedSidebarShow } from "@/redux/ExpandedSidebarShow";
import { RootState } from "@/redux/store";

const Sidebar = () => {

    const { expandedSidebarShow } = useSelector((state: RootState) => state.ExpandedSidebarShow)
    const dispatch = useDispatch()

    const { isDarkModeEnableState } = useSelector(
      (state: RootState) => state.IsDarkModeEnable
    );

    const iconsArray = [
        DashboardIcon,
        OrdersIcon,
        ProductsIcon,
        AddProductIcon,
        TransactIons,
        ReviewsIcon,
        SettingsIcon
    ]

  return (
    <div className={`h-[90vh] w-[64px] fixed top-[10vh] left-0 ${isDarkModeEnableState ? 'bg-[#222222]':'bg-[#81b4f8]'} box-border py-[32px] hidden 700px:flex flex-col items-center z-10 ${expandedSidebarShow ? 'opacity-0' : 'opacity-100'} transition-all duration-500`}>
      <div 
      className="w-[40px] h-[40px] rounded-full bg-white cursor-pointer flex items-center justify-center"
      onClick={()=>{ dispatch(enableExpandedSidebarShow()) }}>
        <Image
          src={LockOpen}
          alt="Lock Open"
          width={24}
          height={24}
          className="w-[24px] h-[24px] object-cover"
        />
      </div>

      <div
      className="flex flex-col gap-[20px] mt-[50px]">
      {
        iconsArray.map((icon, index) =>{
            return(
                <Image
                key={index}
                src={icon}
                alt="icon"
                width={24}
                height={24}
                className="w-[24px] h-[24px] object-cover cursor-pointer" />
            )
        })
      }
      </div>
    </div>
  );
};

export default Sidebar;
