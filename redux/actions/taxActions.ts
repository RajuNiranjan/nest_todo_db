// actions.js
export const setTaxFormData = (formData: any) => ({
  type: "SET_TAX_FORM_DATA",
  payload: formData,
});

// reducer.js
const initialState = {
  taxFormData: {},
};

const taxReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_TAX_FORM_DATA":
      return {
        ...state,
        taxFormData: action.payload,
      };
    default:
      return state;
  }
};

export default taxReducer;
