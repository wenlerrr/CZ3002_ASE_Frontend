import { apiCall, setTokenHeader } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from "./errors";
import { errorMessages } from "../../errorMessages";

export function setCurrentUser(user) {
    return {
      type: SET_CURRENT_USER,
      user
    };
  }
  
export function setAuthorizationToken(token) {
    setTokenHeader(token);
}

export function logout() {
    return dispatch => {
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    };
}

export function authUser(type, userData) {
    return dispatch => {
      // wrap our thunk in a promise so we can wait for the API call
      return new Promise((resolve, reject) => {
        return apiCall("post", `/api/authentication/${type}`, userData)
          .then(({ token, ...data }) => {
            var user = {
              _id: data.data._id,
              email: data.data.email,
              username: data.data.username
            }
            localStorage.setItem("jwtToken", token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(user));
            dispatch(removeError());
            resolve(); // indicate that the API call succeeded
          })
          .catch(errCode => {
            dispatch(addError(errorMessages[errCode]))
            reject(); // indicate the API call failed
          });
      });
    };
  }