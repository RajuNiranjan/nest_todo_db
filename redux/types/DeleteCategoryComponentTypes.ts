export interface DeleteCategoryComponentShowState{
    deleteCategoryComponentShowState: boolean;
    deleteCategoryComponentID: string;
}

export enum DeleteCategoryComponentTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: DeleteCategoryComponentTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: DeleteCategoryComponentTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type DeleteCategoryComponentAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction;