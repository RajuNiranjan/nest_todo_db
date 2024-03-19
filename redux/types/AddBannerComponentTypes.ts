export interface AddBannerComponentShowState {
    addBannerCompanentShowState: boolean
}

export enum AddBannerComponentTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: AddBannerComponentTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: AddBannerComponentTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type AddBannerComponentAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction;