export interface AddCategoryListShowState {
    addCategoryListShowState: boolean
}

export enum AddCategoryListTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: AddCategoryListTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: AddCategoryListTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type AddCategoryListAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction;