import Image from 'next/image'
import React from 'react'
import IndiaFlagImage from './IndiaFlag.png'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const SalesRightBottomContainer = () => {
    const { expandedSidebarShow } = useSelector(
        (state: RootState) => state.ExpandedSidebarShow
      );
      const { isDarkModeEnableState } = useSelector(
        (state: RootState) => state.IsDarkModeEnable
      );
  return (
    <div
    className={`w-full ${expandedSidebarShow ? 'h-full' : 'h-1/2'} transition-all duration-500 ${isDarkModeEnableState ? 'bg-black text-white' : 'bg-white'} rounded-[16px] drop-shadow-md py-[16px] px-[20px] flex flex-col gap-[20px]`}>

        <div
        className='w-full flex items-center justify-between'>

            <p
            className='text-[24px] font-bold'>
                Top products
            </p>

            <p
            className='text-[12px]'>
                See all
            </p>

        </div>

        <div
        className='w-full flex flex-col gap-[8px]'>

            <div
            className='w-full flex items-center justify-between cursor-pointer'>

                <div
                className='h-[40px] flex gap-[10px] items-center'>

                    <Image
                    src={IndiaFlagImage}
                    alt='Indian flag'
                    width={41}
                    height={24}
                    className='w-[41px] h-[24px] object-cover' />

                    <div
                    className='h-[40px] flex flex-col justify-between'>

                        <p
                        className='text-[16px] font-semibold'>
                            Men&apos;s T shirt yellow
                        </p>

                        <p
                        className='text-[14px]'>
                            Men&apos;s accessories
                        </p>

                    </div>

                </div>

                <p
                className='text-[18px] font-bold'>
                ₹500
                </p>

            </div>
            <div
            className='w-full flex items-center justify-between cursor-pointer'>

                <div
                className='h-[40px] flex gap-[10px] items-center'>

                    <Image
                    src={IndiaFlagImage}
                    alt='Indian flag'
                    width={41}
                    height={24}
                    className='w-[41px] h-[24px] object-cover' />

                    <div
                    className='h-[40px] flex flex-col justify-between'>

                        <p
                        className='text-[16px] font-semibold'>
                            Men&apos;s T shirt yellow
                        </p>

                        <p
                        className='text-[14px]'>
                            Men&apos;s accessories
                        </p>

                    </div>

                </div>

                <p
                className='text-[18px] font-bold'>
                ₹500
                </p>

            </div>
            <div
            className='w-full flex items-center justify-between cursor-pointer'>

                <div
                className='h-[40px] flex gap-[10px] items-center'>

                    <Image
                    src={IndiaFlagImage}
                    alt='Indian flag'
                    width={41}
                    height={24}
                    className='w-[41px] h-[24px] object-cover' />

                    <div
                    className='h-[40px] flex flex-col justify-between'>

                        <p
                        className='text-[16px] font-semibold'>
                            Men&apos;s T shirt yellow
                        </p>

                        <p
                        className='text-[14px]'>
                            Men&apos;s accessories
                        </p>

                    </div>

                </div>

                <p
                className='text-[18px] font-bold'>
                ₹500
                </p>

            </div>
            {/* Repeat this block for other items */}
        </div>

    </div>
  )
}

export default SalesRightBottomContainer
