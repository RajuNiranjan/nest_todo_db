export interface AddUserComponentShowState {
    addUserComponentShowState: boolean
}

export enum AddUserComponentTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: AddUserComponentTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: AddUserComponentTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type AddUserComponentAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction;