"use client";
import { RootState } from "@/redux/store";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddNewAttributeProps {
  handleOpenAddAttribute: () => void;
}

interface FormData {
  newAttributeName: string;
  value: string;
  description: string;
}

const AddNewAttribute: React.FC<AddNewAttributeProps> = ({
  handleOpenAddAttribute,
}) => {
  const dispatch = useDispatch();

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [storeDetails, getStoreDetails] = useState<{
    storeName: string;
    storeID: string;
    storeOwnerId: string;
  } | null>(null);
  const [userData, setUserData] = useState<{
    email: string;
    access_token: string;
    expiry: number;
  } | null>(null);

  const getDataFromLoacalStorege = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };

  const [formData, setFormData] = useState<FormData>({
    newAttributeName: "",
    value: "",
    description: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Log form data
  };

  const StoreData = getDataFromLoacalStorege("storeDetails");
  const UserData = getDataFromLoacalStorege("User");

  const handleAddAttribute = (e: any) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post(
        `https://ts-api-for-ecomm-product.onrender.com/attributes/${StoreData?.storeID}/create`,
        {
          name: formData?.newAttributeName,
          values: formData?.value,
          description: formData?.description,
        },
        {
          headers: {
            Authorization: `Bearer ${UserData?.access_token}`,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        if (res.data.id) {
          SuccessMessage("Attribute Added Successfully");
          setFormData({
            newAttributeName: "",
            value: "",
            description: "",
          });
        }
      })
      .catch((err) => {
        setLoading(false);
        ErrorMessage("please fill all the fields");
        console.log(err.response);
      });
  };

  const SuccessMessage = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const ErrorMessage = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (loading) {
    return (
      <div className="w-full">
        <ToastContainer />

        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ToastContainer />

      <div className="flex justify-between items-center">
        <h1 className="xl:text-3xl font-semibold">Add New Attributes</h1>
        <div className="">
          <RxCross1
            className="font-bold cursor-pointer xl:text-xl"
            onClick={handleOpenAddAttribute}
          />
        </div>
      </div>
      <form onSubmit={handleAddAttribute} className="flex flex-col gap-5 my-5">
        <div className="flex flex-col gap-2">
          <div className="w-full ">
            <label
              htmlFor="newAttributeName"
              className="text-[16px] font-normal ">
              New Attribute Name
            </label>
          </div>
          <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full xl:w-[300px] ">
            <input
              required
              type="text"
              name="newAttributeName"
              placeholder="enter new attribute name"
              className="focus:outline-none bg-transparent   w-full "
              value={formData?.newAttributeName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full ">
            <label htmlFor="value" className="text-[16px] font-normal ">
              Value
            </label>
          </div>
          <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
            <textarea
              required
              name="value"
              placeholder="enter store name"
              className="focus:outline-none bg-transparent resize-none  w-full "
              value={formData.value}
              onChange={handleTextAreaChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full ">
            <label htmlFor="description" className="text-[16px] font-normal ">
              Description
            </label>
          </div>
          <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
            <textarea
              // required
              name="description"
              placeholder="enter store name"
              className="focus:outline-none bg-transparent resize-none  w-full "
              value={formData.description}
              onChange={handleTextAreaChange}
            />
          </div>
        </div>

        <div className="my-5">
          <button
            type="submit"
            className="bg-blue-500 w-[203px] h-[40px] text-[16px] rounded-md font-semibold text-white">
            Add New Attributes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewAttribute;
