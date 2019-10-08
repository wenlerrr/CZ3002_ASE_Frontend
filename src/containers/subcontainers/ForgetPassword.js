import React, {useState} from 'react';
import VerifyPin from "../../components/authentication/VerifyPin";
import VerifyEmail from "../../components/authentication/VerifyEmail";

const ForgetPassword = props => {
    const [obtainedPin, setObtainedPin] = useState(false);
    const onPinObtained = e => {
        setObtainedPin(true)
    }
    return(
        <div>
            {(obtainedPin) ? (
                <VerifyPin {...props} />
            ) : (
                <VerifyEmail setPinObtained={onPinObtained} {...props} />
            )}
        </div>
    )
}

export default ForgetPassword;
