import React, { useState } from "react";
import LoginPage from "../components/authentication/LoginPage";
import Register from "../components/authentication/Register";

const Authenticate = props => {
  const [logIn, setLogIn] = useState(true);
  const onLogIn = e => {
    setLogIn(true);
  }
  const onSignUp = e => {
    setLogIn(false);
  }
  return (
    <div>
        {(logIn) ? (
            <div>
                <LoginPage onSignUp={onSignUp} { ...props } />
            </div>
        ) : (
            <div>
                <Register onLogIn={onLogIn} {...props } />
            </div>
        )}
    </div>
  )
}
  
export default Authenticate;