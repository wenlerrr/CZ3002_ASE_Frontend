import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser } from "../store/actions/auth";
import { removeError, addError } from "../store/actions/errors";
import { setLoading } from "../store/actions/load";
import { setAuthorizationToken, setCurrentUser } from "../store/actions/auth";
import jwtDecode from "jwt-decode";
import { apiCall } from "../services/api";
import Loading from "./Loading";
import Main from "./Main";
import Forum from "../components/Forum/Forum";
import WLForum from "../components/communityForum/forum";

class App extends Component {
  constructor(props) {
    super(props);
    if (localStorage.jwtToken) {
      var user = jwtDecode(localStorage.jwtToken);
      setAuthorizationToken(localStorage.jwtToken);

      apiCall("get", `/api/authentication`)
        .then(userReturned => {
          // prevent someone from manually tampering with the key of jwtToken in localStorage
          try {
            this.props.store.dispatch(removeError());
            this.props.store.dispatch(setCurrentUser(userReturned));
          } catch (e) {
            this.props.store.dispatch(setCurrentUser({}));
          }
          this.props.store.dispatch(setLoading(false));
        })
        .catch(error => {
          console.log(error);
          setAuthorizationToken(null);
          this.props.store.dispatch(addError(error.data.message));
          this.props.store.dispatch(setLoading(false));
        });
    } else {
      this.props.store.dispatch(setLoading(false));
    }
  }

  render() {
    const {
      authUser,
      errors,
      removeError,
      currentUser,
      loading,
      setLoading
    } = this.props;
    return (
      <div>
        {!currentUser.isAuthenticated && loading.loading ? (
          <Loading />
        ) : (
          <div>
            <Main />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
    loading: state.loading
  };
}

export default connect(
  mapStateToProps,
  { authUser, removeError, setLoading }
)(App);
