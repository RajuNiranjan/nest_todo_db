// imageAction.ts

export const SET_IMAGE_INFO = "SET_IMAGE_INFO";

export const setImageInfo = (
  selectedImageName: string,
  selectedImageSize: string,
  selectImage: File | null
) => ({
  type: SET_IMAGE_INFO,
  payload: {
    selectedImageName,
    selectedImageSize,
    selectImage,
  },
});

interface ImageState {
  selectedImageName: string;
  selectedImageSize: string;
  selectImage: File | null;
}

const initialState: ImageState = {
  selectedImageName: "",
  selectedImageSize: "",
  selectImage: null,
};

const imageReducer = (state = initialState, action: any): ImageState => {
  switch (action.type) {
    case SET_IMAGE_INFO:
      return {
        ...state,
        selectedImageName: action.payload.selectedImageName,
        selectedImageSize: action.payload.selectedImageSize,
        selectImage: action.payload.selectImage,
      };
    default:
      return state;
  }
};

export default imageReducer;
