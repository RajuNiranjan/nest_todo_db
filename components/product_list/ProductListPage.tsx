import Productsearch from "@/components/product_list/product_search";
import ProductTable from "@/components/product_list/product_table";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const TableHeadData = [
  {
    name: "ProductName",
    minWidth: 100,
    maxWidth: 100,
  },
  {
    name: "Category",
    minWidth: 100,
    maxWidth: 100,
  },
  {
    name: "Price",
    minWidth: 100,
    maxWidth: 100,
  },
  {
    name: "Stock",
    minWidth: 100,
    maxWidth: 100,
  },
  {
    name: "Sold",
    minWidth: 100,
    maxWidth: 100,
  },
  {
    name: "Revenues",
    minWidth: 100,
    maxWidth: 100,
  },
  {
    name: "Actions",
    minWidth: 100,
    maxWidth: 100,
  },
];

const TableBodyData = [
  {
    productName: "Navyblue smart watch",
    category: "Men. Watches",
    price: 231,
    stock: 23,
    sold: 31,
    revenue: 15000,
  },
  {
    productName: "Navyblue smart watch",
    category: "childer, Watches",
    price: 218,
    stock: 23,
    sold: 126,
    revenue: 100000,
  },
  {
    productName: "Navyblue smart watch",
    category: "Men. Watches",
    price: 231,
    stock: 23,
    sold: 31,
    revenue: 15000,
  },
  {
    productName: "Navyblue smart watch",
    category: "childer, Watches",
    price: 218,
    stock: 23,
    sold: 126,
    revenue: 100000,
  },
  {
    productName: "Navyblue smart watch",
    category: "Men. Watches",
    price: 231,
    stock: 23,
    sold: 31,
    revenue: 15000,
  },
  {
    productName: "Navyblue smart watch",
    category: "childer, Watches",
    price: 218,
    stock: 23,
    sold: 126,
    revenue: 100000,
  },
];

const ProductListPage = () => {
  const { expandedSidebarShow } = useSelector(
    (state: RootState) => state.ExpandedSidebarShow
  );
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
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
        <div className="mb-20 sm:mb-0 ">
          <h1
            className={`text-[36px] font-semibold ${
              isDarkModeEnableState && "text-white"
            }`}>
            Product List
          </h1>
          <Productsearch />
          <div
            className={`${
              isDarkModeEnableState ? "bg-black text-white" : "bg-white"
            } p-5 border border-blue-300 rounded-md shadow-sm`}>
            <ProductTable headers={TableHeadData} data={TableBodyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
