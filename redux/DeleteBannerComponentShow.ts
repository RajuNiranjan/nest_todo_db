import { createSlice } from "@reduxjs/toolkit";
import { DeleteBannerComponentShowState } from "./types/DeleteBannerComponentTypes";

const initialState: DeleteBannerComponentShowState = {
    deleteBannerComponentShowState: false,
    deleteBannerComponentID: ""
}

const DeleteBannerComponentShow = createSlice({
    name: "DeleteBannerComponentShow",
    initialState,
    reducers: {
        enableDeleteBannerComponentShow: (state, action) => {
            state.deleteBannerComponentShowState = true;
            state.deleteBannerComponentID = action.payload.id
        },
        disableDeleteBannerComponentShow: (state) => {
            state.deleteBannerComponentID = ""
            state.deleteBannerComponentShowState = false;
        }
    }
})

export const { enableDeleteBannerComponentShow, disableDeleteBannerComponentShow } = DeleteBannerComponentShow.actions
export default DeleteBannerComponentShow.reducer