import Image from "next/image";
import React from "react";
import tempImage from "./icons/material-symbols_image.png";
import EditIcon from "@mui/icons-material/Edit";
import StarIcon from '@/components/Star/Star'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const OrderDetails = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div className="w-full flex gap-[20px] mt-[30px] flex-col 1000px:flex-row">
      <div className={`w-full 1000px:w-[60%] ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} px-[24px] py-[32px] flex flex-col gap-[10px] rounded-md drop-shadow-md`}>
        <p className="text-[24px] font-[600]">Details</p>
        <div className="w-full grid grid-cols-1 700px:grid-cols-2 gap-[20px]">
          <div className={`w-full px-[24px] py-[32px] drop-shadow-md rounded-md ${isDarkModeEnableState ? 'bg-[#333333]' : 'bg-[#f5f5ff]'} flex flex-col gap-[20px]`}>
            <div>
              <p className="text-[24px] font-[500]">John Wilson</p>
              <p className="text-[14px]">Username - @123456</p>
            </div>
            <div className="text-[16px] flex flex-col gap-[10px]">
              <div>
                <p>Email</p>
                <p className="text-[#196fe1]">abc@gmail.com</p>
              </div>
              <div>
                <p>Mobile number</p>
                <p className="text-[#196fe1]">+911234567890</p>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex gap-[20px] flex-col">
            <div className={`w-full px-[16px] py-[24px] rounded-md drop-shadow-md ${isDarkModeEnableState ? 'bg-[#333333]' : 'bg-[#f5f5ff]'} h-1/2`}>
              <p className="text-[18px] font-[600]">Delivery Date</p>
              <div className="p-[10px] bg-white rounded text-[16px] text-black">
                February 28, 2018
              </div>
            </div>
            <div className={`w-full px-[16px] py-[24px] rounded-md drop-shadow-md ${isDarkModeEnableState ? 'bg-[#333333]' : 'bg-[#f5f5ff]'} h-1/2`}>
              <p className="text-[18px] font-[600]">Status</p>
              <div className="p-[10px] bg-[#34c759] text-white rounded text-[24px] font-[600]">
                Delivered
              </div>
            </div>
          </div>
          <div className={`w-full rounded-md px-[24px] py-[32px] ${isDarkModeEnableState ? 'bg-[#333333]' : 'bg-[#f8f7f7]'} flex flex-col gap-[20px] drop-shadow-md`}>
            <div className="w-full flex justify-between items-center gap-[20px]">
              <p className="text-[18px] font-[600]">Billing Address Details</p>
              <EditIcon className="text-[#196fe1]" />
            </div>
            <div className="flex flex-col gap-[12px]">
              <p className="text-[16px] font-[600]">Abhisek P Gupta</p>
              <p className="text-[16px] font-[600]">123-456-7890</p>
              <div className="flex flex-col gap-[8px] text-[14px]">
                <p>Landmark- Statue of Shivaji</p>
                <p>House No.56</p>
                <p>ABCD, Road, XYZ nagar</p>
                <p>Mumbai - 1579 - 1235</p>
                <p>Maharastra, India</p>
              </div>
            </div>
          </div>
          <div className={`w-full rounded-md px-[24px] py-[32px] ${isDarkModeEnableState ? 'bg-[#333333]' : 'bg-[#f8f7f7]'} flex flex-col gap-[20px] drop-shadow-md`}>
            <div className="w-full flex justify-between items-center gap-[20px]">
              <p className="text-[18px] font-[600]">Shipping Address Details</p>
              <EditIcon className="text-[#196fe1]" />
            </div>
            <div className="flex flex-col gap-[12px]">
              <p className="text-[16px] font-[600]">Abhisek P Gupta</p>
              <p className="text-[16px] font-[600]">123-456-7890</p>
              <div className="flex flex-col gap-[8px] text-[14px]">
                <p>Landmark- Statue of Shivaji</p>
                <p>House No.56</p>
                <p>ABCD, Road, XYZ nagar</p>
                <p>Mumbai - 1579 - 1235</p>
                <p>Maharastra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full 1000px:w-[40%] ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} px-[24px] py-[32px] rounded-md drop-shadow-md flex flex-col justify-between gap-[30px]`}>
        <div className={`w-full px-[16px] py-[24px] rounded-md drop-shadow-md ${isDarkModeEnableState ? 'bg-[#333333]' : 'bg-[#f5f5ff]'}`}>
          <p className="text-[24px] font-[600]">Order Notes</p>
          <div className="mt-[20px] rounded-md bg-white text-black overflow-hidden w-full pb-[20px]">
            <div className="w-full px-[10px] bg-[#196fe1] bg-opacity-50 text-[16px] font-[500]">
              <select name="" id="" className="w-full bg-transparent py-[10px]">
                <option value="">Notes 1</option>
                <option value="">Notes 2</option>
              </select>
            </div>
            <div className="w-[96%] rounded-md border border-black mx-auto mt-[20px] p-[10px] text-[14px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, iure.
              </p>
            </div>
          </div>
        </div>
        <div className={`w-full px-[16px] py-[24px] rounded-md drop-shadow-md flex flex-col gap-[20px] ${isDarkModeEnableState ? 'bg-[#333333]' : 'bg-[#f8f7f7]'}`}>
            <p className="text-[24px] font-[600]">
                Feedback from user
            </p>
            <div className="flex 1300px:items-center flex-col 1300px:flex-row gap-[10px]">
                <div className="flex items-center gap-[6px]">
                    <Image
                    src={tempImage}
                    alt="Temp image"
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] object-cover" />
                    <Image
                    src={tempImage}
                    alt="Temp image"
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] object-cover" />
                    <Image
                    src={tempImage}
                    alt="Temp image"
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] object-cover" />
                    <Image
                    src={tempImage}
                    alt="Temp image"
                    width={40}
                    height={40}
                    className="w-[40px] h-[40px] object-cover" />
                </div>
                <div className="flex flex-col gap-[10px]">
                    <div className="flex gap-[6px]">
                        <StarIcon fillColor="#ffd60a" />
                        <StarIcon fillColor="#ffd60a" />
                        <StarIcon fillColor="#ffd60a" />
                        <StarIcon fillColor="#ffd60a" />
                        <StarIcon fillColor="#ecece5" />
                    </div>
                    <p className="text-[14px]">
                        10,000+ Feedback
                    </p>
                </div>
            </div>
          <div className="mt-[20px] rounded-md bg-white text-black overflow-hidden w-full pb-[20px]">
            <div className="w-[96%] rounded-md border border-black mx-auto mt-[20px] p-[10px] text-[14px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, iure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
