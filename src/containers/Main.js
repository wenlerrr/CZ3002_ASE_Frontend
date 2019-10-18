import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Routes from "./Routes";
import { authUser } from "../store/actions/auth";
import { removeError, addError } from "../store/actions/errors";
import { setLoading } from "../store/actions/load";
import Authenticate from "./Authenticate";
import Navbar from "./NavBar";

class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { authUser, errors, removeError, currentUser, loading, setLoading } = this.props;
        return (
            <div>
                {(currentUser.isAuthenticated) ? (
                    <Router>
                        <Navbar />
                        {errors.message && (
                        <div className="alert alert-danger">{errors.message}</div>
                        )}
                        <Routes />
                    </Router>
                ) : (
                    <div style={{margin: '0px'}}>
                        <Authenticate 
                        store={this.props.store}
                        removeError={removeError}
                        addError={addError}
                        errors={errors}
                        onAuth={authUser}
                        {...this.props}
                        />
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors : state.errors,
        loading: state.loading
    };
}
  
  export default connect(mapStateToProps, { authUser, removeError, setLoading })(Main);