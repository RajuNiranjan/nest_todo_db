import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchTrasaction = () => {
  return (
    <div className="relative">
      <div className="flex items-center bg-[#eaeaea] text-black border border-blue-300 rounded-md p-2 gap-2 my-5">
        <CiSearch className="text-xl" />
        <input
          type="text"
          name="input"
          placeholder="Search Category"
          className="focus:outline-none bg-transparent flex-1"
        />
      </div>
    </div>
  );
};

export default SearchTrasaction;
