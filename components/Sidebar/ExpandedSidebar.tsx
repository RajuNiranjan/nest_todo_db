"use client";
import React, { useEffect, useState } from "react";
import LockedIcon from "@/components/Sidebar/icons/Locked.png";
import DashboardIcon from "@/components/Sidebar/icons/Dashboard.png";
import OrdersIcon from "@/components/Sidebar/icons/Orders.png";
import ProductsIcon from "@/components/Sidebar/icons/Products.png";
import AddProductIcon from "@/components/Sidebar/icons/Add_product.png";
import TransactIons from "@/components/Sidebar/icons/Transactions.png";
import ReviewsIcon from "@/components/Sidebar/icons/Reviews.png";
import CategoryIcon from "@/components/Sidebar/icons/category.png";
import InvoiceIcon from "@/components/Sidebar/icons/invoice.png";
import TaxIcon from "@/components/Sidebar/icons/tax.png";
import SettingsIcon from "@/components/Sidebar/icons/Settings.png";
import UsersIcon from '@/components/Sidebar/icons/UsersIcon.png'
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { disableExpandedSidebarShow } from "@/redux/ExpandedSidebarShow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";

const ExpandedSidebar = () => {
  const [activeSubExpands, setActiveSubExpands] = useState(0);

  const { expandedSidebarShow } = useSelector(
    (state: RootState) => state.ExpandedSidebarShow
  );
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setActiveSubExpands(0);
    dispatch(disableExpandedSidebarShow());
  }, []);

  const expandedIconsDetails = [
    {
      icon: DashboardIcon,
      icon_name: "Dashboard",
      will_expand: false,
      to: "/",
    },
    {
      icon: OrdersIcon,
      icon_name: "Orders lists",
      will_expand: true,
      to: "",

      subMenus: [
        {
          name: "Invoice",
          path: "/invoice_details",
        },
        {
          name: "Order Status",
          path: "/OrderStatus",
        },
        {
          name: "Order Detail",
          path: "/OrderDetails",
        },
        {
          name: "Order Tracking",
          path: "/",
        },
        {
          name: "Order Delivered",
          path: "/",
        },
        {
          name: "Order History",
          path: "/OrderHistory",
        },
      ],
    },
    {
      icon: ProductsIcon,
      icon_name: "Products",
      will_expand: true,
      to: "",

      subMenus: [
        {
          name: "Products lists",
          path: "/product_list",
        },
        {
          name: "Add products",
          path: "/add_product",
        },
        {
          name: "Update products",
          path: "/",
        },
        {
          name: "Product category",
          path: "/",
        },
      ],
    },
    {
      icon: TransactIons,
      icon_name: "Transactions",
      will_expand: true,
      to: "",

      subMenus: [
        {
          name: "Transactions details",
          path: "/transaction_details",
        },
        {
          name: "Transactions history",
          path: "/transactions_history",
        },
      ],
    },
    {
      icon: UsersIcon,
      icon_name: "Users",
      will_expand: true,
      to: "",

      subMenus: [
        {
          name: "User history",
          path: "/UserHistory",
        },
        {
          name: "User lists",
          path: "/UserList",
        },
      ],
    },
    {
      icon: ReviewsIcon,
      icon_name: "Reviews",
      will_expand: true,
      to: "",
      subMenus: [
        {
          name: "Review details",
          path: "/ReviewDetails",
        },
        {
          name: "Review List",
          path: "/ReviewList",
        },
      ],
    },
    {
      icon: ReviewsIcon,
      icon_name: "Attributes",
      will_expand: false,
      to: "/attributes",
    },
    {
      icon: InvoiceIcon,
      icon_name: "Invoice Detaials",
      will_expand: false,
      to: "/invoice_details",
    },
    {
      icon: TaxIcon,
      icon_name: "Taxes",
      will_expand: false,
      to: "/tax",
    },
    {
      icon: CategoryIcon,
      icon_name: "Category Lists",
      will_expand: false,
      to: "/Categorylists",
    },
    {
      icon: SettingsIcon,
      icon_name: "Settings",
      will_expand: false,
      to: "/settings",
    },
  ];

  return (
    <div
      className={`h-[90vh] w-full 700px:w-[220px] fixed top-[10vh] left-0 ${
        isDarkModeEnableState ? "bg-[#222222]" : "bg-[#81b4f8]"
      } box-border py-[32px] px-[16px] flex flex-col items-center z-20 ${
        expandedSidebarShow ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-500 overflow-auto`}
      style={{ scrollbarWidth: "none" }}>
      <div
        className="w-[40px] min-h-[40px] rounded-full bg-white cursor-pointer flex items-center justify-center"
        onClick={() => {
          setActiveSubExpands(0);
          dispatch(disableExpandedSidebarShow());
        }}>
        <Image
          src={LockedIcon}
          alt="Lock Open"
          width={24}
          height={24}
          className="w-[24px] h-[24px] object-cover"
        />
      </div>

      <div className="flex flex-col gap-[20px] mt-[50px] w-full">
        {expandedIconsDetails.map((icon_details, index) => {
          return (
            <div key={index} className="w-full">
              <div
                className={`w-full flex items-center ${
                  icon_details.will_expand ? "justify-between" : "justify-start"
                } cursor-pointer`}
                onClick={() => {
                  icon_details.will_expand &&
                    (activeSubExpands === index
                      ? setActiveSubExpands(0)
                      : setActiveSubExpands(index));
                }}>
                <Link href={icon_details.to}>
                  <div className="w-full flex items-center gap-[6px]">
                    <Image
                      src={icon_details.icon}
                      alt={icon_details.icon_name}
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] object-cover cursor-pointer"
                    />
                    <p className="text-[14px] text-white">
                      {icon_details.icon_name}
                    </p>
                  </div>
                </Link>
                {icon_details.will_expand && (
                  <div
                    className={`text-white ${
                      activeSubExpands === index ? "rotate-180" : "rotate-0"
                    } transition-all duration-500`}>
                    <KeyboardArrowDownIcon />
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col gap-[8px] mt-[10px]">
                {icon_details.subMenus &&
                  activeSubExpands === index &&
                  icon_details.subMenus.map((item, index) => {
                    return (
                      <Link key={index} href={item?.path}>
                        <p className="text-white text-[14px] ml-[36px]">
                          {item?.name}
                        </p>
                      </Link>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandedSidebar;
