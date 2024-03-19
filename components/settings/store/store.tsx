import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Pen from "../asserts/pencil.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

interface FormData {
  storeName: string;
  email: string;
  telephoneNumber: string;
  permenentAddress: string;
  country: string;
  contactNumber: string;
  addressLine1: string;
  addressLine2: string;
  subDistrict: string;
  district: string;
  city: string;
  state: string;
  pinCode: string;
  [key: string]: string; // Index signature allowing string indexing
}

const Store = () => {
  const [selectImage, setSelectImage] = useState<File | null | string>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    storeName: "",
    email: "",
    telephoneNumber: "",
    permenentAddress: "",
    country: "",
    contactNumber: "",
    addressLine1: "",
    addressLine2: "",
    subDistrict: "",
    district: "",
    city: "",
    state: "",
    pinCode: "",
  });

  const [storeDetails, setStoreDetails] = useState<{
    storeName: string;
    storeID: string;
    storeOwnerId: string;
    expiry: number;
  } | null>(null);
  const [userData, setUserData] = useState<{
    email: string;
    access_token: string;
    expiry: number;
  } | null>(null);

  useEffect(() => {
    // Retrieve userData from localStorage
    const userDataString = localStorage.getItem("User");
    if (userDataString) {
      const userDataObj = JSON.parse(userDataString);
      setUserData(userDataObj);
    }

    const tempStoreDetails = localStorage.getItem("storeDetails");
    if (tempStoreDetails !== null) {
      setStoreDetails(JSON.parse(tempStoreDetails));
    }
  }, []);

  const handleUploadSuccess = (event: any) => {
    const file = event.info.secure_url;
    setSelectImage(file);
    localStorage.setItem("selectedImageName", event.original_filename);
    localStorage.setItem("selectedImageSize", event.info.bytes.toString());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    setFormData({
      ...formData,
      country: option,
    });
  };

  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const options = ["India", "USA", "Chaina"];

  function handleStoreUpdate() {
    const requiredFields = [
      "storeName",
      "email",
      "telephoneNumber",
      "permenentAddress",
      "contactNumber",
      "addressLine1",
      "addressLine2",
      "subDistrict",
      "district",
      "city",
      "state",
      "pinCode",
    ];
    const emptyFields = requiredFields.filter((field) => !formData[field]);
    if (emptyFields.length > 0) {
      errorMessage(`Please fill the Missed fields`);
      return; // Stop execution if any required fields are empty
    }
    setLoading(true);

    // console.log("Hii")

    axios
      .patch(
        `https://ts-api-for-ecomm-product.onrender.com/store/${storeDetails?.storeID}/config`,
        {
          config: {
            logo: selectImage,
            name: formData.storeName,
            email: formData.email,
            phoneNumber: formData.contactNumber,
            country: formData.country,
            address: formData.permenentAddress,
            storeAddress: {
              addressline1: formData.addressLine1,
              addressline2: formData.addressLine2,
              subbDistrict: formData.subDistrict,
              district: formData.district,
              city: formData.city,
              state: formData.state,
              pincode: formData.pinCode,
              country: formData.country,
            },
          },
        },
        {
          headers: {
            Authorization: `Bearer ${userData?.access_token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data === "updaeted config successfully") {
          successMessage("Store updated successfully");
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }
      })
      .catch((err) => {
        errorMessage("Some error occured: please try again later");
        setTimeout(() => {}, 3000);
      });
  }

  function errorMessage(msg: string) {
    toast.error(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function successMessage(msg: string) {
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

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
    <form>
      <ToastContainer />
      <div className="flex items-center gap-5">
        <div className="relative">
          <div className="w-24 h-24 rounded-full border shadow-sm bg-blue-300">
            {typeof selectImage === "string" && (
              <Image
                src={selectImage}
                alt="img"
                width={100}
                height={100}
                className="rounded-full w-full h-full"
              />
            )}
          </div>
          <div className="">
            <CldUploadButton
              uploadPreset={uploadPreset}
              onSuccess={(event) => handleUploadSuccess(event)}
              className="absolute bottom-0 right-0 h-6 w-6 bg-[#196FE1] flex justify-center items-center rounded-full cursor-pointer  text-[#196FE1] ">
              <Image src={Pen} alt="pen" width={13} height={13} />
            </CldUploadButton>
          </div>
        </div>
        <div>
          <h1>Store Name: </h1>
          <p>storeDetails</p>
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <div className="w-full ">
            <label htmlFor="storeName" className="text-[16px] font-normal ">
              Store Name
            </label>
          </div>
          <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
            <input
              required
              type="text"
              name="storeName"
              placeholder="enter store name"
              value={formData?.storeName}
              onChange={handleChange}
              className="focus:outline-none bg-transparent  w-full "
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full ">
            <label htmlFor="email" className="text-[16px] font-normal ">
              Email
            </label>
          </div>
          <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
            <input
              required
              type="email"
              name="email"
              placeholder="enter store name"
              value={formData?.email}
              onChange={handleChange}
              className="focus:outline-none bg-transparent  w-full "
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full ">
            <label
              htmlFor="telephoneNumber"
              className="text-[16px] font-normal ">
              Telephone Number
            </label>
          </div>
          <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
            <input
              required
              type="text"
              name="telephoneNumber"
              value={formData?.telephoneNumber}
              onChange={handleChange}
              placeholder="enter store name"
              className="focus:outline-none bg-transparent  w-full "
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full ">
            <label htmlFor="district" className="text-[16px] font-normal ">
              Permenent Address
            </label>
          </div>
          <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
            <input
              required
              type="text"
              name="permenentAddress"
              placeholder="enter store name"
              value={formData?.permenentAddress}
              onChange={handleChange}
              className="focus:outline-none bg-transparent  w-full "
            />
          </div>
        </div>
        <div className="relative flex flex-col gap-2">
          <label htmlFor="button">Country</label>
          <div className="flex justify-between  border border-blue-400  bg-opacity-50 items-center p-2 rounded-md w-full">
            <div>
              <button
                type="button"
                className="flex justify-start w-full rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true">
                {selectedOption || "Select an option"}
              </button>
            </div>
            <div>
              {isOpen ? (
                <KeyboardArrowUpIcon onClick={() => setIsOpen(!isOpen)} />
              ) : (
                <KeyboardArrowDownIcon onClick={() => setIsOpen(!isOpen)} />
              )}
            </div>
          </div>
          {isOpen && (
            <div className="origin-top-right  absolute top-[80px]  w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="">
                {options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleSelect(option)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-800">
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full ">
            <label htmlFor="contactNumber" className="text-[16px] font-normal ">
              Contact Number
            </label>
          </div>
          <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
            <input
              required
              type="text"
              name="contactNumber"
              placeholder="enter store name"
              value={formData?.contactNumber}
              onChange={handleChange}
              className="focus:outline-none bg-transparent  w-full "
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-semibold my-5"> Store Address</h1>

        <div className="grid grid-cols-1 gap-5 my-5">
          <div className="flex  gap-2">
            <div className="min-w-[150px] max-w-[180px]">
              <label htmlFor="addressLine1" className="text-[16px] font-normal">
                Address Line 1:
              </label>
            </div>
            <div className="border   border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
              <input
                required
                type="text"
                name="addressLine1"
                placeholder="enter store name"
                value={formData?.addressLine1}
                onChange={handleChange}
                className="focus:outline-none bg-transparent  w-full "
              />
            </div>
          </div>
          <div className="flex  gap-2">
            <div className="min-w-[150px] max-w-[180px]">
              <label
                htmlFor="addressLine2"
                className="text-[16px] font-normal ">
                Address Line 2:
              </label>
            </div>
            <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
              <input
                required
                type="text"
                name="addressLine2"
                value={formData?.addressLine2}
                onChange={handleChange}
                placeholder="enter store name"
                className="focus:outline-none bg-transparent  w-full "
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
          <div className="flex  gap-2">
            <div className="min-w-[150px] max-w-[180px]">
              <label htmlFor="subDistrict" className="text-[16px] font-normal ">
                Sub District :
              </label>
            </div>
            <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
              <input
                required
                type="text"
                name="subDistrict"
                placeholder="enter store name"
                value={formData?.subDistrict}
                onChange={handleChange}
                className="focus:outline-none bg-transparent  w-full "
              />
            </div>
          </div>
          <div className="flex  gap-2">
            <div className="min-w-[150px] max-w-[180px]">
              <label htmlFor="district" className="text-[16px] font-normal ">
                District :
              </label>
            </div>
            <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
              <input
                required
                type="text"
                name="district"
                value={formData?.district}
                onChange={handleChange}
                placeholder="enter store name"
                className="focus:outline-none bg-transparent  w-full "
              />
            </div>
          </div>
          <div className="flex  gap-2">
            <div className="min-w-[150px] max-w-[180px]">
              <label htmlFor="city" className="text-[16px] font-normal ">
                City :
              </label>
            </div>
            <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
              <input
                required
                type="text"
                name="city"
                onChange={handleChange}
                value={formData?.city}
                placeholder="enter store name"
                className="focus:outline-none bg-transparent  w-full "
              />
            </div>
          </div>
          <div className="flex  gap-2">
            <div className="min-w-[150px] max-w-[180px]">
              <label htmlFor="state" className="text-[16px] font-normal ">
                State :
              </label>
            </div>
            <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
              <input
                required
                type="text"
                name="state"
                value={formData?.state}
                onChange={handleChange}
                placeholder="enter store name"
                className="focus:outline-none bg-transparent  w-full "
              />
            </div>
          </div>
          <div className="flex  gap-2">
            <div className="min-w-[150px] max-w-[180px]">
              <label htmlFor="pinCode" className="text-[16px] font-normal ">
                Pin Code :
              </label>
            </div>
            <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
              <input
                required
                type="text"
                name="pinCode"
                value={formData?.pinCode}
                onChange={handleChange}
                placeholder="enter store name"
                className="focus:outline-none bg-transparent  w-full "
              />
            </div>
          </div>
          <div className="relative flex  gap-2">
            <label htmlFor="button" className="min-w-[150px] max-w-[180px]">
              Country
            </label>
            <div className="flex justify-between  border border-blue-400  bg-opacity-50 items-center p-2 rounded-md w-full">
              <div>
                <button
                  type="button"
                  className="flex justify-start w-full rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true">
                  {selectedOption || "Select an option"}
                </button>
              </div>
              <div>
                {isOpen ? (
                  <KeyboardArrowUpIcon onClick={() => setIsOpen(!isOpen)} />
                ) : (
                  <KeyboardArrowDownIcon onClick={() => setIsOpen(!isOpen)} />
                )}
              </div>
            </div>
            {isOpen && (
              <div className="origin-top-right  absolute top-[50px] right-0  w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="">
                  {options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-800">
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-end my-5">
        <button
          // type="submit"
          onClick={() => {
            handleStoreUpdate();
          }}
          className="bg-[#196FE1] px-4 py-2 text-[14px] xl:px-10 rounded-full font-normal  lg:text-[18px] text-white">
          Save
        </button>
      </div>
    </form>
  );
};

export default Store;
