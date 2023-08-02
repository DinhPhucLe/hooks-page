import { React, useEffect, useState } from "react"
import { onAuthStateChanged, signOut, updateProfile, updateEmail } from "firebase/auth";
import { Navigate, Route, useNavigate } from "react-router-dom"
import { auth } from "../firebase";
import MainContent from "./auth/hooks-content/mainContent";

const AuthDetails = () => {
    updateProfile(auth.currentUser, {
        displayName: "user's name",
        photoURL: "user's photo"
    }).catch((error) => {})
    /*const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        
        return () => {
            listen();
        }   
    }, []);*/

    const navigate = useNavigate();
    const changeToHome = () => navigate("/");    

    const signOutAccount = () => {
        signOut(auth);
        changeToHome();
    }


    let userShortenMail="";
    if (auth.currentUser !== null){
        userShortenMail = auth.currentUser.email;
        userShortenMail = userShortenMail.replace("@gmail.com", "");
    }
    console.log(userShortenMail);

    return(
        <div style={{width: "125px", marginLeft: "-25px", marginTop: "-200px", marginBottom: "200px"}}>
            {auth.currentUser !== null ? 
            <>
                {
                    <p style={{fontSize: "12px", color: "white"}}>Signed In as&nbsp;
                        <span style={{color: "blue"}}>{userShortenMail}</span>
                    </p>
                    
                }
                <button onClick={signOutAccount}>Sign Out</button>
            </> : <>
                <p style={{fontSize: "12px", color: "white"}}>You're not signed in</p>
                <button onClick={changeToHome}>Sign in</button>
            </>}
            

        </div>
    );
}

export default AuthDetails;