import React from "react";
import {Typography} from "@material-ui/core"
import FormPasswordReset from "../../components/resetPassword/FormPasswordReset"
import '../../components/resetPassword/resetPassword.css'


const Password = props => {
    
    return (
        // <div className="container">
        <div className="App">
            <Typography component="h1" variant="h3" style={{ margin: '16px 0' }}>
                Reset Password
            </Typography>
            <FormPasswordReset />
        </div>
    )
}

export default Password;