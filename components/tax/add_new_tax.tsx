// "use client";
// import Input from "@/ui/input";
// import TextArea from "@/ui/text_area";
// import React, { useState } from "react";
// import { RxCross1 } from "react-icons/rx";
// import { useDispatch } from "react-redux";
// // import { setFormData } from "@/redux/actions/tax";
// import { addAttribute } from "@/redux/actions/attributeAction";

// interface AddNewTaxProps {
//   handleAddNewTax: () => void;
// }

// interface InputItem {
//   id?: string;
//   type: string;
//   labelName: string;
//   placeholder: string;
//   value: string;
//   name: string;
//   height?: string;
//   width?: string;
//   rightIcon?: React.ReactNode;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const InputData: InputItem[] = [
//   {
//     id: "Tax Type",
//     type: "text",
//     labelName: "Tax Type (Enter The Tax Type Like VAT, CST, Etc.)",
//     placeholder: "Category Name",
//     value: "Tax Type",
//     name: "Tax Type",
//     width: "100%",
//     height: "50px",
//   },
//   {
//     id: "Tax Rate",
//     type: "text",
//     labelName:
//       "Tax Rate (Enter The Applicable Tax Percentage Rate Without & Sign.)",
//     placeholder: "None",
//     value: "Tax Rate",
//     name: "Tax Rate",
//     height: "50px",
//     width: "100%",
//   },
//   {
//     id: "Note",
//     type: "text",
//     labelName: "Note",
//     placeholder: "None",
//     value: "Note",
//     name: "Note",
//     height: "50px",
//     width: "100%",
//   },
// ];

// const TextAreaData: InputItem[] = [
//   {
//     id: "Description",
//     type: "text",
//     labelName: "Description",
//     placeholder: "None",
//     value: "Description",
//     name: "Description",
//     height: "80px",
//     width: "100%",
//   },
// ];

// const AddNewTax: React.FC<AddNewTaxProps> = ({ handleAddNewTax }) => {
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState<Record<string, string>>({});

//   const onChange = (e: React.ChangeEvent<any>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form Data", formData);
//     // dispatch(setFormData(formData));
//     dispatch(addAttribute(formData));

//     localStorage.setItem("formData", JSON.stringify(formData));

//     setFormData({});
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center">
//         <h1 className="xl:text-3xl font-semibold">Add A New Tax Item</h1>
//         <div className="">
//           <RxCross1
//             className="font-bold cursor-pointer xl:text-xl"
//             onClick={handleAddNewTax}
//           />
//         </div>
//       </div>
//       <form onSubmit={onSubmit}>
//         <div className="flex flex-col gap-3 my-5">
//           <>
//             {InputData?.map((item, index) => (
//               <Input
//                 key={index}
//                 labelName={item?.labelName}
//                 value={formData[item?.name] || ""}
//                 placeholder={item?.placeholder}
//                 name={item?.name}
//                 height={item?.height}
//                 width={item?.width}
//                 type={item?.type}
//                 rightIcon={item?.rightIcon}
//                 onChange={onChange}
//               />
//             ))}
//           </>
//           <>
//             {TextAreaData?.map((item, index) => (
//               <TextArea
//                 key={index}
//                 labelName={item?.labelName}
//                 value={formData[item?.name] || ""}
//                 placeholder={item?.placeholder}
//                 name={item?.name}
//                 height={item?.height}
//                 width={item?.width}
//                 type={item?.type}
//                 rightIcon={item?.rightIcon}
//                 onChange={onChange}
//               />
//             ))}
//           </>
//         </div>
//         <div className="my-5 flex xl:flex-row flex-col-reverse w-full gap-5 items-center">
//           <button
//             onClick={handleAddNewTax}
//             className="bg-gray-300 px-6 rounded-full w-full xl:w-max h-[40px] text-[16px]  font-semibold text-white">
//             Cancle
//           </button>
//           <button
//             type="submit"
//             className="bg-blue-500 w-full  xl:w-max rounded-full h-[40px] text-[16px] px-6 font-semibold text-white">
//             Add New Taxs
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddNewTax;

import React from "react";

const Add_new_tax = () => {
  return <div>Add_new_tax</div>;
};

export default Add_new_tax;
