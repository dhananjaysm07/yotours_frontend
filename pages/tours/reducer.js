import { actionTypes } from "./actionType";
export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_START_TIME:
      return { ...state, startTime: action.payload };
    case actionTypes.SET_END_TIME:
      return { ...state, endTime: action.payload };
    case actionTypes.SET_PRICE_MAX:
      return { ...state, priceMax: action.payload };
    case actionTypes.SET_LOCATION:
      return { ...state, location: action.payload };
    case actionTypes.SET_PRICE_MIN:
      return { ...state, priceMin: action.payload };
    case actionTypes.SET_TAG_NAME:
      return { ...state, tagName: action.payload };
    default:
      return state;
  }
};
