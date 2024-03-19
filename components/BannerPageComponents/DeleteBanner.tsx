import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { disableDeleteBannerComponentShow } from "@/redux/DeleteBannerComponentShow";
import axios from "axios";

const DeleteBanner = () => {
  const [loading, setLoading] = useState(false);

  const [userData, setUserData] = useState<{
    email: string;
    access_token: string;
    expiry: number;
  } | null>(null);

  useEffect(() => {
    // Retrieve userData from localStorage
    const userDataString = localStorage.getItem("User");
    if (userDataString) {
      const userDataObj = JSON.parse(userDataString);
      setUserData(userDataObj);
    }
  }, []);

  const dispatch = useDispatch();

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  const { deleteBannerComponentID } = useSelector(
    (state: RootState) => state.DeleteBannerComponentShow
  );

  function handleDelete() {
    setLoading(true);

    axios.delete(
      `https://ts-api-for-ecomm-product.onrender.com/billboard/${deleteBannerComponentID}`,
      {
        headers: {
          Authorization: `Bearer ${userData?.access_token}`,
        },
      }
    ).then((res)=>{
        // console.log(res.data)
        if(res.data){
            successMessage("Successfully deleted banner")
            setTimeout(() => {
                setLoading(false)
                dispatch(disableDeleteBannerComponentShow())
            }, 3000);
        }
    }).catch((err)=>{
        // console.log(err)
        errorMessage("Some error occured while deleting, please try after some time")
            setTimeout(() => {
                setLoading(false)
                dispatch(disableDeleteBannerComponentShow())
            }, 3000);
    })
  }

  function errorMessage(msg: string) {
    toast.error(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function successMessage(msg: string) {
    toast.success(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  if (loading) {
    return (
      <div className="w-full">
        <ToastContainer />
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
      className={`w-fit max-w-[90vw] bg-white p-[20px] rounded-[20px] text-black flex flex-col gap-[20px] text-[26px] font-[600] ${
        isDarkModeEnableState
          ? "bg-black text-white"
          : "bg-[#ebeef0] text-black"
      }`}
    >
      Are you sure you want to delete it?
      <div className="w-full flex items-center justify-center gap-[20px] flex-wrap text-[14px] font-normal">
        <button
          name="cancel button"
          className={`${
            isDarkModeEnableState
              ? "text-white border border-white"
              : " text-black border border-black"
          } px-[10px] py-[6px] rounded-md`}
          onClick={() => {
            dispatch(disableDeleteBannerComponentShow());
          }}
        >
          Cancel
        </button>

        <button
          name="confirm delete button"
          className="border border-red-600 text-red-600 px-[10px] py-[6px] rounded-md"
          onClick={() => {
            handleDelete();
          }}
        >
          Confirm delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteBanner;
