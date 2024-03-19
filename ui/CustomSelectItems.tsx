// components/CustomSelect.tsx
import React, { useState } from "react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
}

const CustomSelectItems: React.FC<CustomSelectProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-gray-700 border border-transparent rounded-md hover:bg-gray-600 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-800">
            {selectedOption ? selectedOption.label : "Select an option"}
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </span>
      </div>

      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
          <div className="rounded-md bg-white shadow-xs">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleOptionClick(option)}
                  className="w-full px-4 py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelectItems;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option4", label: "Option 4" },
  // Add more options as needed
];

<CustomSelectItems options={options} />;
