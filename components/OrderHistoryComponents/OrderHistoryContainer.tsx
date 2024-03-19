import React from 'react'
import OrderHistoryLists from './OrderHistoryLists'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const OrderHistoryContainer = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div
    className='w-full'>

        <p
        className={`text-[36px] font-[600] ${isDarkModeEnableState && 'text-white'}`}>
            Order History
        </p>

        <OrderHistoryLists />

    </div>
  )
}

export default OrderHistoryContainer