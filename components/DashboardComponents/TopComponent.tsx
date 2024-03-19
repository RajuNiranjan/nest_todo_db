import React from "react";
import RevenueIcon from "@/components/DashboardComponents/icons/Revenue.png";
import OrdersIcon from '@/components/DashboardComponents/icons/Orders.png'
import ShippingIcon from '@/components/DashboardComponents/icons/Shipping.png'
import EarningIcon from '@/components/DashboardComponents/icons/Earning.png'
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const TopComponent = () => {
  const boxArray = [
    {
      icon: RevenueIcon,
      title: "Revenue",
      numericValue: "$13,456.5",
      detailsDesc: "With shipping fees are not included",
    },
    {
      icon: OrdersIcon,
      title: "Orders",
      numericValue: "60.515",
      detailsDesc: "Excluding orders in transit",
    },
    {
      icon: ShippingIcon,
      title: "Shipping",
      numericValue: "15516",
      detailsDesc: "In 19 categories",
    },
    {
      icon: EarningIcon,
      title: "Earning",
      numericValue: "$51638",
      detailsDesc: "Based in your local time",
    },
  ];

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  return (
    <div className="w-full">
      <p className={`transition-all duration-500 ${isDarkModeEnableState && 'text-white'} text-[36px] font-semibold flex flex-col 1300px:flex-row items-baseline`}>
        Dashboard{" "}
        <span className="text-[12px]">Whole data about your business here</span>
      </p>

      <div className="w-full grid grid-cols-1 700px:grid-cols-2 1300px:grid-cols-4 items-center gap-8 justify-between mt-[30px]">
        {boxArray.map((boxDetails, index) => {
          return (
            <div
              className={`w-full px-[16px] py-[24px] transition-all duration-300 ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} rounded-[8px] drop-shadow-md flex flex-col items-center gap-[16px] cursor-pointer`}
              key={index}
            >
              <div className="w-full flex items-center justify-center gap-[10px]">
                <Image
                  src={boxDetails.icon}
                  alt={boxDetails.title}
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px] object-cover"
                />

                <div>
                  <p className="text-[16px] text-[#196fe1]">
                    {boxDetails.title}
                  </p>

                  <p className="text-[24px] font-semibold">
                    {boxDetails.numericValue}
                  </p>
                </div>
              </div>

              <p className={`text-[12px] transition-all duration-500 ${isDarkModeEnableState ? 'text-white' : 'text-[#b3b3b3]'}`}>
                {boxDetails.detailsDesc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopComponent;
