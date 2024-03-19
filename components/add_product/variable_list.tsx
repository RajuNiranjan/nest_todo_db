import React, { useState } from "react";
import VariableListDropDown from "./variable_list_drop_down";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const VariableList = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div>
      <div
        className={`w-full sm:w-full ${
          isDarkModeEnableState ? "bg-black text-white" : "bg-white"
        } p-5 rounded-md shadow-lg`}>
        <h1 className="font-semibold text-[18px]">Variable List</h1>
        <div className="my-5 grid gap-3 grid-cols-1">
          <VariableListDropDown />
        </div>
      </div>
    </div>
  );
};

export default VariableList;
