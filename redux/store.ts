// store.js

import { configureStore } from "@reduxjs/toolkit";
import expandedSidebarShowReducer from "./ExpandedSidebarShow";
import EditProfileComponentShow from "./EditProfileComponentShow";
import AddBannerComponentShow from "./AddBannerComponentShow";
import AddCategoryListShow from "./AddCategoryListShow";
import AddUserComponentShow from "./AddUserComponentShow";
import AddCouponComponentShow from "./AddCouponComponentShow";
import EditCouponComponentShow from "./EditCouponComponentShow";
import IsDarkModeEnable from "./IsDarkModeEnable";
import AddStoreComponentShow from "./AddStoreComponentShow";
import uploadCardReducer from "./imageAction";
import imageReducer from "./imageAction";
import taxReducer from "./actions/taxActions";
import AddImagePreviewShow from "./AddImagePreviewShow";
import UpdateCategoryComponentShow from "./UpdateCategoryComponentShow";
import DeleteCategoryComponentShow from "./DeleteCategoryComponentShow";
import DeleteBannerComponentShow from "./DeleteBannerComponentShow";
import UpdateBannerComponentShow from "./UpdateBannerComponentShow";
import AttributeReducer from "./attributeActions";

export const store = configureStore({
  reducer: {
    ExpandedSidebarShow: expandedSidebarShowReducer,
    EditProfileComponentShow: EditProfileComponentShow,
    AddBannerComponentShow: AddBannerComponentShow,
    AddCategoryListShow: AddCategoryListShow,
    AddUserComponentShow: AddUserComponentShow,
    AddCouponComponentShow: AddCouponComponentShow,
    EditCouponComponentShow: EditCouponComponentShow,
    IsDarkModeEnable: IsDarkModeEnable,
    uploadCard: uploadCardReducer,
    image: imageReducer,
    AddStoreComponentShow: AddStoreComponentShow,
    images: imageReducer,
    AddImagePreviewShow: AddImagePreviewShow,
    UpdateCategoryComponentShow: UpdateCategoryComponentShow,
    DeleteCategoryComponentShow: DeleteCategoryComponentShow,
    DeleteBannerComponentShow: DeleteBannerComponentShow,
    UpdateBannerComponentShow: UpdateBannerComponentShow,
    tax: taxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
