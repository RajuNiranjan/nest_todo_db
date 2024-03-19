"use client";
import React, { useState } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const Productsearch = () => {
  const navigate = useRouter();
  const navgateToAddProduct = () => {
    navigate.push("/add_product");
  };

  const [searchInput, setSearchInput] = useState<string>("");
  const [isAddProductEnabled, setAddProductEnabled] = useState<boolean>(false);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
    setAddProductEnabled(!!event.target.value);
  };

  return (
    <div className="flex w-full flex-col sm:flex-row sm:w-full md:w-[600px] lg:w-[800px] gap-2 md:gap-5 xl:w-[993px] items-center justify-between my-14">
      <div className="w-full sm:w-[300px] lg:w-[400px] xl:w-[600px] border  border-blue-400 sm:h-10 rounded-full flex items-center px-3 bg-white text-black">
        <CiSearch className="text-slate-500 text-[14px] h-7 sm:text-xl" />
        <input
          onChange={handleSearchInputChange}
          type="text"
          placeholder="Search Product"
          className="flex-1 h-full px-1 text-[12px] sm:text-[14px] bg-transparent focus:outline-none"
        />
      </div>
      <div className="flex w-full gap-5 mt-1 sm:mt-0">
        <div>
          <button
            disabled={!isAddProductEnabled}
            className={`font-normal w-[160px] sm:w-[110px] md:w-[150px] lg:w-44 h-[35px] rounded-full px-2 text-[14px] sm:text-[12px] md:text-[14px] ${
              isAddProductEnabled ? "bg-[#196FE1]" : "bg-[#629bf6]" // Change background color based on button state
            } sm:h-10 sm:px-2 lg:px-6 flex justify-center items-center text-white sm:rounded-full`}>
            search product
          </button>
        </div>
        <div
          className="font-normal w-[160px]  sm:w-[120px] md:w-[160px] lg:w-44   rounded-full   h-[35px] bg-[#196FE1] sm:h-10 md:px-6 flex justify-center items-center  text-white sm:rounded-full gap-1"
          onClick={navgateToAddProduct}>
          <ControlPointIcon className="text-[14px] sm:text-xl" />
          <button className="text-[14px] sm:text-[12px] md:text-[14px]">
            Add product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productsearch;
