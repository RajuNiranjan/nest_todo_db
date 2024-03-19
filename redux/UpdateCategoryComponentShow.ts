import { createSlice } from "@reduxjs/toolkit";
import { UpdateCategoryComponentShowState } from "./types/UpdateCategoryComponentTypes";

const initialState: UpdateCategoryComponentShowState = {
    updateCategoryComponentShowState: false,
    updateCategoryComponentID: ""
}

const UpdateCategoryComponentShow = createSlice({
    name: "UpdateCategoryComponentShow",
    initialState,
    reducers: {
        enableUpdateCategoryComponentShow: (state, action) => {
            state.updateCategoryComponentShowState = true;
            state.updateCategoryComponentID = action.payload.id
        },
        disableUpdateCategoryComponentShow: (state) => {
            state.updateCategoryComponentID = ""
            state.updateCategoryComponentShowState = false;
        }
    }
})

export const { enableUpdateCategoryComponentShow, disableUpdateCategoryComponentShow } = UpdateCategoryComponentShow.actions
export default UpdateCategoryComponentShow.reducer