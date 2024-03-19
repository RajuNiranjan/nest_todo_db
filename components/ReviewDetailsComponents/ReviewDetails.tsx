import Image from "next/image";
import React from "react";
import tempImage from "./icons/material-symbols_image.png";
import Star from "../Star/Star";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ReviewDetails = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div className={`w-full ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} flex flex-col gap-[40px] p-[32px] rounded-[24px] drop-shadow-md`}>
      <p className="text-[24px] font-[600]">User Details</p>
      <div className="w-full flex justify-between flex-col 900px:flex-row gap-[20px]">
        <div className="flex flex-col gap-[24px]">
          <div>
            <p className="text-[18px] font-[600]">User Name</p>
            <p className="text-[14px]">UserID</p>
            <p className="text-[14px]">Gender</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[14px]">
              Email - <span className="text-[#196fe1]">xyz@gmail.com</span>
            </p>
            <p className="text-[14px]">
              Mobile - <span className="text-[#196fe1]">123-456-789</span>
            </p>
          </div>
        </div>

        <div className="flex gap-[16px] flex-col 400px:flex-row">
          <Image
            src={tempImage}
            alt="temp image"
            width={110}
            height={110}
            className="w-[110px] h-[110px] object-cover rounded-[12px]"
          />

          <div className="flex flex-col gap-[16px]">
            <div>
              <p className="text-[18px] font-[600]">Product name</p>
              <p className="text-[14px] capitalize">
                or sit voluptatem antium doloremque laudantium, to
              </p>
            </div>

            <div className="flex items-baseline gap-[10px] flex-col 700px:flex-row">
              <div className="flex gap-1">
              <Star fillColor="#ffd601" />
              <Star fillColor="#ffd601" />
              <Star fillColor="#ffd601" />
              <Star fillColor="#ffd601" />
              <Star fillColor="#b3b3b3" />
              </div>
              <p className="text-[14px] capitalize">10,000+ feedback</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-col gap-[20px]">
        <div className="flex gap-[20px] flex-col 700px:flex-row 700px:items-center">
          <p className="text-[14px] font-[600]">Product Rating By Customer</p>
          <div className="flex items-center gap-1">
            <Star fillColor="#ffd601" />
            <Star fillColor="#ffd601" />
            <Star fillColor="#ffd601" />
            <Star fillColor="#ffd601" />
            <Star fillColor="#b3b3b3" />
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <p className="text-[16px]">Feedback</p>
          <div className="rounded-[4px] w-full p-[10px] border border-[#71a7ef] text-[14px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatuDuis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatuDuis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatu
          </div>
        </div>
        <div className="flex flex-col gap-[12px] mt-[20px]">
          <p className="text-[14px] font-[600]">Media By Customer</p>
          <div className="flex items-center gap-[10px] flex-wrap">
            <div className="bg-[#d9d9d9] w-[60px] h-[60px] rounded-[8px]" />
            <div className="bg-[#d9d9d9] w-[60px] h-[60px] rounded-[8px]" />
            <div className="bg-[#d9d9d9] w-[60px] h-[60px] rounded-[8px]" />
            <div className="bg-[#d9d9d9] w-[60px] h-[60px] rounded-[8px]" />
            <div className="bg-[#d9d9d9] w-[60px] h-[60px] rounded-[8px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
