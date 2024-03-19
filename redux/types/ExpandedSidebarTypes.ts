// In a separate file, typically named 'types.ts' or 'reduxTypes.ts'

// Define the type for your Redux state
export interface SidebarState {
    expandedSidebarShow: boolean;
}

// Define the types for your Redux actions
export enum SidebarActionTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: SidebarActionTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: SidebarActionTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type SidebarAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction;
