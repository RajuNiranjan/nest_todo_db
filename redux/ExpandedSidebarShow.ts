// expandedSidebarShowSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  SidebarState,
  SidebarAction,
  SidebarActionTypes,
} from "./types/ExpandedSidebarTypes";

const initialState: SidebarState = {
  expandedSidebarShow: true,
};

const expandedSidebarShowSlice = createSlice({
  name: "expandedSidebarShow",
  initialState,
  reducers: {
    enableExpandedSidebarShow: (state) => {
      state.expandedSidebarShow = true;
    },
    disableExpandedSidebarShow: (state) => {
      state.expandedSidebarShow = false;
    },
  },
});

export const { enableExpandedSidebarShow, disableExpandedSidebarShow } =
  expandedSidebarShowSlice.actions;
export default expandedSidebarShowSlice.reducer;
