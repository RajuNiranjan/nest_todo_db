import Image from "next/image";
import React, { useState } from "react";
import tempImage from "./icons/material-symbols_image.png";
import Star from "../Star/Star";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const StatusDetails = () => {
  const [activeState, setActiveState] = useState(3);

  const statusStates = [
    "Order confirmed by vendor",
    "Order shipped by vendor",
    "Collected at local hub",
    "Order shipped",
    "Order collected",
    "Order delivered",
  ];

  const addressDetails = [
    {
      heading: "Billing Address Details",
      name: "Abhishek P Gupta",
      addressOne: "Landmark - Statue of shivaji maharaj",
      addressTwo:
        "house no.56,ABCD road , xYZ nagar, mumbai - 1597-1235, Maharashtra, india",
    },
    {
      heading: "Shipping Address Details",
      name: "Abhishek P Gupta",
      addressOne: "Landmark - Statue of shivaji maharaj",
      addressTwo:
        "house no.56,ABCD road , xYZ nagar, mumbai - 1597-1235, Maharashtra, india",
    },
  ];

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  return (
    <div className={`w-full ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} drop-shadow-md p-[32px] rounded-[24px] flex flex-col gap-[40px] mt-[30px]`}>
      <p className="text-[24px] font-[600]">Order Details</p>

      <div className="w-full flex flex-col gap-[40px]">
        <div className="w-full flex flex-col gap-[24px]">
          <div className="w-full flex justify-between gap-[20px] flex-col 900px:flex-row">
            <div className="flex flex-col gap-[24px]">
              <div>
                <p className="text-[24px]">Order Number - #15963-35741-12345</p>
                <p className="text-[18px] font-[600]">User Name</p>
                <p className="text-[14px]">UserID</p>
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

            <div className="flex flex-col gap-[30px]">
              <div className="flex gap-[16px]">
                <Image
                  src={tempImage}
                  alt="temp image"
                  width={56}
                  height={56}
                  className="w-[56px] h-[56px] object-cover rounded-[6px]"
                />

                <div className="flex flex-col gap-[16px]">
                  <div>
                    <p className="text-[18px] font-[600]">Products Name Title</p>
                    <p className="text-[14px] capitalize">
                      or sit voluptatem antium doloremque laudantium, to
                    </p>
                  </div>

                  <div className="flex items-baseline gap-1 flex-col 500px:flex-row">
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
              <div className="w-full rounded-full text-white bg-[#34c759] px-[24px] py-[8px] flex items-center justify-center text-[14px]">
                <p>Payment Status - Completed</p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center gap-[24px] flex-col 900px:flex-row">
            {addressDetails.map((details, index) => {
              return (
                <div
                  key={index}
                  className={`w-full 900px:w-1/2 px-[24px] py-[16px] border border-[#000000] border-opacity-20 rounded-[8px] ${isDarkModeEnableState ? 'bg-[#333333]' : 'bg-[#f8f7f7]'} flex flex-col gap-[20px]`}
                >
                  <p className="text-[18px] font-[600]">{details.heading}</p>
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[16px] font-[600]">{details.name}</p>
                    <div className="flex flex-col gap-[6px] text-[14px] capitalize">
                      <p>{details.addressOne}</p>
                      <p>{details.addressTwo}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex items-center justify-between relative flex-col 1200px:flex-row gap-[10px]">
          {statusStates.map((details, index) => {
            return (
              <div
                className={`w-[160px] h-[90px] px-[16px] py-[8px] flex items-center justify-center gap-[10px] z-10 text-center text-[14px] font-[600] rounded-[8px] ${activeState >= (index+1) ? 'bg-[#30d158] text-white' : 'bg-[#ece5e5] text-[#8a8989]'} cursor-pointer`}
                key={index}
              >
                {details}
              </div>
            );
          })}
          <div className={`w-[8px] 1200px:w-full ${isDarkModeEnableState ? 'bg-[#333333]' : 'bg-black'} h-full 1200px:h-[8px] absolute top-1/2 -translate-y-1/2 before:absolute`} />
        </div>
      </div>
    </div>
  );
};

export default StatusDetails;
