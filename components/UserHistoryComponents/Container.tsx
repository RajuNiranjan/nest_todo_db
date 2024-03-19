import React from 'react'
import SearchContainer from './SearchContainer'
import UserHistoryDetails from './UserHistoryDetails'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Container = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div
    className='w-full flex flex-col gap-[30px]'>
      <p
        className={`text-[36px] font-[600] ${isDarkModeEnableState && 'text-white'}`}>
            User History
        </p>
        <SearchContainer />
        <UserHistoryDetails />
    </div>
  )
}

export default Container