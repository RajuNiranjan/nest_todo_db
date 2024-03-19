import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from 'react-redux';
import { disableAddUserComponentShow } from '@/redux/AddUserComponentShow';
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { RootState } from '@/redux/store';

const AddUser = () => {

  const [activeSubscribeComp, setActiveSubscribeCom] = useState('Subscribe')
  const [isSubscribeSelect, setIsSubscribeSelect] = useState(false)
  const [visibilityOn, setVisibilityOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setPasswordValid] = useState(false);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [toggleButtonActive, setToggleButtonActive] = useState(true);

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

  useEffect(() => {
    if (password.length > 0) {
      setPasswordValid(checkPassowrdValidity(password));
    }
    if (email.length > 0) {
      setValidEmail(isValidEmail(email));
    }
  }, [password, email]);

  const dispatch = useDispatch()

  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  return (
    <div
    className={`h-[96vh] rounded-[16px] p-[32px] drop-shadow-sm ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white text-black'} flex flex-col gap-[30px] relative overflow-auto 500px:w-fit`}
    style={{
      scrollbarWidth: 'none'
    }}>

      <div
      className='absolute top-[16px] right-[16px] cursor-pointer'
      onClick={()=>{dispatch(disableAddUserComponentShow())}}>
        <CloseIcon />
      </div>

        <p
        className='text-[18px] font-[600]'>
            Add new users
        </p>

        <div
        className='flex flex-col gap-[24px]'>

          <div
          className='flex flex-col gap-[8px]'>
            <p
            className='text-[16px]'>
              Role
            </p>
            <div
            className='w-[90%] 500px:w-[388px] cursor-pointer px-[10px] rounded-[4px] border border-[#71a7ef] relative text-[16px]'>
              <select name="" id="" className='w-full py-[10px] outline-none border-none bg-transparent'>
                <option value="" className='text-black'>Subscribed</option>
                <option value="" className='text-black'>Unsubscribed</option>
              </select>
            </div>
          </div>

          <div
          className='flex gap-[20px] flex-col 900px:flex-row'>

            <div
            className='flex flex-col gap-[8px] text-[16px]'>
              <p>
                Username(Required)
              </p>
              <div
              className='w-[90%] 500px:w-[388px] p-[10px] rounded-[4px] border border-[#71a7ef]'>
                <input 
                type="text"
                placeholder='#123456'
                className='w-full bg-transparent outline-none border-none' />
              </div>
            </div>

            <div
            className='flex flex-col gap-[8px] text-[16px]'>
              <p>
                Email(Required)
              </p>
              <div
              className='w-[90%] 500px:w-[388px] p-[10px] rounded-[4px] border border-[#71a7ef]'>
                <input 
                type="text"
                placeholder='abc@gmail.com'
                className='w-full bg-transparent outline-none border-none' />
              </div>
            </div>

          </div>

          <div
          className='flex gap-[20px] flex-col 900px:flex-row'>

            <div
            className='flex flex-col gap-[8px] text-[16px]'>
              <p>
                First name
              </p>
              <div
              className='w-[90%] 500px:w-[388px] p-[10px] rounded-[4px] border border-[#71a7ef]'>
                <input 
                type="text"
                placeholder='Enter your first name'
                className='w-full bg-transparent outline-none border-none' />
              </div>
            </div>

            <div
            className='flex flex-col gap-[8px] text-[16px]'>
              <p>
                Last name
              </p>
              <div
              className='w-[90%] 500px:w-[388px] p-[10px] rounded-[4px] border border-[#71a7ef]'>
                <input 
                type="text"
                placeholder='Enter your last name'
                className='w-full bg-transparent outline-none border-none' />
              </div>
            </div>

          </div>

          <div
          className='flex gap-[20px] flex-col 900px:flex-row'>

            <div className="flex flex-col gap-[8px]">
                <p className="text-[16px]">
                  Password
                </p>

                <div
                  className={`w-[90%] 500px:w-[388px] border ${
                    password.length === 0
                      ? "border-[#71a7ef]"
                      : validPassword
                      ? "border-[#71a7ef]"
                      : "border-red-600"
                  } p-[10px] rounded flex items-center justify-between`}
                >
                  <input
                    type={visibilityOn ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`outline-none border-none ${isDarkModeEnableState ? 'text-white' : 'text-black 900px:text-[#2B2B2B]'} text-[16px] w-full bg-transparent`}
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
                    className={`text-[12px] leading-[20.8px] ${password.length > 0 ? "opacity-100 flex" : "opacity-0 hidden"} flex-col`}
                  >
                    <p className={`${password.length>7 ? 'text-green-600': 'text-red-600'}`}>Minimum length 8</p>
                    <p className={`${containsSpecialCharacter(password) ? 'text-green-600': 'text-red-600'}`}>Password should contains a special character</p>
                    <p className={`${containsCapitalLetter(password) ? 'text-green-600': 'text-red-600'}`}>Password Should Contains a capital letter</p>
                    <p className={`${containsSmallLetter(password) ? 'text-green-600': 'text-red-600'}`}>Password Should Contains a small letter</p>
                  </div>
                </div>
              </div>

              <button
              name='Generate passwor button'
              className='p-[10px] border-[#196fe1] border-2 rounded text-[#196fe1] text-[16px] h-fit mt-0 900px:mt-[32px] w-fit'>
                Generate Password
              </button>

          </div>

          <div
          className='flex gap-[34px] flex-col 900px:flex-row'>
            <p
            className='text-[18px] font-[500]'>
              Send User Notification
            </p>
            <div
            className='flex gap-[8px] flex-col 500px:flex-row'>
              <button
              name='Toggle button'
              className={`w-[48px] h-[24px] relative transition-all duration-500 rounded-full ${toggleButtonActive ? 'bg-[#30d158]' : 'bg-black'}`}>
                <div
                className={`w-[16px] h-[16px] absolute -translate-y-1/2 top-1/2 rounded-full transition-all duration-500 ${toggleButtonActive ? 'right-1 bg-white' : 'left-1 bg-white'}`} 
                onClick={()=>{setToggleButtonActive(prev=>!prev)}}/>
              </button>
              <p
              className='text-[16px]'>
              Send the new user an email about their account.
              </p>
            </div>
          </div>

        </div>

        <div
        className='flex items-center gap-[24px] text-white text-[16px] flex-wrap'>

          <button
          name='Save draft button'
          className='px-[24px] py-[10px] rounded-full bg-[#b3b3b3]'>
            Save draft
          </button>
          <button
          name='Add product button'
          className='px-[24px] py-[10px] rounded-full bg-[#196fe1]'>
            Add product
          </button>

        </div>

    </div>
  )
}

export default AddUser