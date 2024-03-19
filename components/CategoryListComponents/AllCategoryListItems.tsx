import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import axios from "axios";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { enableUpdateCategoryComponentShow } from "@/redux/UpdateCategoryComponentShow";
import { enableDeleteCategoryComponentShow } from "@/redux/DeleteCategoryComponentShow";

interface Category {
  id: string;
  imageUrl: string;
  name: string;
  description: string;
}

const AllCategoryListItems = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const [categoryLists, setCategoryLists] = useState<Category[]>([]);

  const [storeDetails, setStoreDetails] = useState<{
    storeName: string;
    storeID: string;
    storeOwnerId: string;
    expiry: number;
  } | null>(null);
  
  const [showEditAndUpdateOption, setShowEditandUpdateOption] = useState(-1)

  const dispatch = useDispatch()

  useEffect(() => {
    const tempStoreDetails = localStorage.getItem("storeDetails");
    if (tempStoreDetails !== null) {
      setStoreDetails(JSON.parse(tempStoreDetails));
    }
  }, []);

  useEffect(() => {
    if (storeDetails) {
      axios
        .get(
          `https://ts-api-for-ecomm-product.onrender.com/category/${storeDetails.storeID}/all`
        )
        .then((res) => {
          console.log(res.data)
          if (res.data) {
            setPageLoading(false);
            setCategoryLists(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  if (pageLoading) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full mt-[30px] ${
        isDarkModeEnableState ? "bg-black text-white" : "bg-white"
      } rounded-[16px] drop-shadow-md px-[32px] py-[32px] flex flex-col gap-[32px]`}
    >
      <div className="w-full border px-[24px] py-[10px] flex items-center gap-[16px] border-[#81b4f8] text-[#b3b3b3] rounded-[8px]">
        <SearchIcon />

        <input
          type="text"
          placeholder="Search category"
          className="text-[14px] outline-none border-none bg-transparent w-full"
        />
      </div>

      <div
        className="w-full flex flex-col gap-[40px] overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="w-full flex items-center justify-between gap-[10px] text-[16px] font-[600]">
          <div className="min-w-[70px] max-w-[70px] h-[40px] flex items-center justify-center">
            Image
          </div>

          <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
            Name
          </div>

          <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center">
            Description
          </div>

          <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center">
            Parent Category
          </div>

          <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center">
            Sub Category
          </div>

          <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center">
            Products Count
          </div>

          <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center justify-center">
            Published
          </div>

          <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center">
            Action
          </div>
        </div>

        <div className="w-full flex flex-col gap-[16px]">
          {categoryLists.map((details, index) => {
            return (
              <div className="w-full flex items-center justify-between text-[14px] gap-[20px]" key={index}>
                <div className="min-w-[70px] max-w-[70px] h-[40px] flex items-center justify-center">
                  {details.imageUrl ? (
                    <Image
                      src={details.imageUrl}
                      alt={details.name}
                      width={40}
                      height={40}
                      className="width-[40px] h-[40px] object-cover rounded-full"
                    />
                  ) : (
                    <Avatar />
                  )}
                </div>

                <div className="min-w-[180px] max-w-[180px] h-[40px] flex items-center">
                  {details.name}
                </div>

                <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center">
                  {details.description}
                </div>

                <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center">
                  Clothing
                </div>

                <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center flex-wrap gap-[6px] bg-[#CFE2FB] px-[8px] py-[8px] rounded">
                  Men Clothing
                  <KeyboardArrowDownIcon />
                </div>

                <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center text-[16px] font-[600]">
                  1000
                </div>

                <div className="min-w-[140px] max-w-[140px] h-[40px] flex items-center justify-center rounded-full bg-[#196fe1] text-white text-[16px] font-[600] cursor-pointer">
                  Published
                </div>

                <div 
                className="min-w-[140px] max-w-[140px] h-[40px] flex items-center text-[16px] font-[600] text-gray-400"
                onClick={()=>{ setShowEditandUpdateOption(index) }}>
                {
                  showEditAndUpdateOption === index ?
                  <div className="w-full flex flex-col gap-[8px]">
                    <button
                    name="Update button"
                    className={`w-fit px-[10px] text-[14px] py-[6px] rounded ${isDarkModeEnableState ? 'text-white border border-white' : ' text-black border border-black'}`}
                    onClick={()=>{dispatch(enableUpdateCategoryComponentShow({id:details.id}))}}>
                      Update
                    </button>
                    <button
                    name="Delete button"
                    className={`w-fit py-[6px] px-[10px] text-[14px] rounded text-red-600 border border-red-600`}
                    onClick={()=>{dispatch(enableDeleteCategoryComponentShow({id:details.id}))}}>
                      Delete
                    </button>
                  </div>
                  :
                <MoreHorizIcon className="cursor-pointer" />
                }
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex items-center justify-between gap-[20px] flex-wrap">
        <div className="text-[#b3b3b3] px-[8px] rounded-[8px] border border-[#b3b3b3] flex items-center gap-[10px]">
          <select
            name=""
            id=""
            className="py-[8px] outline-none border-none bg-transparent"
          >
            <option value="">Sheet 01</option>
            <option value="">Sheet 02</option>
          </select>
        </div>

        <div className="flex items-center gap-[10px]">
          <div className="flex items-center gap-[24px]">
            <div className="w-full flex items-center justify-between gap-[20px] flex-wrap">
              <div className="flex items-center gap-[10px]">
                <p className="text-[14px]">{categoryLists.length} items</p>

                <div className="flex items-center gap-[24px]">
                  <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
                    <KeyboardArrowLeftIcon />
                  </div>

                  <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
                    <p>1</p>
                  </div>
                  <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3] text-[#b3b3b3]">
                    <p>2</p>
                  </div>

                  <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
                    <KeyboardArrowRightIcon />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[32px] h-[32px] flex items-center justify-center rounded border border-[#b3b3b3]">
              <KeyboardArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategoryListItems;
