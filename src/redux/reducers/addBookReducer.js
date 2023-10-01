import {
  ADD_BOOK_FAILURE,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
} from "../actions/addBookActions";

const initialState = {
  loading: false,
  error: null,
};

const addBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ADD_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default addBookReducer;
