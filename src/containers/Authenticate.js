import React, { useState } from "react";
import LoginPage from "../components/authentication/LoginPage";
import Register from "../components/authentication/Register";
import MainPage from "./subcontainers/MainPage"
const Authenticate = props => {
  const [logIn, setLogIn] = useState(true);
  const [start, setStart] = useState(true);
  const onLogIn = e => {
    setLogIn(true);
  }
  const onSignUp = e => {
    setLogIn(false);
  }
  const offStart = e => {
    setStart(false);
  }
  const onStart = e => {
    setStart(true);
  }
  return (
    <div>

    {(start) ? (
          <div>
              <MainPage offStart={offStart} { ...props } />
          </div>
      ) : (
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
      )}
        
    </div>
  )
}
  
export default Authenticate;