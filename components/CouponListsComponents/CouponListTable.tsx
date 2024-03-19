import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Backdrop } from "@mui/material";
import EditCouponComponent from "./EditCouponComponent";
import { enableEditCouponComponentShow } from "@/redux/EditCouponComponentShow";

const CouponListTable = () => {
  const { editCouponComponentShowState } = useSelector(
    (state: RootState) => state.EditCouponComponentShow
  );
  const dispatch = useDispatch()
  const listTable = [
    {
      couponName: "@Anitafaraji",
      description: "Anette black",
      media: "Media.jpg",
      couponCode: "OFF50%BY",
      startingDate: "October 30, 2017",
      expiryDate: "October 30, 2017",
      Action: "Edit",
    },
    {
      couponName: "@Anitafaraji",
      description: "Anette black",
      media: "Media.jpg",
      couponCode: "OFF50%BY",
      startingDate: "October 30, 2017",
      expiryDate: "October 30, 2017",
      Action: "Edit",
    },
    {
      couponName: "@Anitafaraji",
      description: "Anette black",
      media: "Media.jpg",
      couponCode: "OFF50%BY",
      startingDate: "October 30, 2017",
      expiryDate: "October 30, 2017",
      Action: "Edit",
    },
  ];
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div className={`w-full ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} drop-shadow-md rounded-[16px] flex flex-col gap-[40px] px-[32px] py-[32px] overflow-auto`} style={{scrollbarWidth: 'none'}}>
      <div className="w-full flex items-center justify-between text-[16px] font-[600] gap-[10px]">
        <div className="min-w-[180px] max-w-[180px]">Coupon name</div>
        <div className="min-w-[220px] max-w-[220px]">Description</div>
        <div className="min-w-[160px] max-w-[160px]">Media</div>
        <div className="min-w-[160px] max-w-[160px]">Coupon code</div>
        <div className="min-w-[140px] max-w-[140px]">Starting Date</div>
        <div className="min-w-[140px] max-w-[140px]">Expiry Date</div>
        <div className="min-w-[120px] max-w-[120px]">Action</div>
      </div>
      <div className="w-full flex flex-col gap-[20px]">
        {listTable.map((details, index) => {
          return (
            <div
              key={index}
              className="w-full flex items-center justify-between text-[14px] gap-[10px]"
            >
              <div className="min-w-[180px] max-w-[180px]">{details.couponName}</div>
              <div className="min-w-[220px] max-w-[220px]">{details.description}</div>
              <div className="min-w-[160px] max-w-[160px]">{details.media}</div>
              <div className="min-w-[160px] max-w-[160px]">{details.couponCode}</div>
              <div className="min-w-[140px] max-w-[140px]">{details.startingDate}</div>
              <div className="min-w-[140px] max-w-[140px]">{details.expiryDate}</div>
              <div className="min-w-[120px] max-w-[120px] font-[500] text-[#196fe1] cursor-pointer" onClick={()=>{ dispatch(enableEditCouponComponentShow())}}>{details.Action}</div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-between gap-[20px] flex-wrap">
        <div className="text-[#b3b3b3] px-[8px] rounded-[8px] border border-[#b3b3b3] flex items-center gap-[10px]">
          <select name="" id="" className="py-[8px] outline-none border-none bg-transparent">
            <option value="">Sheet 01</option>
            <option value="">Sheet 02</option>
          </select>
        </div>
        <div className="flex items-center gap-[10px]">
          <div className="flex items-center gap-[24px]">
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
              <KeyboardArrowLeftIcon />
            </div>

            <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
              <p>1</p>
            </div>
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
              <p>2</p>
            </div>
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
              <p>3</p>
            </div>
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
              <p>4</p>
            </div>
            <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
              <p>5</p>
            </div>

            <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponListTable;
