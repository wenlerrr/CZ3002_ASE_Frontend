import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import { Dropdown, ButtonToolbar, DropdownButton } from 'react-bootstrap';

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        const { currentUser, logout } = this.props;
        return (
            <nav className="navbar navbar-expand-md">
                    <div className="navbar-header" style={{marginRight: "10px", marginLeft: "10px"}}>
                        JioBook
                    </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                to="/"
                                >
                                    <i className="fas fa-home" style={{color: "black"}} />
                                </Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav ml-auto">
                            <ButtonToolbar>
                                <DropdownButton 
                                drop='left' 
                                variant="secondary"
                                title={ <span> <i className="fas fa-bars" /></span>}
                                >
                                    <Dropdown.Item>
                                        Signed in as <b>{`${currentUser.user.username}`}</b>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link
                                        to="/explore"
                                        >
                                            Explore
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link
                                        to="/community"
                                        >
                                            My Community
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link
                                        to="/create"
                                        >
                                            Create Community
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        <Link
                                        to="/changePassword"
                                        >
                                            Change Password
                                        </Link>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item>
                                    <button className="btn btn-secondary" onClick={this.logout}>Log out</button>
                                    </Dropdown.Item>
                                </DropdownButton>
                            </ButtonToolbar>
                        </ul>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}
  
export default connect(mapStateToProps, { logout })(Navbar);