import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setLoading } from "../store/actions/load";
import Explore from "./subcontainers/Explore";
import Community from "./subcontainers/Community";
import Create from "./subcontainers/Create";
import Password from "./subcontainers/Password";
import SingleCommunityPage from "./subcontainers/SingleCommunityPage";

const Routes = props => {
    const { currentUser } = props;
    return (
        <Switch>
            <Route
                exact path="/"
                render={props => <Explore currentUser={currentUser} {...props} />}
            />
            <Route
                exact path="/community"
                render={props => <Community currentUser={currentUser} {...props} />}
            />
            <Route
                exact path="/create"
                render={props => <Create currentUser={currentUser} {...props} />}
            />
            <Route
                exact path="/changePassword"
                render={props => <Password currentUser={currentUser} {...props} />}
            />
            <Route
                exact path="/community/single"
                render={props => <SingleCommunityPage currentUser={currentUser} {...props} />}
            />
        </Switch>
    )
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors : state.errors,
        loading: state.loading
    };
}
  
export default withRouter(
    connect(mapStateToProps, {setLoading})(Routes)
);