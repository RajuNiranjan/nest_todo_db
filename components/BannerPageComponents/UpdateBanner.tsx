import { RootState } from "@/redux/store";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { disableUpdateBannerComponentShow } from "@/redux/UpdateBannerComponentShow";
import CloseIcon from "@mui/icons-material/Close";
import { CldUploadButton } from "next-cloudinary";

const UpdateBanner = () => {
  const [updateBannerLoading, setUpdateBannerloading] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [label, setLabel] = useState("");
  const [content, setContent] = useState("");
  const [btnUrl, setBtnUrl] = useState("");

  const [storeDetails, setStoreDetails] = useState<{
    storeName: string;
    storeID: string;
    storeOwnerId: string;
    expiry: number;
  } | null>(null);
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

    const tempStoreDetails = localStorage.getItem("storeDetails");
    if (tempStoreDetails !== null) {
      setStoreDetails(JSON.parse(tempStoreDetails));
    }
  }, []);

  const dispatch = useDispatch();

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  const { updateBannerComponentID, updateBannerComponentBtnUrl, updateBannerComponentContent, updateBannerComponentImageUrl, updateBannerComponentLabel } = useSelector(
    (state: RootState) => state.UpdateBannerComponentShow
  );

  useEffect(()=>{
    if(updateBannerComponentBtnUrl.length > 0 && updateBannerComponentContent.length > 0 && updateBannerComponentImageUrl.length > 0 && updateBannerComponentLabel.length > 0) {
        setLabel(updateBannerComponentLabel)
        setImageUrl(updateBannerComponentImageUrl)
        setContent(updateBannerComponentContent)
        setBtnUrl(updateBannerComponentBtnUrl)
    }
  }, [updateBannerComponentBtnUrl, updateBannerComponentContent, updateBannerComponentImageUrl, updateBannerComponentLabel])

  const handleUploadSuccess = (event: any) => {
    const file = event.info.secure_url;
    setImageUrl(file);
    // localStorage.setItem("selectedImageName", event.original_filename);
    // localStorage.setItem("selectedImageSize", event.info.bytes.toString());
    // console.log(file);
  };

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

  function handleUpdateBanner(){
    setUpdateBannerloading(true)

    if(imageUrl === ""){
      errorMessage("Please select an image")
      setTimeout(() => {
        setUpdateBannerloading(false)
        return
      }, 3000);
    }

    axios.patch(`https://ts-api-for-ecomm-product.onrender.com/billboard/${updateBannerComponentID}/update`,{
        label: label,
        imageUrl: imageUrl,
        content: content,
        btnUrl: btnUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${userData?.access_token}`,
        },
      }).then((res)=>{
        if(res.data){
            successMessage("Banner updated successfully");
          setTimeout(() => {
            setUpdateBannerloading(false)
            dispatch(disableUpdateBannerComponentShow());
          }, 3000);
        }
      }).catch((err)=>{
        errorMessage("Some error occured: please try again later")
          setTimeout(() => {
            setUpdateBannerloading(false)
            dispatch(disableUpdateBannerComponentShow());
          }, 3000);
      })
  }

  if (updateBannerLoading) {
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
      className={`rounded-[16px] ${
        isDarkModeEnableState ? "bg-black text-white" : "bg-white text-black"
      } px-[20px] py-[20px] drop-shadow-md flex flex-col gap-[32px] relative`}
    >
      <ToastContainer />

      <div
        className="absolute top-[12px] right-[12px] cursor-pointer"
        onClick={() => {
          dispatch(disableUpdateBannerComponentShow());
        }}
      >
        <CloseIcon />
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex gap-[32px] flex-col 900px:flex-row">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[16px]">Title</p>

            <input
              type="text"
              className="outline-none border-none p-[10px] w-[320px] 900px:w-[766px] h-[40px] rounded text-black bg-[#d1e2fa]"
              placeholder="Enter title"
              value={label}
              onChange={(e) => {
                setLabel(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-[16px]">Description</p>

          <textarea
            name=""
            id=""
            className="outline-none border-none w-[320px] 900px:w-[766px] h-[96px] text-black bg-[#d1e2fa] rounded p-[10px] resize-none"
            placeholder="Enter the description of the banner"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col gap-[8px]">
          <p className="text-[16px]">Hyperlink</p>

          <input
            name=""
            id=""
            className="outline-none border-none w-[320px] 900px:w-[526px] text-black h-[40px] bg-[#d1e2fa] rounded p-[10px]"
            placeholder="Enter the link of the image"
            value={btnUrl}
            onChange={(e) => {
              setBtnUrl(e.target.value);
            }}
          />
        </div>

        {imageUrl ? (
          <div className="w-[100px] h-[100px] relative">
            <div
              className="absolute top-[0px] right-[0px] cursor-pointer"
              onClick={() => {
                setImageUrl("");
              }}
            >
              <CloseIcon />
            </div>
            <Image
              alt="Banner Image Preview"
              src={imageUrl}
              width={100}
              height={100}
              className="w-[100px] h-[100px] rounded-md object-cover"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-[8px]">
            <p className="text-[16px]">Select image</p>

            <div>
              <CldUploadButton
                uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                onSuccess={(event) => handleUploadSuccess(event)}
                className="px-[16px] py-[8px] text-[14px] text-white bg-[#b3b3b3] rounded w-fit"
              >
                Select media
              </CldUploadButton>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-[24px]">
        <button
          name="Save draft button"
          className="py-[10px] px-[24px] text-white rounded-full text-[16px] bg-[#b3b3b3]"
        >
          Save Draft
        </button>
        <button
          name="Add banner button"
          className="py-[10px] px-[24px] text-white rounded-full text-[16px] bg-[#196fe1]"
          onClick={() => {
            handleUpdateBanner();
          }}
        >
          Update Banner
        </button>
      </div>
    </div>
  );
};

export default UpdateBanner;
