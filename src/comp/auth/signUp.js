import {React, useState} from "react";
import {auth} from "../../firebase";
import { 
    createUserWithEmailAndPassword, sendEmailVerification 
} from "firebase/auth";
import "./customizeSignIn.css";
import { useNavigate, Link } from "react-router-dom";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [falseInfo, setFalseInfo] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const users = collection(db, "userInformation");


    
    const navigate = useNavigate();
    const changeToContent = () => navigate(-1);
    
    const signingUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                console.log(userCredential);
                setDoc(doc(db, "userInformation", email), {
                    mail: email,
                    pass: password,
                    phone: phoneNumber
                });

                sendEmailVerification(userCredential.user);
                alert("A verification mail has been sent to your email");

                
                changeToContent();
            })
            .catch((error) => {
                setFalseInfo(true);
            })
    }

    return (
        <div>
            <div className="sign-in-container">
                <div className="signInBox">
                    <form onSubmit={signingUp}>
                        <p style={{fontSize: "15px", fontFamily: "Arial", marginTop: "0px"}}>
                            Create new account:
                        </p>

                        <input type="text" 
                            placeholder="Enter your phone number" 
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="inputStyle">
                        </input><br/>

                        <input type="text" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="inputStyle">
                        </input><br/>

                        <input type="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="inputStyle">
                        </input><br/>

                        <button type="submit"
                            className="logInButton">
                            Sign up
                        </button>
                    </form>

                    <p></p>
                    
                    {falseInfo &&
                        <p style={{color: "red", fontSize: "10px"}}>Account with this email already exists!</p>
                    }   

                    <div
                        style={{marginLeft: "100px", marginTop: "10px", fontSize: "14px"}}>
                        <Link to="/">Already have an account?</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default SignUp;