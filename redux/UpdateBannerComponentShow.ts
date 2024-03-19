import { createSlice } from "@reduxjs/toolkit";
import { UpdateBannerComponentShowState } from "./types/UpdateBannerComponentTypes";

const initialState: UpdateBannerComponentShowState = {
    updateBannerComponentShowState: false,
    updateBannerComponentID: "",
    updateBannerComponentBtnUrl: "",
    updateBannerComponentContent: "",
    updateBannerComponentImageUrl: "",
    updateBannerComponentLabel: "",
}

const UpdateBannerComponentShow = createSlice({
    name: "UpdateBannerComponentShow",
    initialState,
    reducers: {
        enableUpdateBannerComponentShow: (state, action) => {
            state.updateBannerComponentShowState = true;
            state.updateBannerComponentID = action.payload.id
            state.updateBannerComponentBtnUrl = action.payload.btnUrl
            state.updateBannerComponentContent = action.payload.content
            state.updateBannerComponentImageUrl = action.payload.imageUrl
            state.updateBannerComponentLabel = action.payload.label
        },
        disableUpdateBannerComponentShow: (state) => {
            state.updateBannerComponentID = ""
            state.updateBannerComponentBtnUrl = ""
            state.updateBannerComponentContent = ""
            state.updateBannerComponentImageUrl = ""
            state.updateBannerComponentLabel = ""
            state.updateBannerComponentShowState = false;
        }
    }
})

export const { enableUpdateBannerComponentShow, disableUpdateBannerComponentShow } = UpdateBannerComponentShow.actions
export default UpdateBannerComponentShow.reducer