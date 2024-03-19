// import React from "react";
// import Tables from "./table";
// import PaginationRounded from "@/ui/pagination";
// import Select from "@/ui/select";

// interface Select {
//   name: string;
// }

// const select: Select[] = [
//   {
//     name: "Category",
//   },
//   {
//     name: "Status",
//   },
//   {
//     name: "Price",
//   },
//   {
//     name: "Months",
//   },
// ];

// const bottom: Select[] = [
//   {
//     name: "sheer:01",
//   },
// ];

// const ProductTable = () => {
//   return (
//     <div className="bg-white  rounded-md shadow-md p-5 w-full sm:w-[580px] md:w-[600px] lg:w-[850px] xl:[1200px] 2xl:w-[1250px]">
//       <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-5">
//         {select?.map((item, index) => (
//           <Select key={index} name={item?.name} />
//         ))}
//       </div>
//       <Tables />
//       {/* <div className="flex flex-col gap-5 sm:flex-row justify-between px-5 py-10">
//         <div>
//           {bottom?.map((item, index) => (
//             <Select key={index} name={item?.name} />
//           ))}
//         </div>
//         <PaginationRounded />
//       </div> */}
//     </div>
//   );
// };

// export default ProductTable;

import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import React from "react";
import SelectComponent from "@/ui/selectComponent";
import PaginationRounded from "@/ui/pagination";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface TableHeadItem {
  name: string;
  minWidth: number;
  maxWidth: number;
}

interface TableHeadDataProps {
  headers: TableHeadItem[];
}

interface TableBodyDataProps {
  data: {
    productName: string;
    category: string;
    price: number;
    stock: number;
    sold: number;
    revenue: number;
  }[];
}

const selectData = [
  {
    name: ["Category"],
    border: "blue-300",
  },
  {
    name: ["Status"],
    border: "blue-300",
  },
  {
    name: ["Price"],
    border: "blue-300",
  },
  {
    name: ["Months"],
    border: "blue-300",
  },
];

const ProductTable: React.FC<TableHeadDataProps & TableBodyDataProps> = ({
  headers,
  data,
}) => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div>
      <div
        className="w-full  flex flex-col gap-[48px] overflow-auto"
        style={{ scrollbarWidth: "none" }}>
        <div className=" flex xl:grid xl:grid-cols-5 w-[500px]  xl:w-full gap-5">
          {selectData?.map((item, index) => (
            <div
              key={index}
              className="text-[#b3b3b3] px-[8px] w-full rounded-[4px] border border-blue-300 flex items-center gap-[10px]">
              <select
                name=""
                id=""
                className="py-[8px] w-full outline-none border-none flex gap-2 bg-transparent">
                <option className="p-2" value={item?.name}>
                  {item?.name}
                </option>
                {/* <option value="">Sheet 02</option> */}
              </select>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-between text-[16px] font-[500] gap-[10px]">
          {headers?.map((item, index) => (
            <div
              key={index}
              className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
              <h1 className="font-bold">{item?.name}</h1>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col gap-[40px]">
          <div className="w-full flex flex-col gap-[16px]">
            {data?.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-between text-[14px] gap-[10px]">
                <div className="min-w-[180px] max-w-[180px] h-[40px] flex gap-2 items-center">
                  <InsertPhotoOutlinedIcon className="bg-[#B3B3B3] text-[24px] sm:md:text-[16px] md:text-[16px] lg:text-[24px]" />
                  {item?.productName}
                </div>

                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
                  {item?.category}
                </div>

                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
                  $ {item?.price}
                </div>

                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center text-[16px] ">
                  {item?.stock}
                </div>
                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center text-[16px] ">
                  {item?.sold}
                </div>

                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center text-[16px] ">
                 $ {item?.revenue}
                </div>
                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center text-[16px] ">
                  <MoreVertIcon className="text-[#B3B3B3]" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <SelectComponent />
          <PaginationRounded />
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
