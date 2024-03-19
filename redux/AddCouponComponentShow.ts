import { createSlice } from "@reduxjs/toolkit";
import { AddCouponComponentShowState } from "./types/AddCouponComponentTypes";

const initialState: AddCouponComponentShowState = {
    addCouponComponentShowState: false
}

const AddCouponComponentShow = createSlice({
    name: 'AddCouponComponentShow',
    initialState,
    reducers: {
        enableAddCouponComponentShow: (state) =>{
            state.addCouponComponentShowState = true
        },
        disableAddCouponComponentShow: (state) => {
            state.addCouponComponentShowState = false
        }
    }
})

export const { enableAddCouponComponentShow, disableAddCouponComponentShow } = AddCouponComponentShow.actions
export default AddCouponComponentShow.reducer