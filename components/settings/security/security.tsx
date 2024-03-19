"use client";
import CustomizedSwitches from "@/ui/switch";
import React, { useState } from "react";

const SwitchData = [
  {
    id: 1,
    name: "Login Two-Step Verification",
    subName: "lorem lorem lorem lorem",
  },
  {
    id: 2,
    name: "Email Setup",
    subName: "lorem lorem lorem lorem",
  },
  {
    id: 3,
    name: "SMS Setup",
    subName: "lorem lorem lorem lorem",
  },
];

const Security = () => {
  const [switchStates, setSwitchStates] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleSwitchChange = (id: number, value: boolean) => {
    setSwitchStates((prevStates) => ({
      ...prevStates,
      [id]: value,
    }));
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("switchData", JSON.stringify(switchStates));
    console.log("Switch data saved:", switchStates);
  };

  return (
    <div>
      <h1 className="font-semibold text-[18px]">Possword Management</h1>
      <form onSubmit={handleSave}>
        <div className="flex flex-col gap-5 my-5">
          {SwitchData?.map((item, index) => (
            <div key={index} className="grid grid-cols-2">
              <div>
                <div>
                  <h1 className="font-medium text-[16px]">{item?.name}</h1>
                </div>
                <div>
                  <p className="font-normal text-[12px]">{item?.subName}</p>
                </div>
              </div>
              <div>
                <CustomizedSwitches
                  onChange={(value) => handleSwitchChange(item.id, value)}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="font-semibold text-[18px]">Password Security</h1>
          <div className="my-5">
            <div className="grid grid-cols-2">
              <div>
                <div>
                  <h1 className="font-medium text-[16px]">Password Change</h1>
                </div>
                <div>
                  <p className="font-normal text-[12px]">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="bg-[#4F80E126] text-[#224893] text-[14px] font-medium cursor-pointer rounded-md flex justify-center items-center w-max px-2">
                <p>Change Password</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex my-5">
          <button
            type="submit"
            className="bg-[#196FE1] px-4 py-2 text-[14px] xl:px-14 rounded-full font-normal  lg:text-[18px] text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Security;
