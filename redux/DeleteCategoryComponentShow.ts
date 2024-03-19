import { createSlice } from "@reduxjs/toolkit";
import { DeleteCategoryComponentShowState } from "./types/DeleteCategoryComponentTypes";

const initialState: DeleteCategoryComponentShowState = {
    deleteCategoryComponentShowState: false,
    deleteCategoryComponentID: ""
}

const DeleteCategoryComponentShow = createSlice({
    name: "DeleteCategoryComponentShow",
    initialState,
    reducers: {
        enableDeleteCategoryComponentShow: (state, action) => {
            state.deleteCategoryComponentShowState = true;
            state.deleteCategoryComponentID = action.payload.id
        },
        disableDeleteCategoryComponentShow: (state) => {
            state.deleteCategoryComponentID = ""
            state.deleteCategoryComponentShowState = false;
        }
    }
})

export const { enableDeleteCategoryComponentShow, disableDeleteCategoryComponentShow } = DeleteCategoryComponentShow.actions
export default DeleteCategoryComponentShow.reducer