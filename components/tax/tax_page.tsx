"use client";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import AddNewTax from "@/components/tax/add_new_tax";
import TaxTable from "@/components/tax/tax_table";
import { RootState } from "@/redux/store";
import PaginationRounded from "@/ui/pagination";
import SelectComponent from "@/ui/selectComponent";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTax from "./add_tax";

const TableHeadData = [
  "Name",
  "Description",
  "Note",
  "Tax Rate",
  "Count Of Items",
];

const TableBodyData = [
  {
    name: "Value-Added Tax(VAT)",
    description: "Description",
    note: "11.0%",
    taxRate: "11.0%",
    countOfItems: "02",
  },
  {
    name: "Value-Added Tax(VAT)",
    description: "Description",
    note: "11.0%",
    taxRate: "11.0%",
    countOfItems: "02",
  },
  {
    name: "Value-Added Tax(VAT)",
    description: "Description",
    note: "11.0%",
    taxRate: "11.0%",
    countOfItems: "02",
  },
  {
    name: "Value-Added Tax(VAT)",
    description: "Description",
    note: "11.0%",
    taxRate: "11.0%",
    countOfItems: "02",
  },
  {
    name: "Value-Added Tax(VAT)",
    description: "Description",
    note: "11.0%",
    taxRate: "11.0%",
    countOfItems: "02",
  },
];

const TaxPage = () => {
  const [showAddTaxComponent, setShowAddNewTaxes] = useState(false);

  const handleAddNewTax = () => {
    setShowAddNewTaxes(!showAddTaxComponent);
    console.log("closed");
  };

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
          <div className="flex justify-between items-center">
            <h1
              className={`font-semibold text-[36px] ${
                isDarkModeEnableState && "text-white"
              }`}>
              Taxes
            </h1>
            <button
              onClick={handleAddNewTax}
              className="text-[16px] font-semibold bg-[#196FE1] text-white flex justify-center items-center py-1 px-3 rounded-full">
              Add New Taxes
            </button>
          </div>
          <div
            className={`${
              isDarkModeEnableState ? "bg-black text-white" : "bg-white"
            } rounded-md shadow-sm border mt-10 border-blue-300 p-3`}>
            <div>
              <TaxTable headers={TableHeadData} data={TableBodyData} />
              <div className="w-full flex items-center justify-between ">
                <div>
                  <SelectComponent />
                </div>
                <div>
                  <PaginationRounded />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddTaxComponent && (
        <div className=" w-full h-full p-2 fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50  top-0 z-10 flex justify-center items-center">
          <div
            className={`${
              isDarkModeEnableState ? "bg-black text-white" : "bg-white"
            } p-5 w-full xl:w-[1000px]  rounded-md shadow-xl border`}>
            {/* <AddNewTax handleAddNewTax={handleAddNewTax} /> */}
            <AddTax handleAddNewTax={handleAddNewTax} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxPage;
