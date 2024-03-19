export interface UpdateBannerComponentShowState {
  updateBannerComponentShowState: boolean;
  updateBannerComponentID: string;
  updateBannerComponentLabel: string;
  updateBannerComponentImageUrl: string;
  updateBannerComponentContent: string;
  updateBannerComponentBtnUrl: string;
}

export enum UpdateBannerComponentTypes {
  ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
  DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
  type: UpdateBannerComponentTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
  type: UpdateBannerComponentTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type UpdateBannerComponentAction =
  | EnableExpandedSidebarShowAction
  | DisableExpandedSidebarShowAction;
