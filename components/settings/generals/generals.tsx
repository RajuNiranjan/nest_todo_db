import Input from "@/ui/input";
import CustomizedSwitches from "@/ui/switch";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";

interface SwitchItem {
  id: number;
  name: string;
}

const SwitchData: SwitchItem[] = [
  {
    id: 1,
    name: "I Send Or Receive Digital Currency",
  },
  {
    id: 2,
    name: "I Send Receive Merchant Order ",
  },
  {
    id: 1,
    name: "There Are Recommendation For My Account",
  },
];

interface InputItem {
  id?: string;
  type: string;
  labelName: string;
  placeholder: string;
  value: string;
  name: string;
  rightIcon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputData: InputItem[] = [
  {
    id: "sellingLocations",
    type: "options",
    labelName: "Selling Location(S)",
    placeholder: "Sell To All Countries",
    value: "sellingLocation",
    name: "sellingLocation",
    rightIcon: <KeyboardArrowDownIcon />,
  },
  {
    id: "shippingLocation",
    type: "options",
    labelName: "Shipping Location(S)",
    placeholder: "Shipping To All Countries You Sell To",
    value: "shippingLocation",
    name: "shippingLocation",
    rightIcon: <KeyboardArrowDownIcon />,
  },
  {
    id: "defaultCustomerLocation",
    type: "options",
    labelName: "Default Customer Location",
    placeholder: "Shop Country/Region",
    value: "defaultCustomerLocation",
    name: "defaultCustomerLocation",
    rightIcon: <KeyboardArrowDownIcon />,
  },
  {
    id: "timeZone",
    type: "text",
    labelName: "Time Zone",
    placeholder: "Select Time Zone",
    value: "timeZone",
    name: "timeZone",
  },
  {
    id: "currency",
    type: "text",
    labelName: "currency",
    placeholder: "Set At Default As Country Selected",
    value: "currency",
    name: "currency",
  },
];

const Generals = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [switchData, setSwitchData] = useState<Record<string, boolean>>({});
  const [enableTaxes, setEnableTaxes] = useState<boolean>(false);
  const [enableCoupons, setEnableCoupons] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<any>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSwitchChange = (name: string, checked: boolean) => {
    setSwitchData((prevSwitchData) => ({
      ...prevSwitchData,
      [name]: checked,
    }));
  };

  const onEnableTaxesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnableTaxes(e.target.checked);
  };

  const onEnableCouponsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnableCoupons(e.target.checked);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data", formData);
    console.log("Switch Data", switchData);
    console.log("Enable Taxes", enableTaxes);
    console.log("Enable Coupons", enableCoupons);

    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("switchData", JSON.stringify(switchData));

    setFormData({});
    setSwitchData({});
    setEnableTaxes(false);
    setEnableCoupons(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="w-full ">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
          {InputData?.map((item, index) => (
            <Input
              key={index}
              labelName={item?.labelName}
              value={formData[item?.name] || ""}
              placeholder={item?.placeholder}
              name={item?.name}
              type={item?.type}
              rightIcon={item?.rightIcon}
              onChange={onChange}
            />
          ))}
        </div>
        <div className="my-10 flex flex-col gap-3">
          <div className="flex flex-col xl:flex-row gap-4">
            <div>
              <p className="font-medium text-[16px] w-52">Enable Taxes</p>
            </div>
            <div className="flex flex-col ">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer"
                  checked={enableTaxes}
                  onChange={onEnableTaxesChange}
                />
                <p className="font-normal text-[16px]">
                  Enable Tax Rates And Calculations
                </p>
              </div>
              <div>
                <p className="font-normal text-[12px] opacity-50">
                  Rates Will Be Configurable And Taxes Will Be Calculated During
                  Checkout
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-4 ">
            <div>
              <p className="font-medium text-[16px] w-52">Enable Coupons</p>
            </div>
            <div className="flex flex-col ">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer"
                  checked={enableCoupons}
                  onChange={onEnableCouponsChange}
                />
                <p className="font-normal text-[16px]">
                  Enable Tax Use Of Coupon Codes
                </p>
              </div>
              <div>
                <p className="font-normal text-[12px] opacity-50">
                  Cupons Can Be Applied From The Cart And Checkout Pages
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-[#333B69] font-medium text-[18px]">
            Notifications
          </h1>
          <div>
            {SwitchData?.map((item, index) => (
              <CustomizedSwitches
                key={index}
                label={item?.name}
                checked={switchData[item.name] || false}
                onChange={(checked) => onSwitchChange(item.name, checked)}
              />
            ))}
          </div>
        </div>
        <div className="flex my-5">
          <button
            type="submit"
            className="bg-[#196FE1] px-4 py-2 text-[14px] xl:px-14 rounded-full font-normal  lg:text-[18px] text-white">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Generals;
