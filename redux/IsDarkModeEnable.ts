import { createSlice } from "@reduxjs/toolkit";
import { IsDarkModeEnableState } from "./types/IsDarkModeEnableTypes";

const initialState: IsDarkModeEnableState = {
  isDarkModeEnableState:
    typeof window !== "undefined" && localStorage.getItem("isDarkModeEnable")
      ? true
      : false,
};

const IsDearkModeEnable = createSlice({
  name: "IsDarkModeEnable",
  initialState,
  reducers: {
    enableDarkMode: (state) => {
      localStorage.setItem("isDarkModeEnable", "true");
      state.isDarkModeEnableState = true;
    },
    disableDarkMode: (state) => {
      localStorage.removeItem("isDarkModeEnable");
      state.isDarkModeEnableState = false;
    },
  },
});

export const { enableDarkMode, disableDarkMode } = IsDearkModeEnable.actions;
export default IsDearkModeEnable.reducer;
