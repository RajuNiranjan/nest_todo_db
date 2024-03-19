import { createSlice } from "@reduxjs/toolkit";
import { AddCategoryListShowState } from "./types/AddCategoryListTypes";

const initialState: AddCategoryListShowState = {
    addCategoryListShowState: false
}

const AddCategoryListShow = createSlice({
    name: "AddCategoryListShow",
    initialState,
    reducers: {
        enableAddCategoryListShow: (state) => {
            state.addCategoryListShowState = true
        },
        disableAddCategoryListShow: (state) => {
            state.addCategoryListShowState = false
        }
    }
})

export const { enableAddCategoryListShow, disableAddCategoryListShow } = AddCategoryListShow.actions
export default AddCategoryListShow.reducer