import {React, useState} from "react";
import {auth} from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import MainContent from "./hooks-content/mainContent";
import "./customizeSignIn.css";
import { useNavigate, Link } from "react-router-dom";
import "./signUp"

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [falseInfo, setFalseInfo] = useState("");

    
    const navigate = useNavigate();
    const changeToContent = () => navigate("/mainContent");
    
    const signingIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                // sign in successfully
                
                console.log(userCredential);
                changeToContent();
            })
            .catch((error) => {
                setFalseInfo(true);
            })
    }

    return (
        <div>
            <div className="sign-in-container">
                <h1 style={{color: "white"}}>Welcome!</h1>
                <div className="signInBox">
                    <form onSubmit={signingIn}>
                        <p style={{fontSize: "15px", fontFamily: "Arial", marginTop: "0px"}}>
                            Log in your account:
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
                            Log in
                        </button>
                    </form>
                    {falseInfo &&
                        <p style={{color: "red", fontSize: "10px"}}>Your email or password is incorrect!</p>
                    }   
                    
                    <div 
                        style={{marginLeft: "100px", marginTop: "10px", fontSize: "14px"}}>
                        <Link to="/signUp">Create new account</Link>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default SignIn;