import axios from "axios";

// Action Types
export const ADD_BOOK_REQUEST = "ADD_BOOK_REQUEST";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const ADD_BOOK_FAILURE = "ADD_BOOK_FAILURE";

// Action Creators
export const addBookRequest = () => ({
  type: ADD_BOOK_REQUEST,
});

export const addBookSuccess = () => ({
  type: ADD_BOOK_SUCCESS,
});

export const addBookFailure = (error) => ({
  type: ADD_BOOK_FAILURE,
  payload: error,
});

export const addData = (data) => async (dispatch) => {
  try {
    dispatch(addBookRequest());
    const url = "http://68.178.162.203:8080/application-test-v1.1/books";
    const config = {
      method: "post",
      url,
      data: data,
    };

    axios
      .request(config)
      .then((res) => {
        dispatch(addBookSuccess(res));
      })
      .catch((err) => {
        dispatch(addBookFailure(err));
      });
  } catch (err) {
    console.log({ err });
  }
};
