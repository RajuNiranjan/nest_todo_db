// // components/MultiSelectWithSearch.tsx
// import React, { useState } from "react";
// import Select, { OptionTypeBase, ActionMeta, MultiValue } from "react-select";

// const MultiSelectWithSearch: React.FC = () => {
//   const [selectedOptions, setSelectedOptions] = useState<OptionTypeBase[]>([]);

//   const options = [
//     { value: "option1", label: "Option 1" },
//     { value: "option2", label: "Option 2" },
//     { value: "option3", label: "Option 3" },
//     // Add more options as needed
//   ];

//   const handleChange = (
//     newValue: MultiValue<OptionTypeBase>,
//     actionMeta: ActionMeta<OptionTypeBase>
//   ) => {
//     setSelectedOptions(newValue as OptionTypeBase[]); // Cast MultiValue to OptionTypeBase[]
//   };

//   return (
//     <Select
//       isMulti
//       options={options}
//       value={selectedOptions}
//       onChange={handleChange}
//       placeholder="Select options..."
//       className="w-full"
//       isSearchable
//     />
//   );
// };

// export default MultiSelectWithSearch;

import React from "react";

const multy_select = () => {
  return <div>multy_select</div>;
};

export default multy_select;
