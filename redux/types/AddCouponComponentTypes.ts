export interface AddCouponComponentShowState {
    addCouponComponentShowState: boolean
}

export enum AddCouponComponentTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: AddCouponComponentTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: AddCouponComponentTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type AddCouponComponentAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction