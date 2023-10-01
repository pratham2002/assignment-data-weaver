import axios from "axios";

// Action Types
export const SEARCH_BOOKS_REQUEST = "SEARCH_BOOKS_REQUEST";
export const SEARCH_BOOKS_SUCCESS = "SEARCH_BOOKS_SUCCESS";
export const SEARCH_BOOKS_FAILURE = "SEARCH_BOOKS_FAILURE";

// Action Creators
export const searchBooksRequest = () => ({
  type: SEARCH_BOOKS_REQUEST,
});

export const searchBooksSuccess = (results) => ({
  type: SEARCH_BOOKS_SUCCESS,
  payload: results,
});

export const searchBooksFailure = (error) => ({
  type: SEARCH_BOOKS_FAILURE,
  payload: error,
});

export const getBooks = (params) => (dispatch) => {
  try {
    dispatch(searchBooksRequest());
    axios
      .get("http://68.178.162.203:8080/application-test-v1.1/books")
      .then((res) => {
        console.log({ res });
        dispatch(searchBooksSuccess(res?.data?.data));
      })
      .catch((err) => {
        dispatch(searchBooksFailure(err.message));
      });
  } catch (error) {
    console.log(error);
  }
};
