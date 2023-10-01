import { combineReducers } from "redux";
import addBookReducer from "./addBookReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  addBook: addBookReducer,
});

export default rootReducer;
