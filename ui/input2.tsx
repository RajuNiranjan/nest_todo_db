import React from "react";

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

const Input2: React.FC<ChildProps> = ({
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
  return (
    <div className="grid grid-cols-2 w-full">
      <label className="capitalize  font-normal text-[16px] w-max ">
        {labelName}
      </label>
      <div
        className="border border-blue-300 flex items-center p-2 rounded-md w-full"
        style={{
          ...inputStyle,
          width: "100%",
        }}>
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
      </div>
    </div>
  );
};

export default Input2;
