import React from 'react'
import SearchContainer from './SearchContainer'
import ReviewLists from './ReviewLists'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const ReviewListContainer = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div
    className='w-full flex flex-col gap-[30px]'>
        <p
        className={`text-[36px] font-[600] ${isDarkModeEnableState && 'text-white'}`}>
            Reviews List
        </p>
        <SearchContainer />
        <ReviewLists />
    </div>
  )
}

export default ReviewListContainer