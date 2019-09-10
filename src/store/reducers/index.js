import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import loading from "./loading";

const rootReducer = combineReducers({
  currentUser,
  errors,
  loading
});

export default rootReducer;