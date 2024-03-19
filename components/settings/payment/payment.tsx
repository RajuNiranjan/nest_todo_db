import CustomizedSwitches from "@/ui/switch";
import React, { useState } from "react";

const Payment = () => {
  const [isUPIEnabled, setIsUPIEnabled] = useState<boolean>(false);
  const [isInternetBankingEnabled, setIsInternetBankingEnabled] =
    useState<boolean>(true);

  const handleUPIChange = () => {
    setIsUPIEnabled((prevValue) => !prevValue);
  };

  const handleInternetBankingChange = () => {
    setIsInternetBankingEnabled((prevValue) => !prevValue);
  };

  return (
    <div className="w-full h-full overflow-auto">
      <ul className="flex justify-between items-center font-semibold">
        <li className="min-w-[180px] max-w-[200px] ">Method</li>
        <li className="min-w-[180px] max-w-[200px] ">Enable</li>
        <li className="min-w-[280px] max-w-[300px] ">Descriptions</li>
        <li className="min-w-[180px] max-w-[200px] ">Action</li>
      </ul>
      <div className="my-3">
        <ul className="flex justify-between items-center">
          <li className="min-w-[180px] max-w-[200px] ">UPI</li>
          <li className="min-w-[180px] max-w-[200px] ">
            <CustomizedSwitches
              checked={isUPIEnabled}
              onChange={handleUPIChange}
            />
          </li>
          <li className="min-w-[280px] max-w-[300px] ">
            Lorem ipsum dolor sit amet.
          </li>
          <li className="min-w-[180px] max-w-[200px] text-[#196FE1] cursor-pointer font-semibold">
            Edit
          </li>
        </ul>{" "}
        <ul className="flex justify-between items-center">
          <li className="min-w-[180px] max-w-[200px] ">Interner Banking</li>
          <li className="min-w-[180px] max-w-[200px] ">
            <CustomizedSwitches
              checked={isInternetBankingEnabled}
              onChange={handleInternetBankingChange}
            />
          </li>
          <li className="min-w-[280px] max-w-[300px] ">
            Lorem ipsum dolor sit amet.
          </li>
          <li className="min-w-[180px] max-w-[200px] text-[#196FE1] cursor-pointer font-semibold">
            Edit
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Payment;
