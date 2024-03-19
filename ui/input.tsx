import React from "react";
import MultiSelectWithSearch from "./multy_select";
import CustomSelect from "./custom_select";

interface ChildProps {
  type: string;
  labelName: string;
  placeholder: string;
  value: any;
  name: any;
  height?: string;
  width?: string;
  rightIcon?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<ChildProps> = ({
  labelName,
  placeholder,
  name,
  type,
  rightIcon,
  value,
  onChange,
  height,
  width,
}) => {
  const inputStyle: React.CSSProperties = {
    height: height || "auto",
    width: width,
  };

  const options = ["USA", "India", "Japan"];

  const handleSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
    // Add your custom logic here
  };
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="capitalize font-normal text-[16px]">{labelName}</label>
      <div
        className="border border-blue-300 flex items-center p-2 rounded-md w-full"
        style={{
          ...inputStyle,
          width: "100%",
        }}>
        {type == "text" && (
          <>
            <input
              required
              id={name}
              onChange={onChange}
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              className="focus:outline-none flex-1 bg-transparent"
            />
            <span>{rightIcon}</span>
          </>
        )}
        {type == "email" && (
          <>
            <input
              required
              id={name}
              onChange={onChange}
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              className="focus:outline-none flex-1 bg-transparent"
            />
            <span>{rightIcon}</span>
          </>
        )}

        {type === "options" && (
          <CustomSelect options={options} onChange={handleSelect} />
        )}

        {/* <input
          required
          id={name}
          onChange={onChange}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          className="focus:outline-none flex-1 bg-transparent"
        />
        <span>{rightIcon}</span> */}
      </div>
    </div>
  );
};

export default Input;
