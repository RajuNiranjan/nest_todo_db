"use client";
import Image from "next/image";
import React, { useState } from "react";
import Pen from "../asserts/pencil.png";
import Input from "@/ui/input";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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
    id: "Your Name",
    type: "text",
    labelName: "Your Name",
    placeholder: "your name",
    value: "yourname",
    name: "yourname",
  },
  {
    id: "email",
    type: "email",
    labelName: "Email",
    placeholder: "example@gamil.com",
    value: "email",
    name: "email",
  },
  {
    id: "User Name",
    type: "text",
    labelName: "User Name",
    placeholder: "men",
    value: "User Name",
    name: "User Name",
  },
  {
    id: "Password",
    type: "password",
    labelName: "Password",
    placeholder: "enter password",
    value: "password",
    name: "password",
  },
  {
    id: "Present Address",
    type: "text",
    labelName: "Present Address",
    placeholder: "san jose, california",
    value: "Present Address",
    name: "Present Address",
  },
  {
    id: "City",
    type: "text",
    labelName: "City",
    placeholder: "San Jose",
    value: "San Joes",
    name: "San Joes",
  },
  {
    id: "Country",
    type: "text",
    labelName: "Country",
    placeholder: "USA",
    value: "country",
    name: "country",
  },
  {
    id: "Perminent Address",
    type: "text",
    labelName: "Perminent Address",
    placeholder: "san jose, california, USA",
    value: "Perminent Address",
    name: "Perminent Address",
  },
  {
    id: "Postal Code",
    type: "number",
    labelName: "Postal Code",
    placeholder: "522008",
    value: "Postal code",
    name: "Postal code",
  },
  {
    id: "Date Of Birth",
    type: "date",
    labelName: "Date Of Birth",
    placeholder: "san jose, california, USA",
    value: "Date Of Birth",
    name: "Date Of Birth",
  },
];

// rightIcon: <KeyboardArrowDownIcon />,

const EditProfile: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [userImage, setUserImage] = useState<string | ArrayBuffer | null>(null);

  const onChange = (e: React.ChangeEvent<any>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUserImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data", formData);

    localStorage.setItem("formData", JSON.stringify(formData));

    setFormData({});
  };

  return (
    <form className="flex flex-col " onSubmit={onSubmit}>
      <div className="flex flex-col xl:flex-row  gap-5">
        <div className="relative">
          <div className="  flex justify-center my-5 xl:my-0">
            {/* <label htmlFor="imageInput" className="cursor-pointer"> */}
            {userImage ? (
              <Image
                src={userImage as string}
                alt="user image"
                height={134}
                width={130}
                className="rounded-full object-cover"
                style={{ objectFit: "cover" }}
              />
            ) : (
              <AccountCircleIcon style={{ fontSize: 130, cursor: "pointer" }} />
            )}
            {/* </label> */}
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={onImageChange}
            />
          </div>

          <div className="bg-[#196FE1] flex justify-center items-center cursor-pointer absolute top-24 xl:top-[70px] right-28 xl:right-0 rounded-full w-8 h-8">
            <label htmlFor="imageInput">
              <Image
                src={Pen}
                alt="pen"
                width={15}
                height={15}
                className="cursor-pointer"
              />
            </label>
          </div>
        </div>
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
        </div>
      </div>
      <div className="flex justify-end my-5">
        <button
          type="submit"
          className="bg-[#196FE1] px-4 py-2 text-[14px] xl:px-14 rounded-full font-normal  lg:text-[18px] text-white">
          Save
        </button>
      </div>
    </form>
  );
};

export default EditProfile;

// import React from "react";

// const EditProfile = () => {
//   return <div>EditProfile</div>;
// };

// export default EditProfile;
