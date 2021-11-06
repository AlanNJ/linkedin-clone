import { SET_LOADING } from "../actions/actionTypes";
const initialState = {
  loading: false,
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
export default articleReducer;
