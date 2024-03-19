import React from "react";
import AllCategoryListItems from "./AllCategoryListItems";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Backdrop } from "@mui/material";
import AddCategoryList from "./AddCategoryList";
import { enableAddCategoryListShow } from "@/redux/AddCategoryListShow";
import UpdateCategoryList from "./UpdateCategoryList";
import DeleteCategoryList from "./DeleteCategoryList";

const CategoryLists = () => {
  const { addCategoryListShowState } = useSelector(
    (state: RootState) => state.AddCategoryListShow
  );
  const { updateCategoryComponentShowState } = useSelector(
    (state: RootState) => state.UpdateCategoryComponentShow
  );
  const { deleteCategoryComponentShowState } = useSelector(
    (state: RootState) => state.DeleteCategoryComponentShow
  );
  const { isDarkModeEnableState } = useSelector(
    (state: RootState) => state.IsDarkModeEnable
  );

  const dispatch = useDispatch()

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between gap-[20px] flex-wrap">
        <p className={`text-[36px] font-[600] ${isDarkModeEnableState && 'text-white'}`}>Category List</p>

        <button
          name="Add new category button"
          className="px-[24px] py-[8px] text-white rounded-full bg-[#196fe1] text-[16px] font-[600]"
          onClick={()=>{ dispatch(enableAddCategoryListShow())}}
        >
          Add New Category
        </button>
      </div>

      <AllCategoryListItems />

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={addCategoryListShowState || updateCategoryComponentShowState || deleteCategoryComponentShowState}
      >
        {addCategoryListShowState && <AddCategoryList />}
        {updateCategoryComponentShowState && <UpdateCategoryList />}
        {deleteCategoryComponentShowState && <DeleteCategoryList />}
      </Backdrop>
    </div>
  );
};

export default CategoryLists;
