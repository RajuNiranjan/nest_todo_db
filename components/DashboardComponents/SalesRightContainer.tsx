import React from 'react'
import SalesRightTopContainer from './SalesRightTopContainer'
import SalesRightBottomContainer from './SalesRightBottomContainer'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const SalesRightContainer = () => {
  const { expandedSidebarShow } = useSelector(
    (state: RootState) => state.ExpandedSidebarShow
  );
  return (
    <div
    className={`flex gap-[20px] ${expandedSidebarShow ? 'flex-row w-full h-[300px]' : 'flex-col 900px:flex-row 1300px:flex-col w-full 1300px:w-[500px] 1300px:h-[550px]'}`}>

        <SalesRightTopContainer />

        <SalesRightBottomContainer />

    </div>
  )
}

export default SalesRightContainer