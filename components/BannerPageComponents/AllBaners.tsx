import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PencilIcon from "./icons/Pencil.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import axios from "axios";
import { enableAddImagePreviewShow } from "@/redux/AddImagePreviewShow";
import { enableDeleteBannerComponentShow } from "@/redux/DeleteBannerComponentShow";
import { enableUpdateBannerComponentShow } from "@/redux/UpdateBannerComponentShow";

interface Banner {
  createdAt: string; // Assuming createdAt is a string
  label: string;
  imageUrl: string;
  id: string;
  btnUrl: string;
  content: string;
  // Add more properties if needed
}

const AllBaners = () => {
  const [loading, setLoadig] = useState(true);
  const [bannerDetails, setBannerDetails] = useState<Banner[]>([]);
  const [showEditAndUpdateOption, setShowEditandUpdateOption] = useState(-1)
  const [storeDetails, setStoreDetails] = useState<{
    storeName: string;
    storeID: string;
    storeOwnerId: string;
    expiry: number;
  } | null>(null);

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
          `https://ts-api-for-ecomm-product.onrender.com/billboard/${storeDetails.storeID}/all`
        )
        .then((res) => {
          // console.log(res);
          if (res.data) {
            setBannerDetails(res.data);
            console.log(bannerDetails);
            setLoadig(false)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }

  }, [storeDetails]);

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  if(loading){
    return(
      <div className="w-full">
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`w-full flex flex-col gap-[48px] px-[16px] py-[16px] ${
        isDarkModeEnableState ? "bg-black text-white" : "bg-white"
      } border border-[#81b4f8] rounded-[16px] drop-shadow-md overflow-auto`}
      style={{ scrollbarWidth: "none" }}
    >
      <div className="w-full flex items-center justify-between text-[16px] font-bold gap-[10px]">
        <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">Title</p>

        <p className="px-[8px] py-[8px] min-w-[224px] max-w-[224px]">
          Description
        </p>

        <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">
          Update Date
        </p>

        <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">Image</p>

        <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">Details</p>

        <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] text-center">
          Action
        </p>

        {/* <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] text-center" /> */}
      </div>

      <div className="w-full flex flex-col gap-[16px]">

        {
        bannerDetails.map((details, index) => {

          const { createdAt } = details;
          const formattedDate = new Date(createdAt).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          });

          return (
            <div
              className="w-full flex items-center justify-between text-[14px] gap-[10px]"
              key={index}
            >
              <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">
                {details.label}
              </p>

              <p className="px-[8px] py-[8px] min-w-[224px] max-w-[224px]">
                {details.content}
              </p>

              <p className="px-[8px] py-[8px] min-w-[120px] max-w-[120px]">
                {formattedDate}
              </p>

              <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] flex items-center gap-[4px]">
                {/* <p>15Aug.jpg</p> */}
                <div className="text-[#0664e0]" onClick={()=>{
                  dispatch(enableAddImagePreviewShow({ imageUrl: details.imageUrl }))
                }}>
                  <VisibilityIcon className="cursor-pointer" />
                </div>
              </div>

              <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] text-[#0664e0] flex items-center gap-[4px]">
                <p>Details</p>
                <ErrorOutlineIcon />
              </div>

              <div 
              className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] text-center text-gray-400"
              onClick={()=>{ setShowEditandUpdateOption(index) }}>
                {
                  showEditAndUpdateOption === index ?
                  <div className="w-full flex flex-col gap-[8px]">
                    <button
                    name="Update button"
                    className={`w-full py-[6px] rounded ${isDarkModeEnableState ? 'text-white border border-white' : ' text-black border border-black'}`}
                    onClick={()=>{ dispatch(enableUpdateBannerComponentShow({id:details.id, btnUrl:details.btnUrl, content:details.content, imageUrl:details.imageUrl, label:details.label})) }}>
                      Update
                    </button>
                    <button
                    name="Delete button"
                    className={`w-full py-[6px] rounded text-red-600 border border-red-600`}
                    onClick={()=>{ dispatch(enableDeleteBannerComponentShow({id:details.id})) }}>
                      Delete
                    </button>
                  </div>
                  :
                <MoreHorizIcon className="cursor-pointer" />
                }
              </div>

              {/* <div className="px-[8px] py-[8px] min-w-[120px] max-w-[120px] flex items-center justify-center">
                <Image
                  src={PencilIcon}
                  alt="Pencli icon"
                  width={32}
                  height={32}
                  className="w-[32px] h-[32px] object-cover cursor-pointer"
                />
              </div> */}
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default AllBaners;
