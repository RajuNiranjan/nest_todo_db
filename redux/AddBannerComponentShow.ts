import { createSlice } from "@reduxjs/toolkit";
import { AddBannerComponentShowState } from "./types/AddBannerComponentTypes";

const initialState: AddBannerComponentShowState = {
    addBannerCompanentShowState: false
}

const AddBannerComponentShow = createSlice({
    name: 'AddBannerComponentShow',
    initialState,
    reducers: {
        enableAddBannerComponentShow: (state) =>{
            state.addBannerCompanentShowState = true
        },
        disableAddBannerComponentShow: (state) => {
            state.addBannerCompanentShowState = false
        }
    }
})

export const { enableAddBannerComponentShow, disableAddBannerComponentShow } = AddBannerComponentShow.actions
export default AddBannerComponentShow.reducer