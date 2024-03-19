// imageAction.ts

export const SET_IMAGE_INFO = "SET_IMAGE_INFO";
// export const REMOVE_IMAGE_INFO = "REMOVE_IMAGE_INFO";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const removeImage = () => ({
  type: REMOVE_IMAGE,
});

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

// export const removeImageInfo = () => ({
//   type: REMOVE_IMAGE_INFO,
// });

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
    case REMOVE_IMAGE:
      return {
        ...state,
        selectImage: null,
        selectedImageName: "",
        selectedImageSize: "",
      };
    // case REMOVE_IMAGE_INFO:
    //   return {
    //     ...state,
    //     selectedImageName: "",
    //     selectedImageSize: "",
    //     selectImage: null,
    //   };
    default:
      return state;
  }
};

export default imageReducer;
