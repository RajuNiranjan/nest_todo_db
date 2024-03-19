import React from 'react'
import ReviewDetails from './ReviewDetails'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const ReviewDetailsContainer = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div
    className='w-full flex flex-col gap-[30px]'>
        <p
        className={`text-[36px] font-[600] ${isDarkModeEnableState && 'text-white'}`}>
            Reviews Details
        </p>
        <ReviewDetails />
    </div>
  )
}

export default ReviewDetailsContainer