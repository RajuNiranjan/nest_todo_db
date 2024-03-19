import { CircularProgress } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const AddStore = () => {
  const [storeName, setStoreName] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<{
    email: string;
    access_token: string;
    expiry: number;
  } | null>(null);

  const router = useRouter()

  useEffect(() => {
    // Retrieve userData from localStorage
    const userDataString = localStorage.getItem("User");
    if (userDataString) {
      const userDataObj = JSON.parse(userDataString);
      setUserData(userDataObj);
    }
  }, []);

  function handleCreateButtonClick() {

    setLoading(true)

    if (!userData) {
      const userDataString = localStorage.getItem("User");
      if (userDataString) {
        const userDataObj = JSON.parse(userDataString);
        setUserData(userDataObj);
      }
    }

    axios.post(
      "https://ts-api-for-ecomm-product.onrender.com/store",
      { name: storeName },
      {
        headers: {
          Authorization: `Bearer ${userData?.access_token}`,
        },
      }
    ).then((res)=>{
        console.log(res)
        if(res.data.id){
            const now = new Date();

          const storeDetails = {
            storeID: res.data.id,
            storeName: storeName,
            expiry: now.getTime() + 24 * 60 * 60 * 1000,
          };

          localStorage.setItem("storeDetails", JSON.stringify(storeDetails));
          setLoading(false)
          router.push("/");
        }
    }).catch((err)=>{
        console.log(err)
        setLoading(false)
    })
  }

  return (
    <div className="bg-white py-[30px] px-[20px] rounded-[20px] text-black flex flex-col gap-[20px]">
      <h2 className="text-[26px] font-[600] text-green-400">
        Log in successful
      </h2>

      <p className="text-[20px] font-[500]">
        Please create a store to continue
      </p>

      <input
        type="text"
        placeholder="Enter your store name"
        className="outline-none border border-black rounded-lg w-[320px] p-[10px]"
        onChange={(e) => {
          setStoreName(e.target.value);
        }}
      />

      <button
        name="Create store button"
        className={`${
          storeName.length === 0 ? "bg-gray-400" : "bg-green-400"
        } text-white px-[30px] py-[10px] w-fit mx-auto rounded-lg`}
        onClick={() => {
          handleCreateButtonClick();
        }}
        disabled={storeName.length === 0 ? true : false}
      >
        {loading ? <CircularProgress /> : "Create"}
      </button>
    </div>
  );
};

export default AddStore;
