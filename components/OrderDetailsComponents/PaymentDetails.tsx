import React from 'react'
import UPIImage from './icons/upi.png'
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const PaymentDetails = () => {
    const { isDarkModeEnableState } = useSelector(
        (state: RootState) => state.IsDarkModeEnable
      );
  return (
    <div
    className={`w-full rounded-md drop-shadow-md ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} px-[24px] py-[32px] mt-[30px] flex flex-col gap-[30px]`}>
        <p className='text-[24px] font-[600]'>
            Payment Details
        </p>
        <div className='w-full grid grid-cols-1 1200px:grid-cols-3 gap-[20px]'>
            <div className='w-full flex flex-col gap-[20px]'>
                <div>
                    <p className='text-[12px]'>
                        Transaction ID
                    </p>
                    <p className='text-[24px] font-[600] text-[#196fe1]'>
                    1597412369
                    </p>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <p>
                        ID (Account_Number/UPI_ID)
                    </p>
                    <div className='p-[10px] w-[96%] 500px:w-[320px] rounded border border-[#71a7ef] overflow-hidden'>
                        <input 
                        type="text"
                        placeholder='UPI@SBI'
                        className='bg-transparent outline-none border-none w-full' />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col gap-[20px]'>
                <div>
                    <p className='text-[12px]'>
                        Amount
                    </p>
                    <p className='text-[24px] font-[600] text-[#196fe1]'>
                    ₹ 5,000
                    </p>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <p>
                        Bank name
                    </p>
                    <div className='p-[10px] w-[96%] 500px:w-[320px] rounded border border-[#71a7ef] overflow-hidden'>
                        <input 
                        type="text"
                        placeholder='UPI@SBI'
                        className='bg-transparent outline-none border-none w-full' />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col gap-[20px]'>
                <div>
                    <p className='text-[12px]'>
                        Payment Mode
                    </p>
                    <div className='text-[24px] font-[600] text-[#196fe1] flex items-center'>
                    <Image src={UPIImage} alt='UPI Image' width={60} height={30} className='w-[60px] h-[30px] object-cover' />Unified Payment Interface (UPI)
                    </div>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <p>
                        Payment Date
                    </p>
                    <div className='p-[10px] w-[96%] 500px:w-[320px] rounded border border-[#71a7ef] overflow-hidden'>
                        <input 
                        type="text"
                        placeholder='UPI@SBI'
                        className='bg-transparent outline-none border-none w-full' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentDetails