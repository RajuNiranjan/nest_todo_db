import React from 'react'
import StatusDetails from './StatusDetails'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const OrderStatusContainer = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div
    className='w-full'>

        <p
        className={`text-[36px] font-[600] ${isDarkModeEnableState && 'text-white'}`}>
            Order Status
        </p>

        <StatusDetails />

    </div>
  )
}

export default OrderStatusContainer