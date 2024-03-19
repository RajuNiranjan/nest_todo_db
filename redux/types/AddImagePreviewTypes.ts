export interface AddImagePreviewShowState {
    addImagePreviewShowState: boolean;
    imageURl: string;
}

export enum AddImagePreviewTypes {
    ENABLE_EXPANDED_SIDEBAR_SHOW = "ENABLE_EXPANDED_SIDEBAR_SHOW",
    DISABLE_EXPANDED_SIDEBAR_SHOW = "DISABLE_EXPANDED_SIDEBAR_SHOW",
}

interface EnableExpandedSidebarShowAction {
    type: AddImagePreviewTypes.ENABLE_EXPANDED_SIDEBAR_SHOW;
}

interface DisableExpandedSidebarShowAction {
    type: AddImagePreviewTypes.DISABLE_EXPANDED_SIDEBAR_SHOW;
}

export type AddImagePreviewAction = EnableExpandedSidebarShowAction | DisableExpandedSidebarShowAction