import {React, useState} from "react";
import { auth, app } from "../../firebase";
import { 
    signInWithPhoneNumber, RecaptchaVerifier, getAuth
} from "firebase/auth";
import "./customizeSignIn.css";
import { useNavigate, Link } from "react-router-dom";
import "./signUp";
import "./signInPhoneNumber";



const SignInPhoneNumber = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [step, setStep] = useState("input_phone_number");
    const [result, setResult] = useState("");
    const [otp, setOTP] = useState("");
    const [falseInfo, setFalseInfo] = useState("");
    
    const sendOTP = (e) => {
        e.preventDefault();
        if (phoneNumber === "") return;
        
        let verify = new RecaptchaVerifier(auth, 'recaptcha-container', {
            'size': 'invisible'
        });
        window.recaptcha = null;
        window.grecaptcha = null
        
        signInWithPhoneNumber(auth, phoneNumber, verify)
            .then((result) => {
                setTimeout(function(){
                    setStep("verify_OTP");
                    setResult(result);
                    clearTimeout();
                }, 1000);

            })
            .catch((Timeout) => {
                console.log("error");
            });
    }

    
    const navigate = useNavigate();
    const changeToContent = () => navigate("/mainContent");

    const checkOTP = (e) => {
        e.preventDefault();
        console.log(otp);

        if (otp === null) return;

        result.confirm(otp)
            .then((result) => {
                setStep("success");
                changeToContent();
            })
            .catch((error) => {
                console.log("Wrong OTP");
            })
    }


    return (
        <div>
            <div className="sign-in-container">
                <h1 style={{color: "white"}}>Welcome!</h1>
                <div className="signInBox">
                    {
                        step === "input_phone_number" &&
                        <form onSubmit={sendOTP}>
                            
                            <input type="text" 
                                placeholder="Enter your phone number" 
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="inputStyle">
                            </input><br/>
    
                            <div id="recaptcha-container"></div>
    
                            <button type="submit"
                                className="logInButton">
                                Send OTP
                            </button>
                        </form>
                    }



                    {
                        step === "verify_OTP" &&
                        <form onSubmit={checkOTP}>
                            
                            <input type="text" 
                                placeholder="Enter the OTP" 
                                value={otp}
                                onChange={(e) => setOTP(e.target.value)}
                                className="inputStyle">
                            </input><br/>
    
                            
    
                            <button type="submit"
                                className="logInButton">
                                Verify OTP
                            </button>
                        </form>

                    }
                    
                    {falseInfo &&
                        <p style={{color: "red", fontSize: "10px"}}>Wrong OTP!</p>
                    }   

                    <div
                        style={{marginLeft: "0px", marginTop: "10px", fontSize: "14px"}}>
                        <Link to="/">Sign in with email and password</Link>
                    </div>
                    <div
                        style={{marginLeft: "0px", marginTop: "10px", fontSize: "14px"}}>
                        <Link to="/signUp">Create an account</Link>
                    </div>
                    
                </div>

            </div>
            
        </div>
    );
}

export default SignInPhoneNumber;