import React from 'react'
import OrderDetails from './OrderDetails'
import PaymentDetails from './PaymentDetails'
import ItemsComponent from './ItemsComponent'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const OrderDetailsContainer = () => {
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );
  return (
    <div
    className='w-full'>

        <p className={`text-[36px] font-[600] ${isDarkModeEnableState && 'text-white'}`}>
            Order Details
        </p>

        <OrderDetails />
        <PaymentDetails />
        <ItemsComponent />

    </div>
  )
}

export default OrderDetailsContainer