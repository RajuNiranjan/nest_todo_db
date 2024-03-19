import { createSlice } from "@reduxjs/toolkit";
import { AddStoreComponentShowState } from "./types/AddStoreComponentTypes";

const initialState: AddStoreComponentShowState = {
    addStoreComponentShowState: false
}

const AddStoreComponentShow = createSlice({
    name: "AddStoreComponentShow",
    initialState,
    reducers: {
        enableAddStoreComponentShow: (state) => {
            state.addStoreComponentShowState = true;
        },
        disableAddStoreComponentShow: (state) => {
            state.addStoreComponentShowState = false;
        }
    }
})

export const { enableAddStoreComponentShow, disableAddStoreComponentShow } = AddStoreComponentShow.actions
export default AddStoreComponentShow.reducer