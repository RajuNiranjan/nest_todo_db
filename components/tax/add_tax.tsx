import FormInput from "@/ui/form_input";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { setTaxFormData } from "@/redux/actions/taxActions";

interface AddNewTaxProps {
  handleAddNewTax: () => void;
}

interface FormInputDataInterface {
  id: number | string;
  labelName: string;
  inputType: string;
  placeHolder: string;
  name: string;
  value: string | number;
  maxLength?: number;
  options?: string[] | undefined;
  onSlect?: (selectOption: string) => void;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<any>) => void;
}

const FormInputData: FormInputDataInterface[] = [
  {
    id: 1,
    labelName: "Tax Type (Enter The Tax Type Like VAT, CST, Etc.)",
    inputType: "text",
    placeHolder: "enter tax type",
    name: "taxType",
    value: "taxType",
  },
  {
    id: 2,
    labelName:
      "Tax Rate (Enter The Applicable Tax Percentage Rate Without & Sign.)",
    inputType: "text",
    placeHolder: "enter tax rate",
    name: "taxRate",
    value: "taxRate",
  },
  {
    id: 3,
    labelName: "Note",
    inputType: "text",
    placeHolder: "enter note",
    name: "note",
    value: "note",
  },
  {
    id: 4,
    labelName: "Description",
    inputType: "textArea",
    placeHolder: "enter descriptions",
    name: "taxDescription",
    value: "taxDescription",
  },
];

const AddTax: React.FC<AddNewTaxProps> = ({ handleAddNewTax }) => {
  const dispatch = useDispatch();

  const [taxFormData, settaxFormData] = useState<Record<string, string>>({});

  // const onChange = (e: React.ChangeEvent<any>) => {
  //   const updatedFormData = {
  //     ...taxFormData,
  //     [e.target.name]: e.target.value,
  //   };
  //   dispatch(setTaxFormData(updatedFormData));
  //   settaxFormData(updatedFormData);

  //   localStorage.setItem("taxFormData", JSON.stringify(taxFormData));

  //   // Optionally, you can clear the form data in the Redux store
  //   // dispatch(setTaxFormData({}));
  // };

  const onChange = (e: React.ChangeEvent<any>) => {
    const inputValue = e.target.value;
    const maxLength = 250; // Set your desired character limit

    // Truncate the input value if it exceeds the maxLength
    const truncatedValue = inputValue.slice(0, maxLength);

    const updatedFormData = {
      ...taxFormData,
      [e.target.name]: truncatedValue,
    };

    dispatch(setTaxFormData(updatedFormData));
    settaxFormData(updatedFormData);

    localStorage.setItem("taxFormData", JSON.stringify(updatedFormData));
    // Optionally, you can clear the form data in the Redux store
    // dispatch(setTaxFormData({}));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log("Form Data", taxFormData);
    localStorage.setItem("taxFormData", JSON.stringify(taxFormData));
    settaxFormData({});
    handleAddNewTax();
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex justify-between items-center my-5">
        <h1 className="text-[24px] font-semibold">Add New Tax Item</h1>
        <div className="">
          <CloseIcon
            className="font-bold cursor-pointer xl:text-xl"
            onClick={handleAddNewTax}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5">
        {FormInputData?.map((item, index) => (
          <FormInput
            key={index}
            id={item?.id}
            labelName={item?.labelName}
            inputType={item?.inputType}
            placeHolder={item?.placeHolder}
            name={item?.name}
            value={taxFormData[item?.name] || ""}
            onChange={onChange}
          />
        ))}
      </div>
      <div className="my-5 flex xl:flex-row flex-col-reverse w-full gap-5 items-center">
        <button
          onClick={handleAddNewTax}
          className="bg-gray-300 px-6 rounded-full w-full xl:w-max h-[40px] text-[16px]  font-semibold text-white">
          Cancle
        </button>
        <button
          type="submit"
          className="bg-blue-500 w-full  xl:w-max rounded-full h-[40px] text-[16px] px-6 font-semibold text-white">
          Add New Taxs
        </button>
      </div>
    </form>
  );
};

export default AddTax;
