import EditProfileComponent from '@/components/Navbar/EditProfileComponent'
import Navbar from '@/components/Navbar/Navbar'
import ReviewListContainer from '@/components/ReviewListComponents/ReviewListContainer'
import ExpandedSidebar from '@/components/Sidebar/ExpandedSidebar'
import Sidebar from '@/components/Sidebar/Sidebar'
import { RootState } from '@/redux/store'
import React from 'react'
import { useSelector } from 'react-redux'

const ReviewListPage = () => {
    const { expandedSidebarShow } = useSelector(
        (state: RootState) => state.ExpandedSidebarShow
      );
      const { isDarkModeEnableState } = useSelector(
        (state: RootState) => state.IsDarkModeEnable
      );
  return (
    <div className={`w-full min-h-screen transition-all duration-500 ${isDarkModeEnableState ? 'bg-[#333333]' : 'bg-[#ebeef0]'}`}>
      <Navbar />
      <EditProfileComponent />
      <Sidebar />
      <ExpandedSidebar />

      <div className={`w-full pt-[100px] transition-all duration-500 ${expandedSidebarShow ? 'pl-[240px]' : 'pl-[20px] 700px:pl-[90px]'} pr-[20px] pb-[20px]`}>
        <ReviewListContainer />
      </div>
      </div>
  )
}

export default ReviewListPage