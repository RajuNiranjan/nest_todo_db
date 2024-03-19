export interface EditCouponComponentShowState {
    editCouponComponentShowState: boolean
}

export enum EditCouponComponentTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: EditCouponComponentTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: EditCouponComponentTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type EditCouponComponentAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction