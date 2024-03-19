// import { RootState } from "@/redux/store";
// import React, { ReactNode } from "react";
// import { useSelector } from "react-redux";

// interface TableHeadDataProps {
//   headers: string[];
// }

// interface TableBodyDataProps {
//   data: {
//     name: string;
//     description: string;
//     note: string;
//     taxRate: string;
//     countOfItems: string;
//   }[];
// }

// const TaxTable: React.FC<TableHeadDataProps & TableBodyDataProps> = ({
//   headers,
//   data,
// }) => {
//   const formData = useSelector((state: RootState) => state.attribute);

//   return (
//     <div>
//       <div
//         className="w-full  flex flex-col gap-[48px] overflow-auto"
//         style={{ scrollbarWidth: "none" }}>
//         <div className="w-full flex items-center justify-between text-[16px] font-[500] gap-[10px]">
//           {headers?.map((item, index) => (
//             <div
//               key={index}
//               className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
//               <h1 className="font-bold">{item}</h1>
//             </div>
//           ))}
//         </div>

//         <div className="w-full flex flex-col gap-[40px]">
//           <div className="w-full flex flex-col gap-[16px]">
//             {Object.entries(formData)?.map(([key, value], index) => (
//               <div
//                 key={index}
//                 className="w-full flex items-center justify-between text-[14px] gap-[10px]">
//                 <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
//                   {value as ReactNode}
//                 </div>

//                 <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
//                   {/* {item?.description} */}
//                   {formData["Description"]}
//                 </div>

//                 <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
//                   {/* {item?.note} */}
//                   {formData["Note"]}
//                 </div>

//                 <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center text-[16px] ">
//                   {/* {item?.taxRate} */}
//                   {formData["Tax Rate"]}
//                 </div>

//                 <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center text-[16px] ">
//                   {/* {item?.countOfItems} */}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaxTable;

import React from "react";
import { useSelector } from "react-redux";

interface TableHeadDataProps {
  headers: string[];
}

interface TableBodyDataProps {
  data: {
    name: string;
    description: string;
    note: string;
    taxRate: string;
    countOfItems: string;
  }[];
}

interface RootState {
  tax: {
    taxFormData: Record<string, string>;
  };
}

const TaxTable: React.FC<TableHeadDataProps & TableBodyDataProps> = ({
  headers,
  data,
}) => {
  const taxFormData = useSelector((state: RootState) => state.tax.taxFormData);

  const taxFormDataKeys = Object.keys(taxFormData);

  return (
    <div>
      <div
        className="w-full  flex flex-col gap-[48px] overflow-auto"
        style={{ scrollbarWidth: "none" }}>
        <div className="w-full flex items-center justify-between xl:grid xl:grid-cols-5  text-[16px] font-[500] gap-[10px]">
          {headers?.map((item, index) => (
            <div
              key={index}
              className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
              <h1 className="font-bold">{item}</h1>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-[40px]">
          <div className="w-full flex items-center justify-between xl:grid xl:grid-cols-5 gap-[16px]">
            {taxFormDataKeys?.map((item, index) => (
              <div
                key={index}
                className=" w-full flex items-center justify-between text-[14px] gap-[10px]">
                <div className="min-w-[180px] max-w-[280px]   h-[40px] flex items-center">
                  {taxFormData[item]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxTable;
