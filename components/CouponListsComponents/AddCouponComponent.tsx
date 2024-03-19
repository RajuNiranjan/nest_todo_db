import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { disableAddCouponComponentShow } from "@/redux/AddCouponComponentShow";
import { RootState } from "@/redux/store";
import { CldUploadButton } from "next-cloudinary";

const AddCouponComponent = () => {
  const [selectImage, setSelectImage] = useState(null);

  const handleUploadSuccess = (event: any) => {
    const file = event.info.secure_url;
    setSelectImage(file);
    localStorage.setItem("selectedImageName", event.original_filename);
    localStorage.setItem("selectedImageSize", event.info.bytes.toString());
  };

  const dispatch = useDispatch()
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div className={`${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white text-black'} px-[32px] py-[32px] rounded-[16px] flex flex-col gap-[16px] h-[90vh] overflow-auto relative`}
    style={{scrollbarWidth: 'none'}}>
        <div
        className="absolute top-[20px] right-[20px] cursor-pointer"
        onClick={()=>{ dispatch(disableAddCouponComponentShow()) }}>
            <CloseIcon />
        </div>
      <div className="w-[340px] 700px:w-[500px] 900px:w-[760px] flex items-center gap-[20px]">
        <div className="flex flex-col gap-[8px] w-full">
          <p className="text-[16px]">Coupon Name</p>
          <div className="w-full 900px:w-1/2 bg-[#d1e2fa] rounded-[4px] p-[10px]">
            <input
              type="text"
              placeholder="Republic sale coupon"
              className="bg-transparent outline-none border-none w-full text-black"
            />
          </div>
        </div>
      </div>
      <div className="w-[340px] 700px:w-[500px] 900px:w-[760px] flex items-center gap-[20px] flex-col 900px:flex-row">
        <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
          <p className="text-[16px]">Discount type</p>
          <div className="w-full bg-[#d1e2fa] rounded-[4px] p-[10px]">
            <select className="bg-transparent outline-none border-none w-full text-black">
              <option value="" className="w-full">
                Type one
              </option>
              <option value="" className="w-full">
                Type two
              </option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
          <p className="text-[16px]">Coupon Amount</p>
          <div className="w-full bg-[#d1e2fa] rounded-[4px] p-[10px]">
            <input
              type="text"
              placeholder="500"
              className="bg-transparent outline-none border-none w-full text-black"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[8px] w-[340px] 700px:w-[500px] 900px:w-[760px]">
        <p className="text-[16px]">Description</p>
        <div className="w-full bg-[#d1e2fa] rounded-[4px] p-[10px]">
          <textarea
            placeholder="500"
            className="bg-transparent outline-none border-none w-[740px] h-[76px] resize-none text-black"
          />
        </div>
      </div>
      <div className="w-[340px] 700px:w-[500px] 900px:w-[760px] flex items-center gap-[20px] flex-col 900px:flex-row">
        <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
          <p className="text-[16px]">Starting Date</p>
          <div className="w-full bg-[#d1e2fa] rounded-[4px] p-[10px]">
            <input
              type="text"
              placeholder="500"
              className="bg-transparent outline-none border-none w-full text-black"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
          <p className="text-[16px]">Expiry Date</p>
          <div className="w-full bg-[#d1e2fa] rounded-[4px] p-[10px]">
            <input
              type="text"
              placeholder="500"
              className="bg-transparent outline-none border-none w-full text-black"
            />
          </div>
        </div>
      </div>
      <CldUploadButton
        className="dropzone text-center border-dashed p-6 rounded-md bg-[#d1e2fa] text-black w-[340px] 700px:w-[500px] 900px:w-[760px]"
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
              // folder="<Your Cloudinary Folder>"
              // onSuccess={handleUploadSuccess}
              onSuccess={(event) => handleUploadSuccess(event)}
      >
        Drag and drop an image here, or click to select one
      </CldUploadButton>
      <div className="w-[340px] 700px:w-[500px] 900px:w-[760px] flex items-center gap-[20px]">
        <div className="flex flex-col gap-[8px] w-full">
          <p className="text-[16px]">Coupon Code</p>
          <div className="w-full 900px:w-1/2 bg-[#d1e2fa] rounded-[4px] p-[10px]">
            <input
              type="text"
              placeholder="Republic sale coupon"
              className="bg-transparent outline-none border-none w-full text-black"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[20px] text-white text-[16px]">
        <button
          name="cancel button"
          className="px-[24px] py-[10px] rounded-full bg-[#b3b3b3]"
        >
          Cancel
        </button>
        <button
          name="add new coupons"
          className="px-[24px] py-[10px] rounded-full bg-[#196fe1]"
        >
          Add new coupons
        </button>
      </div>
    </div>
  );
};

export default AddCouponComponent;
