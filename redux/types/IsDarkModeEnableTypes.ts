export interface IsDarkModeEnableState {
    isDarkModeEnableState: string | boolean
}

export enum IsDarkModeEnableTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: IsDarkModeEnableTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: IsDarkModeEnableTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type IsDarkModeEnableAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction