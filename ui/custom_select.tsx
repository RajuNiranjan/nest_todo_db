// components/CustomSelect.tsx
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

interface CustomSelectProps {
  options: string[];
  onChange: (selectedOption: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    undefined
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative  flex justify-between items-center w-full">
      <div className="flex items-center justify-between ">
        <span className="rounded-md ">
          <button
            type="button"
            className="flex justify-start w-full rounded-md text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            // onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption || "Select an option"}
          </button>
        </span>
      </div>
      {isOpen ? (
        <KeyboardArrowUpIcon onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <KeyboardArrowDownIcon onClick={() => setIsOpen(!isOpen)} />
      )}
      {/* <span className="flex justify-end">hi</span> */}

      {isOpen && (
        <div
          className="// origin-top-right  absolute top-[50px]  w-52 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            {options.map((option) => (
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
  );
};

export default CustomSelect;

// origin-top-right  absolute top-[50px]  w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none
