export interface UpdateCategoryComponentShowState{
    updateCategoryComponentShowState: boolean;
    updateCategoryComponentID: string;
}

export enum UpdateCategoryComponentTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: UpdateCategoryComponentTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: UpdateCategoryComponentTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type UpdateCategoryComponentAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction;