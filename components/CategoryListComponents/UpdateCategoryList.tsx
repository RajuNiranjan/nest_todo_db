import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import ThumbnailIcon from "./icons/thumbnailIcon.png";
import { RootState } from "@/redux/store";
import { CldUploadButton } from "next-cloudinary";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { disableUpdateCategoryComponentShow } from "@/redux/UpdateCategoryComponentShow";

interface Banner {
  createdAt: string; // Assuming createdAt is a string
  label: string;
  content: string;
  imageUrl: string;
  id: string;
  // Add more properties if needed
}

const UpdateCategoryList = () => {
  const [selectImage, setSelectImage] = useState(null);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [parentId, setParentId] = useState("");
  const [updateCategoryLoading, setUpdateCategoryLoading] = useState(false);

  const [selectAbannerShow, setSelectAbannerShow] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState("");
  const [selectedBannerId, setSelectedBannerId] = useState("");
  const [bannerDetails, setBannerDetails] = useState<Banner[]>([]);
  const [bannerDetailsLoading, setBannerDetailsLoading] = useState(false);
  const [description, setDescription] = useState('')

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

  useEffect(() => {
    if (storeDetails) {
      setBannerDetailsLoading(true);

      axios
        .get(
          `https://ts-api-for-ecomm-product.onrender.com/billboard/${storeDetails.storeID}/all`
        )
        .then((res) => {
          // console.log(res);
          if (res.data) {
            setBannerDetails(res.data);
            // console.log(bannerDetails);
            setBannerDetailsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [storeDetails]);

  useEffect(() => {
    setUpdateCategoryLoading(true);

    if (updateCategoryComponentID) {
      axios
        .get(
          `https://ts-api-for-ecomm-product.onrender.com/category/${updateCategoryComponentID}`
        )
        .then((res) => {
          console.log(res.data);
          setName(res.data.name);
          setGender(res.data.gender);
          setSelectedBannerId(res.data.billboard.id);
          setSelectImage(res.data.imageUrl);
          setSelectedBanner(res.data.billboard.imageUrl);
          setDescription(res.data.description)
        })
        .catch((err) => {
          errorMessage("Some error occured during fetching category details");
          setTimeout(() => {
            setUpdateCategoryLoading(false);
            dispatch(disableUpdateCategoryComponentShow());
          }, 3000);
        });
    }
  }, []);

  useEffect(() => {
    if (
      name.length > 0 &&
      gender.length > 0 &&
      selectedBanner.length > 0 &&
      selectedBannerId.length > 0 &&
      selectImage
    ) {
      setUpdateCategoryLoading(false);
    }
  }, [name, gender, selectedBannerId, selectImage, selectedBanner, description]);

  const handleUploadSuccess = (event: any) => {
    const file = event.info.secure_url;
    setSelectImage(file);
    // localStorage.setItem("selectedImageName", event.original_filename);
    // localStorage.setItem("selectedImageSize", event.info.bytes.toString());
  };

  const dispatch = useDispatch();
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  const { updateCategoryComponentID } = useSelector(
    (state: RootState) => state.UpdateCategoryComponentShow
  );

  function handleUpdateCategory() {
    setUpdateCategoryLoading(true);

    axios
      .patch(
        `https://ts-api-for-ecomm-product.onrender.com/category/${updateCategoryComponentID}/update`,
        {
          name,
          billboardId: selectedBannerId,
          gender,
          imageUrl: selectImage,
          parentId,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${userData?.access_token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          successMessage("Category updated succesfully");
          setTimeout(() => {
            setName("");
            setSelectImage(null);
            setSelectedBanner("");
            setSelectedBannerId("");
            setUpdateCategoryLoading(false);
            dispatch(disableUpdateCategoryComponentShow());
          }, 3000);
        }
      })
      .catch((err) => {
        console.log(err);

        errorMessage("Some error occured please try again later");
        setTimeout(() => {
          setName("");
          setSelectImage(null);
          setSelectedBanner("");
          setSelectedBannerId("");
          setUpdateCategoryLoading(false);
          dispatch(disableUpdateCategoryComponentShow());
        }, 3000);
      });
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

  if (updateCategoryLoading) {
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
      className={`${
        isDarkModeEnableState
          ? "bg-black text-white"
          : "bg-[#ebeef0] text-black"
      } rounded-[24px] px-[20px] py-[20px] relative max-h-[90vh] h-fit overflow-auto`}
      style={{
        scrollbarWidth: "none",
      }}>
      <ToastContainer />

      <div
        className="absolute right-[10px] top-[10px] cursor-pointer"
        onClick={() => {
          dispatch(disableUpdateCategoryComponentShow());
        }}>
        <CloseIcon />
      </div>

      {/* Select a banner component */}

      <div
        className={`w-full absolute top-0 left-0 h-full ${
          selectAbannerShow ? "opacity-100 block" : "opacity-0 hidden"
        } ${
          isDarkModeEnableState
            ? "bg-black text-white"
            : "bg-[#ebeef0] text-black"
        } z-50`}>
        {bannerDetailsLoading ? (
          <div className="w-full">
            <div className="flex items-center justify-center h-screen">
              <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="w-full h-full flex items-center justify-center gap-[20px] flex-wrap py-[20px] overflow-auto"
            style={{ scrollbarWidth: "none" }}>
            {bannerDetails.map((details, i) => {
              return (
                <div
                  key={i}
                  className="w-[200px] h-[160px] rounded-md overflow-hidden transition-all duration-500 hover:scale-110 cursor-pointer"
                  onClick={() => {
                    setSelectedBanner(details.imageUrl);
                    setSelectedBannerId(details.id);
                    setSelectAbannerShow(false);
                  }}>
                  <Image
                    src={details.imageUrl}
                    alt={details.label}
                    width={200}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Select a banner component */}

      <p className="text-[24px] font-[600]">Add New Category</p>

      <div className="w-[340px] 500px:w-[460px] 900px:w-[790px] flex flex-col gap-[48px] mt-[30px]">
        <div className="flex flex-col gap-[16px]">
          <div className="w-full flex gap-[20px] 900px:gap-[100px] flex-col 900px:flex-row">
            <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
              <p className="text-[16px]">Category name</p>

              <input
                type="text"
                placeholder="Category name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="outline-none bg-white rounded p-[10px] border text-black border-[#71a7ef] border-opacity-80"
              />

              <p className="text-[12px]">
                The name is how it appears on website
              </p>
            </div>

            <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
              <p className="text-[16px]">Select Category</p>

              <select
                className="outline-none bg-white rounded p-[10px] border border-[#71a7ef] text-black border-opacity-80"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                value={gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            <p className="text-[16px]">Description</p>

            <textarea
              placeholder="Enter the decription of the category"
              className="outline-none bg-white rounded p-[10px] border border-[#71a7ef] border-opacity-80 resize-none text-black h-[80px]"
              value={description}
              onChange={e=>{setDescription(e.target.value)}}
            />
          </div>

          <div className="w-full flex gap-[20px] 900px:gap-[100px] flex-col 900px:flex-row">
            <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
              <p className="text-[16px]">Thumbnail</p>

              <div className="flex items-center gap-[8px]">
                <Image
                  src={selectImage ? selectImage : ThumbnailIcon}
                  alt="Thumbnail icon"
                  width={48}
                  height={48}
                  className="w-[48px] h-[48px] object-cover cursor-pointer"
                />

                <div className="p-[10px]">
                  <CldUploadButton
                    uploadPreset={
                      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
                    }
                    onSuccess={(event) => handleUploadSuccess(event)}
                    className="px-[24px] py-[10px] border border-[#196fe1] rounded-[8px] text-[16px] font-[500] text-[#196fe1] cursor-pointer">
                    Upload/Add Image
                  </CldUploadButton>
                </div>
              </div>
            </div>

            {/* <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
              <p className="text-[16px]">Select Category</p>

              <select
                className="outline-none bg-white rounded p-[10px] border border-[#71a7ef] text-black border-opacity-80"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                value={gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </select>
            </div> */}
          </div>

          <div className="w-full flex gap-[20px] 900px:gap-[100px] flex-col 900px:flex-row">
            <div className="flex flex-col gap-[8px] w-full 900px:w-1/2">
              <p className="text-[16px]">Select a banner</p>

              <div className="flex items-center gap-[8px]">
                <div className="p-[10px]">
                  <button
                    name="select banner button"
                    className="px-[24px] py-[10px] border border-[#196fe1] rounded-[8px] text-[16px] font-[500] text-[#196fe1] cursor-pointer"
                    onClick={() => {
                      setSelectAbannerShow(true);
                    }}>
                    {selectedBanner ? (
                      <div className="w-[200px] h-[160px] rounded-md overflow-hidden cursor-pointer">
                        <Image
                          src={selectedBanner}
                          alt={"Selected banner"}
                          width={200}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      "Select a banner"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[16px] text-[16px] font-[600] flex-wrap">
          <button
            name="Save Draft button"
            className="bg-[#b3b3b3] px-[24px] py-[10px] rounded-[10px] text-white">
            Save Draft
          </button>

          <button
            name="Add new Category button"
            className="px-[24px] py-[10px] rounded-[10px] bg-[#196fe1] text-white"
            onClick={() => {
              handleUpdateCategory();
            }}>
            Update Category
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategoryList;
