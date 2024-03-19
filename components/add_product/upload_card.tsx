"use client";
import React from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import Image from "next/image";

interface UploadCardProps {
  imageName: string;
  imageSize?: string | number;
  imageUrl: File | string;
  onRemove: () => void;
}

const UploadCard: React.FC<UploadCardProps> = ({
  imageName,
  imageSize,
  imageUrl,
  onRemove,
}) => {
  const imageSizeInKB = Math.round(Number(imageSize) / 1024);

  return (
    <div className="border p-1 rounded-md border-[#196FE1] flex justify-between items-center">
      <div className="flex-1 flex items-center  gap-2">
        {typeof imageUrl === "string" ? (
          <Image src={imageUrl} alt="img" width={100} height={100} />
        ) : (
          <Image
            src={URL.createObjectURL(imageUrl)}
            alt="img"
            width={100}
            height={100}
          />
        )}
        <div>
          <p className="font-normal text-[10px] sm:text-[12px] lg:text-[12px] xl:text-[16px]">
            Image Name: {imageName}
          </p>
          <p className="font-normal text-[10px] sm:text-[12px]  lg:text-[12px] xl:text-[16px] text-[#333333]">
            {" "}
            Image Size: {imageSizeInKB} kb
          </p>
        </div>
      </div>
      <CancelOutlinedIcon
        className="text-red-500 cursor-pointer"
        onClick={onRemove}
      />
    </div>
  );
};

export default UploadCard;
