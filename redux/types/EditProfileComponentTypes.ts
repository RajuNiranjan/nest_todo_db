export interface EditProfileComponentShowState {
    editProfileCompanentShowState: boolean
}

export enum EditProfileComponentTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: EditProfileComponentTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: EditProfileComponentTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type EditProfileComponentAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction;