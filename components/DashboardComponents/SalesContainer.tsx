import React from 'react'
import SalesRightContainer from './SalesRightContainer'
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const SalesStatistics = dynamic(
  () => import("@/components/DashboardComponents/SalesStatistics"),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full">
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
            <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
          </div>
        </div>
      </div>
    )
   }
);

const SalesContainer = () => {
  const { expandedSidebarShow } = useSelector(
    (state: RootState) => state.ExpandedSidebarShow
  );
  return (
    <div
    className={`mt-[30px] w-full flex gap-[32px] flex-col 1300px:flex-row ${expandedSidebarShow && 'flex-col 1300px:flex-col'}`}>

        <SalesStatistics />

        <SalesRightContainer />

    </div>
  )
}

export default SalesContainer