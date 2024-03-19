import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface DeleteAttributeProps {
  attributeId: string;
  onClose: () => void;
}

const DeleteAttribute: React.FC<DeleteAttributeProps> = ({
  onClose,
  attributeId,
}) => {
  const getDataFromLoacalStorege = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  const UserData = getDataFromLoacalStorege("User");

  const [loading, setLoading] = useState(false);

  const handleDeleteAttribute = () => {
    setLoading(true);
    axios
      .delete(
        `https://ts-api-for-ecomm-product.onrender.com/attributes/${attributeId}`,
        {
          headers: {
            Authorization: `Bearer ${UserData?.access_token}`,
          },
        }
      )
      .then((res) => {
        setLoading(false);
        if (res.data.id) {
          SuccessMessage("Attribute Deleted Successfully");
        }
      })
      .catch((err) => {
        setLoading(false);
        ErrorMessage(
          "Some error occured while deleting, please try after some time"
        );
        console.log(err.response);
      });
  };

  const SuccessMessage = (message: string) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const ErrorMessage = (message: string) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

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
    <div>
      <ToastContainer />

      <div className="bg-white w-max px-10 rounded-md shadow-sm p-2 flex flex-col gap-2 justify-center items-center">
        <h1 className="text-center">confirm to delete</h1>
        <div className="my-5 flex gap-2 ">
          <div>
            <button
              onClick={onClose}
              className="bg-slate-400 flex justify-center items-center py-1 text-[16px] px-2 rounded-md font-semibold text-white">
              cancle
            </button>
          </div>
          <div>
            <button
              onClick={handleDeleteAttribute}
              className="bg-red-500 text-[16px] flex justify-center items-center py-1 px-2 rounded-md font-semibold text-white">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAttribute;
