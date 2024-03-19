// // attributeAction.ts

// export const updateAttributeFormData = (formData: Record<string, string>) => ({
//   type: "UPDATE_ATTRIBUTE_FORM_DATA",
//   payload: formData,
// });

// // attributeReducer.ts

// const initialState: Record<string, string> = {};

// const attributeReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case "UPDATE_ATTRIBUTE_FORM_DATA":
//       return {
//         ...state,
//         ...action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default attributeReducer;

// attributeSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const attributeSlice = createSlice({
//   name: "attributes",
//   initialState: {
//     attributeData: [],
//   },
//   reducers: {
//     setAttributeData: (state, action) => {
//       state.attributeData = action.payload;
//     },
//   },
// });

// export const { setAttributeData } = attributeSlice.actions;
// export default attributeSlice.reducer;

// attributeSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Attribute {
  name: string;
  values: string;
  description: string;
  id: string;
}

interface AttributeState {
  attributeData: Attribute[];
}

const initialState: AttributeState = {
  attributeData: [],
};

const attributeSlice = createSlice({
  name: "attributes",
  initialState,
  reducers: {
    setAttributeData: (state, action: PayloadAction<Attribute[]>) => {
      state.attributeData = action.payload;
    },
  },
});

export const { setAttributeData } = attributeSlice.actions;
export default attributeSlice.reducer;
