import { createSlice } from "@reduxjs/toolkit";
import { EditCouponComponentShowState } from "./types/EditCouponComponentTypes";

const initialState: EditCouponComponentShowState = {
    editCouponComponentShowState: false
}

const EditCouponComponentShow = createSlice({
    name: 'EditCouponComponentShow',
    initialState,
    reducers: {
        enableEditCouponComponentShow: (state) =>{
            state.editCouponComponentShowState = true
        },
        disableEditCouponComponentShow: (state) => {
            state.editCouponComponentShowState = false
        }
    }
})

export const { enableEditCouponComponentShow, disableEditCouponComponentShow } = EditCouponComponentShow.actions
export default EditCouponComponentShow.reducer