import {
  SEARCH_BOOKS_FAILURE,
  SEARCH_BOOKS_REQUEST,
  SEARCH_BOOKS_SUCCESS,
} from "../actions/searchActions";

const initialState = {
  loading: false,
  results: [],
  error: null,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload,
      };
    case SEARCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
