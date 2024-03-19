import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchSettings = () => {
  return (
    <div className="flex w-full items-center gap-5">
      <div className="flex xl:w-[750px] items-center bg-[#eaeaea] border border-blue-300 rounded-full  p-2 gap-2 my-5 text-black">
        <CiSearch className="text-xl" />
        <input
          type="text"
          name="input"
          placeholder="Search"
          className="focus:outline-none bg-transparent flex-1"
        />
      </div>
      <div>
        <button className="bg-blue-500 px-3 py-3 xl:px-0 xl:py-0 w-full xl:w-[203px] xl:h-[45px] text-[12px] xl:text-[16px] rounded-full font-medium tracking-[1px] text-white">
          Search product
        </button>
      </div>
    </div>
  );
};

export default SearchSettings;
