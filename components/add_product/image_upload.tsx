"use client";
import React, { useState } from "react";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import UploadCard from "./upload_card";
import { CldUploadButton } from "next-cloudinary";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setImageInfo, removeImage } from "@/redux/imageAction";

const ImageUpload = () => {
  const dispatch = useDispatch();
  const [selectImage, setSelectImage] = useState<File | null>(null);
  const [selectedImageName, setSelectedImageName] = useState<string>("");
  const [selectedImageSize, setSelectedImageSize] = useState<string>("");

  const handleUploadSuccess = (event: any) => {
    const file = event.info.secure_url;
    setSelectImage(file);
    dispatch(
      setImageInfo(event.original_filename, event.info.bytes.toString(), file)
    );
    localStorage.setItem("selectedImageName", event.original_filename);
    localStorage.setItem("selectedImageSize", event.info.bytes.toString());
  };

  const handleRemoveImage = () => {
    dispatch(removeImage());
    setSelectImage(null);
    setSelectedImageName("");
    setSelectedImageSize("");
    localStorage.removeItem("selectedImageName");
    localStorage.removeItem("selectedImageSize");
  };

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  return (
    <div
      className={`w-full sm:w-[400px] md:w-[600px] lg:w-[350px] xl:w-full shadow-lg rounded ${
        isDarkModeEnableState ? "bg-black text-white" : "bg-white"
      } p-5`}>
      <h1 className="font-semibold text-[18px]">Add Image</h1>
      <div className="my-10">
        <div className="border border-dashed border-gray-400 h-[250px] flex justify-center items-center flex-col  rounded-md">
          <div className="flex justify-center items-center flex-col">
            <InsertPhotoOutlinedIcon className=" text-gray-500 text-[2em]" />
            <div className="flex w-full items-center justify-center gap-2">
              <FileUploadOutlinedIcon className="text-3xl sm:text-4xl lg:text-xl xl:text-4xl text-[#196FE1]" />
              <span className="text-[14px] sm:text-[18px] lg:text-[12px] xl:text-[18px]">
                Select your image here{" "}
              </span>{" "}
              <CldUploadButton
                uploadPreset={uploadPreset}
                onSuccess={(event) => handleUploadSuccess(event)}
                className="relative text-[#196FE1] cursor-pointer flex justify-center items-center">
                <span className="font-semibold text-[16px] sm:text-[18px] lg:text-[12px] xl:text-[18px]">
                  {" "}
                  Browse{" "}
                </span>
              </CldUploadButton>
            </div>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-2">
          {selectImage ? (
            <UploadCard
              imageName={selectedImageName}
              imageSize={selectedImageSize}
              imageUrl={selectImage}
              onRemove={handleRemoveImage}
            />
          ) : (
            <p className="text-center text-[12px] text-red-300">
              no items here, you upload by clicking{" "}
              <span className="font-secmibold text-blue-500">Browse</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
