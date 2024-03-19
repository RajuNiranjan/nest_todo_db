import React from "react";
import SearchContainer from "./SearchContainer";
import CouponListTable from "./CouponListTable";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Backdrop } from "@mui/material";
import AddCouponComponent from "./AddCouponComponent";
import { enableAddCouponComponentShow } from "@/redux/AddCouponComponentShow";
import EditCouponComponent from "./EditCouponComponent";

const Container = () => {
  const { addCouponComponentShowState } = useSelector(
    (state: RootState) => state.AddCouponComponentShow
  );
  const { editCouponComponentShowState } = useSelector(
    (state: RootState) => state.EditCouponComponentShow
  );
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  const dispatch = useDispatch()
  return (
    <div className="w-full flex flex-col gap-[30px]">
      <div className="w-full flex items-center justify-between gap-[20px] flex-wrap">
        <p className={`text-[36px] font-[600] ${isDarkModeEnableState && 'text-white'}`}>Coupon lists</p>
        <button
          name="add new coupon"
          className="text-white bg-[#196fe1] px-[32px] py-[8px] rounded-full text-[16px] font-[600]"
          onClick={() => { dispatch(enableAddCouponComponentShow()) }}
        >
          Add New Coupon
        </button>
      </div>
      <SearchContainer />
      <CouponListTable />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addCouponComponentShowState || editCouponComponentShowState}
      >
        {addCouponComponentShowState && <AddCouponComponent /> }
        {editCouponComponentShowState && <EditCouponComponent />}
      </Backdrop>
    </div>
  );
};

export default Container;
