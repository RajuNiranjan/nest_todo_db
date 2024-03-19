import { createSlice } from "@reduxjs/toolkit";
import { AddUserComponentShowState } from "./types/AddUserComponentTypes";

const initialState: AddUserComponentShowState ={
    addUserComponentShowState: false
}

const AddUserComponentShow = createSlice({
    name: "AddUserComponentShow",
    initialState,
    reducers: {
        enableAddUserComponentShow: (state:any)=>{
            state.addUserComponentShowState = true
        },
        disableAddUserComponentShow: (state:any)=>{
            state.addUserComponentShowState = false
        }
    }
})

export const { enableAddUserComponentShow, disableAddUserComponentShow } = AddUserComponentShow.actions
export default AddUserComponentShow.reducer