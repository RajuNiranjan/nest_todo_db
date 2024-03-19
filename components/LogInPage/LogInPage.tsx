import Image from "next/image";
import React, { useEffect, useState } from "react";
import OldMan from "@/components/assets/oldman.png";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Backdrop, CircularProgress } from "@mui/material";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CryptoJS from "crypto-js";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import AddStore from "./AddStore";
import { enableAddStoreComponentShow } from "@/redux/AddStoreComponentShow";

export default function Home() {
  const [visibilityOn, setVisibilityOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setPasswordValid] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch()

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

  function checkPassowrdValidity(str: string): boolean {
    // Regular expressions for special character, capital letter, and small letter
    var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var capitalLetterRegex = /[A-Z]+/;
    var smallLetterRegex = /[a-z]+/;

    // Check if the string passes all conditions
    if (
      specialCharRegex.test(str) &&
      capitalLetterRegex.test(str) &&
      smallLetterRegex.test(str) &&
      str.length > 7
    ) {
      return true; // String contains a special character, a capital letter, and a small letter
    } else {
      return false; // String does not meet all conditions
    }
  }

  function containsSpecialCharacter(str: string): boolean {
    var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return specialCharRegex.test(str);
  }

  // Function to check if the string contains a capital letter
  function containsCapitalLetter(str: string): boolean {
    var capitalLetterRegex = /[A-Z]+/;
    return capitalLetterRegex.test(str);
  }

  // Function to check if the string contains a lowercase letter
  function containsSmallLetter(str: string): boolean {
    var smallLetterRegex = /[a-z]+/;
    return smallLetterRegex.test(str);
  }

  function isValidEmail(email: string): boolean {
    // Regular expression for validating email addresses
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    return emailRegex.test(email);
  }

  function handleStoreDetails(access_token: string) {
    axios
      .get("https://ts-api-for-ecomm-product.onrender.com/store", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        if (res.data.id) {
          const now = new Date();

          const storeDetails = {
            storeID: res.data.id,
            storeName: res.data.name,
            storeOwnerId: res.data.userId,
            expiry: now.getTime() + 24 * 60 * 60 * 1000,
          };

          localStorage.setItem("storeDetails", JSON.stringify(storeDetails));
          router.push("/");
        }
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        localStorage.removeItem("storeDetails");
        if(err.response.data.message && err.response.data.message === 'Store not found'){
          dispatch(enableAddStoreComponentShow())
        }
      });
  }

  useEffect(() => {
    if (password.length > 0) {
      setPasswordValid(checkPassowrdValidity(password));
    }
    if (email.length > 0) {
      setValidEmail(isValidEmail(email));
    }
  }, [password, email]);

  function handleValidation(e: any) {
    setLoading(true);

    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      "m4AfXfQ&1brl3LjQFYO"
    ).toString();

    axios
      .post("https://ts-api-for-ecomm-product.onrender.com/auth/login", {
        email,
        password: encryptedPassword,
        authType: "EMAIL",
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.access_token) {
          toast.success("Log in successful. Welcome!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          const now = new Date();

          const userData = {
            email: email,
            access_token: res.data.access_token,
            expiry: now.getTime() + 24 * 60 * 60 * 1000,
          };

          localStorage.setItem("User", JSON.stringify(userData));

          handleStoreDetails(userData.access_token);

          setPassword("");
          setEmail("");
          setLoading(false);
        }
      })
      .catch((err) => {
        errorMessage("User not found");
        setPassword("");
        setEmail("");
        setLoading(false);
      });
  }

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  const { addStoreComponentShowState } = useSelector(
    (state: RootState) => state.AddStoreComponentShow
  );

  return (
    <div className="w-full h-fit 900px:h-screen flex items-center justify-center relative flex-col 900px:flex-row 900px:gap-0">
      <ToastContainer />
      <div className="w-full 900px:w-1/2 h-[40vh] 900px:h-full">
        <Image
          src={OldMan}
          alt="Old Man"
          className="w-full h-full object-cover"
          unoptimized={true}
        />
      </div>

      <div
        className={`w-full 900px:w-1/2 h-full flex items-center justify-center ${
          isDarkModeEnableState ? "bg-black text-white" : "bg-white"
        }`}
      >
        <div className="w-fit h-fit bg-transparent p-[20px] 900px:p-0 rounded-[20px]">
          <p className="text-[26px] md:text-[40px] leading-[34px] md:leading-[48px]">
            Welcome Back <br />
            to <span className="font-[600]">[Company Name]</span> <br />
            Log in to Your Account <br />
          </p>

          <div className="w-full px-[20px] box-border mt-[30px] flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[10px]">
              <p
                className={`text-[16px] leading-[20.8px] ${
                  isDarkModeEnableState ? "text-white" : "text-[#2B2B2B]"
                }`}
              >
                Email ID / Username
              </p>

              <input
                type="text"
                placeholder="Enter your active Email ID / Username"
                className={`w-full outline-none border border-[#333333] px-[16px] py-[6px] rounded ${
                  isDarkModeEnableState ? "text-white" : "text-[#2B2B2B]"
                } text-[14px] leading-[20.8px] bg-transparent`}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <p
                className={`text-[12px] ${
                  validEmail ? "text-green-600" : "text-red-600"
                } ${email.length > 0 ? "opacity-100" : "opacity-0"}`}
              >
                Email should be a valid email
              </p>
            </div>

            <div>
              <div className="flex flex-col gap-[10px]">
                <p
                  className={`text-[16px] leading-[20.8px] ${
                    isDarkModeEnableState ? "text-white" : "text-[#2B2B2B]"
                  }`}
                >
                  Password
                </p>

                <div
                  className={`w-full border ${
                    password.length === 0
                      ? "border-[#333333]"
                      : validPassword
                      ? "border-green-600"
                      : "border-red-600"
                  } px-[16px] py-[6px] rounded flex items-center justify-between`}
                >
                  <input
                    type={visibilityOn ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`outline-none border-none ${
                      isDarkModeEnableState ? "text-white" : "text-[#2B2B2B]"
                    } text-[14px] leading-[20.8px] bg-transparent`}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                  />
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setVisibilityOn((prev) => !prev);
                    }}
                  >
                    {visibilityOn ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </div>
                </div>
                <div className="w-full flex justify-between">
                  <div
                    className={`text-[12px] leading-[20.8px] ${
                      password.length > 0 ? "opacity-100" : "opacity-0"
                    } flex flex-col`}
                  >
                    <p
                      className={`${
                        password.length > 7 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      Minimum length 8
                    </p>
                    <p
                      className={`${
                        containsSpecialCharacter(password)
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      Password should contains a special character
                    </p>
                    <p
                      className={`${
                        containsCapitalLetter(password)
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      Password Should Contains a capital letter
                    </p>
                    <p
                      className={`${
                        containsSmallLetter(password)
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      Password Should Contains a small letter
                    </p>
                  </div>
                  <p className="text-[12px] leading-[20.8px] text-blue-600 underline cursor-pointer">
                    Forget password?
                  </p>
                </div>
              </div>
            </div>

            <button
              name="Log in"
              className={`w-full bg-blue-600 text-white py-[8px] rounded-[8px] text-[16px] font-[600] leading-[20.8px] flex items-center justify-center ${
                !validEmail || !validPassword
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={(e) => {
                handleValidation(e);
              }}
              disabled={!validEmail || !validPassword}
            >
              {loading ? <CircularProgress color="inherit" /> : <p>LOG IN</p>}
            </button>
          </div>
        </div>
      </div>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addStoreComponentShowState}
      >
        <AddStore />
      </Backdrop>
    </div>
  );
}
