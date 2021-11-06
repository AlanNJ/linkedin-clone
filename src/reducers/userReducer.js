import { SET_USER, SET_LOADING, SET_ARTICLES } from "../actions/actionTypes";

const INITIAL_STATE = {
  user: null,
  loading: false,
  articles: [],
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
