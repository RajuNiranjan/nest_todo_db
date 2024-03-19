import { createSlice } from "@reduxjs/toolkit";
import { EditProfileComponentShowState } from "./types/EditProfileComponentTypes";

const initialState: EditProfileComponentShowState = {
    editProfileCompanentShowState: false
}

const EditProfileComponentShow = createSlice({
    name: 'EditProfileComponentShow',
    initialState,
    reducers: {
        enableEditProfileComponentShow: (state) =>{
            state.editProfileCompanentShowState = true
        },
        disableEditProfileComponentShow: (state) =>{
            state.editProfileCompanentShowState = false
        }
    }
})

export const { enableEditProfileComponentShow, disableEditProfileComponentShow } = EditProfileComponentShow.actions
export default EditProfileComponentShow.reducer