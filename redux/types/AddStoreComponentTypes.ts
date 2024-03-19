export interface AddStoreComponentShowState {
    addStoreComponentShowState: boolean
}

export enum AddStoreComponentTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: AddStoreComponentTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: AddStoreComponentTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type AddStoreComponentAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction