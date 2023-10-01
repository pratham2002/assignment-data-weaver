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

export const getBooks = (params) => async (dispatch) => {
  try {
    // console.log({ params });

    const url = `http://68.178.162.203:8080/application-test-v1.1/books?title=${params.title}&pageSize=${params.pageSize}&page=${params.page}`;

    dispatch(searchBooksRequest());

    const response = await axios.get(url);

    console.log({ data: response.data });

    dispatch(searchBooksSuccess(response?.data));
  } catch (error) {
    console.log(error);
    dispatch(searchBooksFailure(error.message));
  }
};
