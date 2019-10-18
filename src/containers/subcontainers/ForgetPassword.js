import React, {useState} from 'react';
import VerifyPin from "../../components/authentication/VerifyPin";
import VerifyEmail from "../../components/authentication/VerifyEmail";
import API from "../../services/api2";
import { removeError, addError } from "../../store/actions/errors";
import { setAuthorizationToken, setCurrentUser } from "../../store/actions/auth";
import { Redirect } from "react-router-dom";

const ForgetPassword = props => {
    const [obtainedPin, setObtainedPin] = useState(false);
    const [email, setEmail] = useState('');
    const [OTP, setOTP] = useState("");
    const getOTPValue = () => {
        return OTP;
    }
    const onPinObtained = e => {
        let api = new API()
        api
        .post('/api/authentication/newPin', {"email": email})
        .then(() => {
            setObtainedPin(true)
        })
        .catch(err => {
            console.log(err);
        })
    }
    const onResetPassword = e => {
        let api = new API()
        api
        .post('/api/authentication/pinLogin', {"email": email, "pin": OTP})
        .then(res => {
            var userReturned = res.data
            try {
                props.store.dispatch(removeError());
                props.store.dispatch(setCurrentUser(userReturned));
            } catch (e) {
                props.store.dispatch(setCurrentUser({}));
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    const getEmailValue = () => {
        return email
    }
    return(
        <div>
            {(obtainedPin) ? (
                <VerifyPin
                onResetPassword={onResetPassword}
                setOTP = {setOTP}
                getOTPValue = {getOTPValue}
                offForgetPassword={props.offForgetPassword} 
                {...props} />
            ) : (
                <VerifyEmail
                getEmailValue = {getEmailValue}
                setEmail={setEmail} 
                offForgetPassword={props.offForgetPassword} setPinObtained={onPinObtained} {...props} />
            )}
        </div>
    )
}

export default ForgetPassword;
