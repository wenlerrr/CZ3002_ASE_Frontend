import React, { useState } from "react";
import LoginPage from "../components/authentication/LoginPage";
import Register from "../components/authentication/Register";
import MainPage from "./subcontainers/MainPage"
import ForgetPassword from "./subcontainers/ForgetPassword";
const Authenticate = props => {
  const [logIn, setLogIn] = useState(true);
  const [start, setStart] = useState(true);
  const [forgetPassword, setForgetPassword] = useState(false);
  const onForgetPassword = e => {
    setForgetPassword(true);
  }
  const offForgetPassword = e => {
    setForgetPassword(false);
  }
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
              {(forgetPassword) ? (
                <div>
                  <ForgetPassword offForgetPassword={offForgetPassword} {...props} />
                </div>
              ) : (
                <div>
                  {(logIn) ? (
                      <div>
                          <LoginPage onStart={onStart} onForgetPassword={onForgetPassword} onSignUp={onSignUp} { ...props } />
                      </div>
                  ) : (
                      <div>
                          <Register onStart={onStart} onLogIn={onLogIn} {...props } />
                      </div>
                  )}
                </div>
              )}
          </div>
      )}
        
    </div>
  )
}
  
export default Authenticate;