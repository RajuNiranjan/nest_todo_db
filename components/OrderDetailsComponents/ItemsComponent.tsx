import React from "react";
import tempImage from './icons/material-symbols_image.png'
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ItemsComponent = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div className={`mt-[30px] w-full rounded-md ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} drop-shadow-md px-[24px] py-[32px] flex flex-col gap-[30px]`}>
      <p className="text-[24px] font-[600]">Items</p>
      <div
        className="w-full flex flex-col gap-[30px] overflow-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="w-full flex items-center justify-between gap-[10px] text-[16px] font-[600]">
          <p className="min-w-[300px] max-w-[300px]">Item</p>
          <p className="min-w-[200px] max-w-[200px]">Product ID</p>
          <p className="min-w-[140px] max-w-[140px]">Product Code</p>
          <p className="min-w-[116px] max-w-[116px]">Price</p>
          <p className="min-w-[116px] max-w-[116px]">Coupon</p>
          <p className="min-w-[110px] max-w-[110px]">Quantity</p>
          <p className="min-w-[110px] max-w-[110px] text-center">Total</p>
        </div>
        <div className="w-full flex flex-col gap-[16px]">
          <div className="w-full flex items-center justify-between gap-[10px] text-[14px]">
            <div className="min-w-[300px] max-w-[300px] flex gap-[10px]">
                <Image
                src={tempImage}
                alt="Temp Image"
                width={48}
                height={48}
                className="w-[48px] h-[48px] object-cover" />
                <div className="flex flex-col gap-[6px]">
                <p className="text-[16px] font-[600]">Navy blue tshirt</p>
                <div className="flex gap-[10px] flex-wrap">
                  <p>
                    Size - xl
                  </p>
                  <p>
                    Color - blue
                  </p>
                </div>
                </div>
            </div>
            <p className="min-w-[200px] max-w-[200px]">#15965-2665-262</p>
            <p className="min-w-[140px] max-w-[140px]">#00000</p>
            <p className="min-w-[116px] max-w-[116px]">₹500</p>
            <p className="min-w-[116px] max-w-[116px] font-[600]">#OFF50%</p>
            <p className="min-w-[110px] max-w-[110px]">4</p>
            <p className="min-w-[110px] max-w-[110px] text-center font-[600]">₹2000</p>
          </div>
          <div className="w-full flex items-center justify-between gap-[10px] text-[14px]">
            <div className="min-w-[300px] max-w-[300px] flex gap-[10px]">
                <Image
                src={tempImage}
                alt="Temp Image"
                width={48}
                height={48}
                className="w-[48px] h-[48px] object-cover" />
                <div className="flex flex-col gap-[6px]">
                <p className="text-[16px] font-[600]">Navy blue tshirt</p>
                <div className="flex gap-[10px] flex-wrap">
                  <p>
                    Size - xl
                  </p>
                  <p>
                    Color - blue
                  </p>
                </div>
                </div>
            </div>
            <p className="min-w-[200px] max-w-[200px]">#15965-2665-262</p>
            <p className="min-w-[140px] max-w-[140px]">#00000</p>
            <p className="min-w-[116px] max-w-[116px]">₹500</p>
            <p className="min-w-[116px] max-w-[116px] font-[600]">#OFF50%</p>
            <p className="min-w-[110px] max-w-[110px]">4</p>
            <p className="min-w-[110px] max-w-[110px] text-center font-[600]">₹2000</p>
          </div>
        </div>
      </div>
      <div className={`w-full border border-l-0 border-r-0 border-b-0 ${isDarkModeEnableState ? 'border-t-white' : 'border-t-black'} border-t-2 border-opacity-70`}>
        <div className="flex flex-col gap-[10px] mt-[10px] ml-auto w-fit">
          <div className="flex items-center gap-[10px]">
            <p className="text-[16px] min-w-[110px] max-w-[110px]">Discount</p>
            <p className="text-[16px] font-[600] min-w-[110px] max-w-[110px] text-center">
              ₹ 0
            </p>
          </div>
          <div className="flex items-center gap-[10px]">
            <p className="text-[16px] min-w-[110px] max-w-[110px]">
              Grand total
            </p>
            <p className="text-[16px] font-[600] min-w-[110px] max-w-[110px] text-center">
              ₹ 4000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsComponent;
