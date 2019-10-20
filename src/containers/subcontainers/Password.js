import React from "react";
import {Typography} from "@material-ui/core"
import FormPasswordReset from "../../components/resetPassword/FormPasswordReset"
import '../../components/resetPassword/resetPassword.css'
import Navbar from "../NavBar";


const Password = props => {
    
    return (
        <div>
            <Navbar />
        <div className="App">
            <FormPasswordReset />
        </div>
        </div>
    )
}

export default Password;