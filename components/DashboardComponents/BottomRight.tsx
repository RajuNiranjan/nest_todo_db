import { RootState } from '@/redux/store';
import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

const BottomRight = () => {
    const { expandedSidebarShow } = useSelector(
        (state: RootState) => state.ExpandedSidebarShow
      );
      const { isDarkModeEnableState } = useSelector(
        (state: RootState) => state.IsDarkModeEnable
      );
  return (
    <div
    className={`transition-all duration-500 ${expandedSidebarShow ? 'w-full' : 'w-full 1300px:w-[500px]'} ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} drop-shadow-md rounded-[16px] h-full px-[16px] py-[16px] flex flex-col gap-[16px]`}>
        
        <p
        className='w-full px-[16px] py-[16px] rounded-[8px] bg-[#196fe1] text-[18px] font-semibold text-white'>
New Users
        </p>

        <div
        className='w-full flex flex-col gap-[16px] px-[20px]'>

            <div
            className='w-full flex items-center justify-between'>

                <div
                className='flex items-center gap-[20px]'>

                    <div
                    className='w-[40px] h-[40px] rounded-full flex items-center justify-center'>
<Avatar />
                    </div>

                    <div
                    className='h-[40px] flex flex-col justify-between'>

                        <p
                        className='text-[16px] font-semibold'>
                            New User name
                        </p>

                        <p
                        className='text-[14px]'>
                            Email/Mobile
                        </p>

                    </div>

                </div>

                <p
                className='text-[16px] font-semibold text-[#196fe1]'>
                    User 6B5A
                </p>

            </div>
            <div
            className='w-full flex items-center justify-between'>

                <div
                className='flex items-center gap-[20px]'>

                    <div
                    className='w-[40px] h-[40px] rounded-full flex items-center justify-center'>
<Avatar />
                    </div>

                    <div
                    className='h-[40px] flex flex-col justify-between'>

                        <p
                        className='text-[16px] font-semibold'>
                            New User name
                        </p>

                        <p
                        className='text-[14px]'>
                            Email/Mobile
                        </p>

                    </div>

                </div>

                <p
                className='text-[16px] font-semibold text-[#196fe1]'>
                    User 6B5A
                </p>

            </div>
            <div
            className='w-full flex items-center justify-between'>

                <div
                className='flex items-center gap-[20px]'>

                    <div
                    className='w-[40px] h-[40px] rounded-full flex items-center justify-center'>
<Avatar />
                    </div>

                    <div
                    className='h-[40px] flex flex-col justify-between'>

                        <p
                        className='text-[16px] font-semibold'>
                            New User name
                        </p>

                        <p
                        className='text-[14px]'>
                            Email/Mobile
                        </p>

                    </div>

                </div>

                <p
                className='text-[16px] font-semibold text-[#196fe1]'>
                    User 6B5A
                </p>

            </div>
            <div
            className='w-full flex items-center justify-between'>

                <div
                className='flex items-center gap-[20px]'>

                    <div
                    className='w-[40px] h-[40px] rounded-full flex items-center justify-center'>
<Avatar />
                    </div>

                    <div
                    className='h-[40px] flex flex-col justify-between'>

                        <p
                        className='text-[16px] font-semibold'>
                            New User name
                        </p>

                        <p
                        className='text-[14px]'>
                            Email/Mobile
                        </p>

                    </div>

                </div>

                <p
                className='text-[16px] font-semibold text-[#196fe1]'>
                    User 6B5A
                </p>

            </div>
            <div
            className='w-full flex items-center justify-between'>

                <div
                className='flex items-center gap-[20px]'>

                    <div
                    className='w-[40px] h-[40px] rounded-full flex items-center justify-center'>
<Avatar />
                    </div>

                    <div
                    className='h-[40px] flex flex-col justify-between'>

                        <p
                        className='text-[16px] font-semibold'>
                            New User name
                        </p>

                        <p
                        className='text-[14px]'>
                            Email/Mobile
                        </p>

                    </div>

                </div>

                <p
                className='text-[16px] font-semibold text-[#196fe1]'>
                    User 6B5A
                </p>

            </div>
            <div
            className='w-full flex items-center justify-between'>

                <div
                className='flex items-center gap-[20px]'>

                    <div
                    className='w-[40px] h-[40px] rounded-full flex items-center justify-center'>
<Avatar />
                    </div>

                    <div
                    className='h-[40px] flex flex-col justify-between'>

                        <p
                        className='text-[16px] font-semibold'>
                            New User name
                        </p>

                        <p
                        className='text-[14px]'>
                            Email/Mobile
                        </p>

                    </div>

                </div>

                <p
                className='text-[16px] font-semibold text-[#196fe1]'>
                    User 6B5A
                </p>

            </div>

        </div>

    </div>
  )
}

export default BottomRight