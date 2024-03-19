import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

interface FormInputData {
  id: number | string;
  labelName: string;
  inputType: string;
  placeHolder: string;
  name: string;
  value: string | number;
  maxLength?: number;
  options?: string[] | undefined;
  flex?: string;
  onSlect?: (selectOption: string) => void;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<any>) => void;
}

const FormInput: React.FC<FormInputData> = ({
  id,
  labelName,
  inputType,
  placeHolder,
  name,
  value,
  flex,
  maxLength,
  options,
  onSlect,
  onChange,
}) => {
  // const [selectedOption, setSelectedOption] = useState<string | undefined>(
  //   undefined
  // );
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    // onChange(option);
    setIsOpen(false);
    if (onSlect) {
      onSlect(option);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-2 ">
        {(inputType === "text" || inputType === "email") && (
          <div className={`flex flex-col gap-2`}>
            <div className="w-full ">
              <label htmlFor={name} className="text-[16px] font-normal ">
                {labelName}
              </label>
            </div>
            <div className="border  border-blue-400  bg-opacity-50  flex items-center p-2 rounded-md w-full ">
              <input
                required
                id={name}
                onChange={onChange}
                type={inputType}
                name={name}
                value={value as string}
                placeholder={placeHolder}
                className="focus:outline-none bg-transparent  w-full "
              />
            </div>
          </div>
        )}

        {/* TEXT AREA */}

        {inputType === "textArea" && (
          <div className="flex flex-col gap-2">
            <div className="w-full ">
              <label htmlFor={name} className="text-[16px] font-normal ">
                {labelName}
              </label>
            </div>
            <div className="border border-blue-400 bg-opacity-50  flex items-center p-2 rounded-md w-full ">
              <textarea
                required
                onChange={onChange}
                name={name}
                value={value}
                placeholder={placeHolder}
                className="focus:outline-none bg-transparent  w-full resize-none "
              />
            </div>
          </div>
        )}

        {/* CUSTOM SLECT DROP DOWN */}

        {inputType === "options" && (
          <div className="flex flex-col gap-2">
            <div className="w-full ">
              <label htmlFor="name" className="text-[16px] font-normal ">
                {labelName}
              </label>
            </div>

            <div className="relative">
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
                <div className="origin-top-right  absolute top-[100px]  w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
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
        )}
      </div>
    </div>
  );
};

export default FormInput;
