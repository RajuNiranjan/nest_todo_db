import { createSlice } from "@reduxjs/toolkit";
import { AddImagePreviewShowState } from "./types/AddImagePreviewTypes";

const initialState: AddImagePreviewShowState = {
    addImagePreviewShowState: false,
    imageURl: ''
}

const AddImagePreviewShow = createSlice({
    name: "AddImagePreviewShow",
    initialState,
    reducers: {
        enableAddImagePreviewShow: (state, action)=>{
            const { imageUrl } = action.payload
            state.addImagePreviewShowState = true
            state.imageURl = imageUrl
        },
        disableAddImagePreviewShow: (state) => {
            state.addImagePreviewShowState = false
            state.imageURl = ''
        }
    }
})

export const { enableAddImagePreviewShow, disableAddImagePreviewShow } = AddImagePreviewShow.actions
export default AddImagePreviewShow.reducer