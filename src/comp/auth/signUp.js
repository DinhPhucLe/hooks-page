import {React, useState} from "react";
import {auth} from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import MainContent from "./hooks-content/mainContent";
import "./customizeSignIn.css";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    
    const navigate = useNavigate();
    const changeToContent = () => navigate(-1);
    
    const signingUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // sign in successfully
                
                console.log("successful");
                changeToContent();
            })
            .catch((error) => {
                console.log("error");
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
                </div>
            </div>
            
        </div>
    );
}

export default SignUp;