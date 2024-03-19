import AddNewAttribute from "@/components/attributes/add_new_attribute/add_new_attribute";
import AttributeTable from "@/components/attributes/attribute_table";
import React, { useState } from "react";
import EditProfileComponent from "@/components/Navbar/EditProfileComponent";
import Navbar from "@/components/Navbar/Navbar";
import ExpandedSidebar from "@/components/Sidebar/ExpandedSidebar";
import Sidebar from "@/components/Sidebar/Sidebar";
import SelectComponent from "@/ui/selectComponent";
import PaginationRounded from "@/ui/pagination";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const AttributesPage = () => {
  const [showAddAttribute, setShowAssAttribute] = useState<Boolean>(false);

  const handleOpenAddAttribute = () => {
    setShowAssAttribute(!showAddAttribute);
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
        <div className="w-full relative">
          <div className="flex justify-between items-center">
            <h1
              className={`text-[24px] xl:text-4xl font-semibold ${
                isDarkModeEnableState && "text-white"
              }`}>
              Attributes
            </h1>
            <div>
              <button
                onClick={handleOpenAddAttribute}
                className="bg-blue-500 px-3 py-1 xl:px-0 xl:py-0 xl:w-[203px] xl:h-[40px] text-[14px] xl:text-[16px] rounded-full font-semibold text-white">
                Add New Attributes
              </button>
            </div>
          </div>
          <div
            className={`w-full ${
              isDarkModeEnableState ? "bg-black text-white" : "bg-white"
            } rounded-md shadow-md p-5 my-10 overflow-auto`}>
            <AttributeTable />
          </div>
          {showAddAttribute && (
            <div className=" w-full h-full p-2 fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50  top-0 z-10 flex justify-center items-center">
              <div
                className={`${
                  isDarkModeEnableState ? "bg-black text-white" : "bg-white"
                } p-5 w-full xl:w-[1000px]  rounded-md shadow-xl border`}>
                <AddNewAttribute
                  handleOpenAddAttribute={handleOpenAddAttribute}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttributesPage;
