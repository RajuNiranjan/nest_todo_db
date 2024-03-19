export interface DeleteBannerComponentShowState{
    deleteBannerComponentShowState: boolean;
    deleteBannerComponentID: string;
}

export enum DeleteBannerComponentTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: DeleteBannerComponentTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: DeleteBannerComponentTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type DeleteBannerComponentAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction;