import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import Select from "@/ui/select";
import PaginationRounded from "@/ui/pagination";

interface Product {
  productName: string;
  category: string;
  price: number;
  sold: number;
  revenue: number;
}

interface Select {
  name: string;
}

const bottom: Select[] = [
  {
    name: "sheer:01",
  },
];

const body: Product[] = [
  {
    productName: "Navyblue smart watch",
    category: "Men. Watches",
    price: 231,
    sold: 31,
    revenue: 15000,
  },
  {
    productName: "Navyblue smart watch",
    category: "childer, Watches",
    price: 218,
    sold: 126,
    revenue: 100000,
  },
];

export default function Tables() {
  return (
    <TableContainer>
      <Table
        // sx={{ minWidth: 1250 }}
        aria-label="simple table"
        className="md:w-[600px] lg:w-[800px] xl:[1200px] 2xl:w-[1250px]">
        <TableHead>
          <TableRow sx={{ padding: 0 }}>
            <TableCell className="font-semibold text-[10px] sm:text-[12px]   lg:text-[14px] xl:text-[14px]">
              Product Name
            </TableCell>
            <TableCell className="font-semibold text-[10px] sm:text-[12px]  lg:text-[14px] xl:text-[14px]">
              category
            </TableCell>
            <TableCell className="font-semibold text-[10px] sm:text-[12px]  lg:text-[14px] xl:text-[14px]">
              Price
            </TableCell>
            <TableCell className="font-semibold text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[14px]">
              Sold
            </TableCell>
            <TableCell className="font-semibold text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[14px]">
              Revenues
            </TableCell>
            <TableCell className="font-semibold text-[10px] sm:text-[12px]  lg:text-[14px] xl:text-[14px]">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {body.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="md:text-[12px] text-[12px] sm:text-[12px] lg:text-[14px] flex gap-2  justify-center items-center">
                <InsertPhotoOutlinedIcon className="bg-[#B3B3B3] text-[24px] sm:md:text-[16px] md:text-[16px] lg:text-[24px]" />{" "}
                {item?.productName}
              </TableCell>
              <TableCell className="md:text-[12px] text-[12px] sm:text-[12px]  lg:text-[14px]">
                {item?.category}
              </TableCell>
              <TableCell className="md:text-[12px] text-[12px] sm:text-[12px]  lg:text-[14px]">
                $ {item?.price}
              </TableCell>
              <TableCell className="md:text-[12px] text-[12px] sm:text-[12px]  lg:text-[14px]">
                {item?.sold}
              </TableCell>
              <TableCell className="md:text-[12px] text-[12px] sm:text-[12px]  lg:text-[14px]">
                $ {item?.revenue}
              </TableCell>
              <TableCell className="md:text-[12px] text-[12px]  lg:text-[14px]">
                <MoreVertIcon className="text-[#B3B3B3]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex  justify-between gap-x-10 w-full  sm:flex-row px-5 py-10">
        <div>
          {bottom?.map((item, index) => (
            <Select key={index} name={item?.name} />
          ))}
        </div>
        <div className="w-[100px] h-5">
          <PaginationRounded />
        </div>
      </div>
    </TableContainer>
  );
}
