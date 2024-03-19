import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SettingsIcon from "@mui/icons-material/Settings";

const Icons = [
  {
    id: 1,
    icons: <HomeIcon />,
    iconName: "Home",
    path: "/",
  },
  {
    id: 2,
    icons: <ShoppingBagIcon />,
    iconName: "Orders",
    path: "/",
  },
  {
    id: 4,
    icons: <AddCircleIcon />,
    iconName: "Add",
    path: "/add_product",
  },
  {
    id: 3,
    icons: <WidgetsIcon />,
    iconName: "Product",
    path: "/product_list",
  },

  {
    id: 5,
    icons: <AttachMoneyIcon />,
    iconName: "History",
    path: "/",
  },
  {
    id: 5,
    icons: <SettingsIcon />,
    iconName: "Settings",
    path: "/",
  },
];

const BottomMenu = () => {
  return (
    <nav className="bg-[#2c7feb] h-14 shadow-xl grid grid-cols-12 gap-5  w-full">
      {Icons?.map((item, index) => (
        <Link
          href={item?.path}
          key={index}
          className="flex flex-col justify-center items-center col-span-2 hover:bg-blue-400">
          <span className="text-xl text-white">{item?.icons}</span>
          <span className="font-medium text-white text-[12px] tracking-[1px] ">
            {item.iconName}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomMenu;
