import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

interface AdderssDetails {
  addressType?: string;
  clinetName?: string;
  landmark?: string;
  address?: string;
}

const AddressDetails: React.FC<AdderssDetails> = ({
  addressType,
  clinetName,
  landmark,
  address,
}) => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div
      className={`w-full border border-gray-800 rounded-md p-3 xl:p-5 ${
        isDarkModeEnableState ? "bg-[#333333]" : "bg-[#eaeaea]"
      }`}>
      <div>
        <h1 className="capitalize font-semibold text-[18px]">{addressType}</h1>
      </div>
      <div
        className="my-5
      ">
        <h1 className="font-semibold text-[16px]">{clinetName}</h1>
        <div>
          <p className="text-[14px] font-normal">
            <span>Landmark - </span>
            {landmark}
          </p>
          <p className="text-[14px] font-normal">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
