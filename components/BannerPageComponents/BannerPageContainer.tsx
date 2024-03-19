import React from "react";
import SearchContainer from "./SearchContainer";
import AllBaners from "./AllBaners";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Backdrop } from "@mui/material";
import AddBanner from "./AddBanner";
import { disableAddBannerComponentShow } from "@/redux/AddBannerComponentShow";
import Image from "next/image";
import { disableAddImagePreviewShow } from "@/redux/AddImagePreviewShow";
import DeleteBanner from "./DeleteBanner";
import UpdateBanner from "./UpdateBanner";

const BannerPageContainer = () => {
  const { addBannerCompanentShowState } = useSelector(
    (state: RootState) => state.AddBannerComponentShow
  );

  const dispatch = useDispatch();

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  const { addImagePreviewShowState, imageURl } = useSelector(
    (state: RootState) => state.AddImagePreviewShow
  );

  const { deleteBannerComponentShowState } = useSelector(
    (state: RootState) => state.DeleteBannerComponentShow
  );

  const { updateBannerComponentShowState } = useSelector(
    (state: RootState) => state.UpdateBannerComponentShow
  );

  return (
    <div className="w-full flex flex-col gap-[30px]">
      <p
        className={`text-[36px] font-bold ${
          isDarkModeEnableState && "text-white"
        }`}
      >
        Banners
      </p>

      <SearchContainer />

      <AllBaners />

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addBannerCompanentShowState || addImagePreviewShowState || deleteBannerComponentShowState || updateBannerComponentShowState}
        onClick={() => {dispatch(disableAddImagePreviewShow())}}
      >
        {addBannerCompanentShowState && <AddBanner />}
        {addImagePreviewShowState && (
          <Image
            src={imageURl}
            alt="Preview image"
            width={200}
            height={200}
            className="w-[90vw] h-auto object-cover max-h-[90vh] rounded-[10px]"
            onClick={(e)=>{e.stopPropagation()}}
          />
        )}
        {deleteBannerComponentShowState && <DeleteBanner />}
        {updateBannerComponentShowState && <UpdateBanner />}
      </Backdrop>
    </div>
  );
};

export default BannerPageContainer;
