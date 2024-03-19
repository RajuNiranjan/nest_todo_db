"use client";
import { RootState } from "@/redux/store";
import React, { useState } from "react";
import { MdPhoto } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { useSelector } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Input from "@/ui/input";
import TextArea from "@/ui/text_area";
import UploadCard from "./upload_card";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeImage } from "@/redux/imageAction";

const InputData = [
  {
    id: "Variable Title",
    type: "text",
    labelName: "Variable Title",
    placeholder: "enter Variable Title",
    value: "Variable Title",
    name: "Variable Title",
  },
  {
    id: "Property",
    type: "text",
    labelName: "Property",
    placeholder: "enter Property",
    value: "Property",
    name: "Property",
  },
  {
    id: "Price",
    type: "text",
    labelName: "Price",
    placeholder: "50,000",
    value: "Price",
    name: "Price",
  },
  {
    id: "Stocks",
    type: "text",
    labelName: "Stocks",
    placeholder: "enter stocks",
    value: "Stocks",
    name: "Stocks",
  },
  {
    id: "Attribute",
    type: "options",
    labelName: "Attributes",
    placeholder: "size",
    value: "Attribute",
    name: "Attribute",
    rightIcon: <KeyboardArrowDownIcon />,
  },
  {
    id: "Values",
    type: "options",
    labelName: "Values",
    placeholder: "Values",
    value: "Values",
    name: "Values",
    rightIcon: <KeyboardArrowDownIcon />,
  },
];

const TextAreaData = [
  {
    id: "Attributes",
    type: "text",
    labelName: "Attributes",
    placeholder: "men",
    value: "Attributes",
    name: "Attributes",
    width: "100%",
    height: "70px",
  },
  {
    id: "Description",
    type: "text",
    labelName: "Description",
    placeholder: "men",
    value: "Description",
    name: "Description",
    width: "100%",
    height: "70px",
  },
];

interface VarationDetailsProps {
  imageName: string;
  imageSize: string;
  imageUrl: string;
  onRemove: () => void;
}

const VarationDetails: React.FC = () => {
  const dispatch = useDispatch();
  // Use useSelector to get data from the Redux store
  const selectedImageName = useSelector(
    (state: RootState) => state.image.selectedImageName
  );
  const selectedImageSize = useSelector(
    (state: RootState) => state.image.selectedImageSize
  );
  const selectImage = useSelector(
    (state: RootState) => state.image.selectImage
  );

  const imageSizeInKB = Math.round(Number(selectedImageSize) / 1024);

  const [formData, setFormData] = useState<Record<string, string>>({});

  const onChange = (e: React.ChangeEvent<any>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data", formData);

    localStorage.setItem("formData", JSON.stringify(formData));

    setFormData({});
  };

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div>
      <div
        className={`w-full sm:w-full ${
          isDarkModeEnableState ? "bg-black text-white" : "bg-white"
        } p-5 rounded-md shadow-lg`}>
        <h1 className="text-xl font-semibold">Variation Details</h1>
        <form className="flex flex-col gap-5 mt-5" onSubmit={onSubmit}>
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
          <div className="flex flex-col gap-1">
            {TextAreaData?.map((item, index) => (
              <TextArea
                key={index}
                labelName={item?.labelName}
                value={formData[item?.name] || ""}
                placeholder={item?.placeholder}
                name={item?.name}
                height={item?.height}
                width={item?.width}
                type={item?.type}
                onChange={onChange}
              />
            ))}
          </div>
          <>
            {selectImage ? (
              <div className="border h-20 p-3 rounded-md border-blue-300 flex justify-between items-center">
                <div className="flex justify-between items-center gap-1">
                  <div className="h-[70px] w-24 ">
                    {typeof selectImage === "string" ? (
                      <Image
                        src={selectImage}
                        alt="img"
                        width={80}
                        height={50}
                        className="w-full h-full object-cover rounded-sm"
                      />
                    ) : null}
                  </div>
                  <div>
                    <p className="text-[16px] font-normal">
                      {selectedImageName}
                    </p>
                    <p className="text-[14px] font-normal">
                      {imageSizeInKB} KB
                    </p>
                  </div>
                </div>
                <div>
                  <RxCrossCircled
                    className="text-red-500 text-2xl cursor-pointer"
                    onClick={() => dispatch(removeImage())}
                  />
                </div>
              </div>
            ) : (
              <p className="text-center text-[12px] text-red-300">
                No image selected.
              </p>
            )}
          </>

          <div className="flex gap-10">
            <button className="bg-[#B3B3B3] px-3 py-2 text-[12px] sm:px-3 sm:py-2  lg:px-6 lg:py-3 rounded-full font-normal sm:text-[14px] lg:text-[16px] text-white xl:px-10">
              Cancle
            </button>
            <button
              type="submit"
              className="bg-[#196FE1] px-3 py-2 text-[12px] sm:px-3 sm:py-2 sm:text-[14px]  lg:px-6 lg:py-3 rounded-full font-normal lg:text-[16px] text-white">
              Add Variable
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VarationDetails;
