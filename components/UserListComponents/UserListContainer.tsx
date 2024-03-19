import React from 'react'
import SearchContainer from './SearchContainer'
import AllUserLists from './AllUserLists'
import { Backdrop } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import AddUser from './AddUser'

const UserListContainer = () => {
    const { addUserComponentShowState } = useSelector(
        (state: RootState) => state.AddUserComponentShow
      );
      const { isDarkModeEnableState } = useSelector(
        (state: RootState) => state.IsDarkModeEnable
      );
  return (
    <div
    className='w-full flex flex-col gap-[30px]'>

        <p
        className={`text-[36px] font-[600] ${isDarkModeEnableState && 'text-white'}`}>
            User lists
        </p>

        <SearchContainer />

        <AllUserLists />

        <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addUserComponentShowState}
      >
        <AddUser />
      </Backdrop>

    </div>
  )
}

export default UserListContainer