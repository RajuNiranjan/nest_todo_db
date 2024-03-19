"use client";
import { RootState } from "@/redux/store";
import FormInput from "@/ui/form_input";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface FormInputDataInterface {
  id: number | string;
  labelName: string;
  inputType: string;
  placeHolder: string;
  name: string;
  value: string;
  options?: string[] | undefined;
  onSlect?: (selectOption: string) => void;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<any>) => void;
}

const FormInputData: FormInputDataInterface[] = [
  {
    id: 1,
    labelName: "Product Name",
    inputType: "text",
    placeHolder: "enter product name",
    name: "productName",
    value: "productName",
  },
  {
    id: 2,
    labelName: "Stock Keeping Unit (SKU)",
    inputType: "text",
    placeHolder: "enter stock keeping unit",
    name: "stockKeepingUnit",
    value: "stockKeepingUnit",
  },
  {
    id: 3,
    labelName: "Category",
    inputType: "text",
    placeHolder: "enter product name",
    name: "productName",
    value: "productName",
  },
  {
    id: 4,
    labelName: "Sub Category",
    inputType: "text",
    placeHolder: "enter product name",
    name: "productName",
    value: "productName",
  },
  {
    id: 5,
    labelName: "stock Qty",
    inputType: "text",
    placeHolder: "enter product name",
    name: "productName",
    value: "productName",
  },
  {
    id: 6,
    labelName: "Products Type",
    inputType: "options",
    placeHolder: "enter product name",
    name: "productName",
    value: "productName",
    options: ["USA", "India", "Japan"],
  },
  {
    id: 7,
    labelName: "Price(MRP)",
    inputType: "text",
    placeHolder: "enter product name",
    name: "productName",
    value: "productName",
  },
  {
    id: 8,
    labelName: "Selling Price / Discount",
    inputType: "text",
    placeHolder: "enter product name",
    name: "productName",
    value: "productName",
  },
];
const FormInputData2: FormInputDataInterface[] = [
  {
    id: 9,
    labelName: "Descriptions",
    inputType: "textArea",
    placeHolder: "enter description",
    name: "description",
    value: "description",
  },
  {
    id: 10,
    labelName: "Tags",
    inputType: "textArea",
    placeHolder: "select tags",
    name: "tags",
    value: "tags",
  },
];

const ProducDetails: React.FC = () => {
  const [productDetailsFormData, setProductDetailsFormData] = useState<
    Record<string, string>
  >({});

  const onChange = (e: React.ChangeEvent<any>) => {
    const updatedFormData = {
      ...productDetailsFormData,
      [e.target.name]: e.target.value,
    };
    setProductDetailsFormData(updatedFormData);

    localStorage.setItem(
      "ProductDetailsFormData",
      JSON.stringify(productDetailsFormData)
    );

    // Optionally, you can clear the form data in the Redux store
    // dispatch(setProductDetailsFormData({}));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log("Form Data", ProductDetailsFormData);
    localStorage.setItem(
      "ProductDetailsFormData",
      JSON.stringify(productDetailsFormData)
    );
    setProductDetailsFormData({});
  };

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div
      className={`w-full sm:w-full ${
        isDarkModeEnableState ? "bg-black text-white" : "bg-white"
      } p-5 rounded-md shadow-lg`}>
      <h1 className="font-semibold text-[18px]">Product Details</h1>
      <form className="my-5" onSubmit={onSubmit}>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 my-4">
          {FormInputData?.map((item, index) => (
            <FormInput
              key={index}
              id={item?.id}
              labelName={item?.labelName}
              inputType={item?.inputType}
              placeHolder={item?.placeHolder}
              name={item?.name}
              value={productDetailsFormData[item?.name] || ""}
              onChange={onChange}
            />
          ))}
        </div>

        <div className="my-4">
          {FormInputData2?.map((item, index) => (
            <FormInput
              key={index}
              id={item?.id}
              labelName={item?.labelName}
              inputType={item?.inputType}
              placeHolder={item?.placeHolder}
              name={item?.name}
              value={productDetailsFormData[item?.name] || ""}
              onChange={onChange}
            />
          ))}
        </div>

        <div className="flex gap-10">
          <button className="bg-[#B3B3B3] px-3 py-2 text-[12px] sm:px-3 sm:py-2  lg:px-6 lg:py-3 rounded-full font-normal sm:text-[14px] lg:text-[16px] text-white">
            Save Draft
          </button>
          <button
            type="submit"
            className="bg-[#196FE1] px-3 py-2 text-[12px] sm:px-3 sm:py-2 sm:text-[14px]  lg:px-6 lg:py-3 rounded-full font-normal lg:text-[16px] text-white">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProducDetails;
