import { React, useEffect, useState, useRef } from "react"
import { onAuthStateChanged, signOut, updateProfile, updateEmail } from "firebase/auth";
import { Navigate, Route, useNavigate } from "react-router-dom"
import { auth } from "../firebase";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const AuthDetails = () => {
    const navigate = useNavigate();
    const changeToHome = () => navigate("/");    
    //const [userShortenMail, setUserShortenMail] = useState("");
    let userShortenMail = "";
    const [test, setTest] = useState("");

    const signOutAccount = () => {
        signOut(auth);
        changeToHome();
    }

    //console.log(auth.currentUser);
    if (auth.currentUser !== null && auth.currentUser.email !== null){
        userShortenMail = auth.currentUser.email;
        userShortenMail = userShortenMail.replace("@gmail.com", "");
    }
    
    if (auth.currentUser !== null && auth.currentUser.phoneNumber !== null){
        const check = auth.currentUser.phoneNumber;
        getDocs(collection(db, "userInformation"))
            .then((snapshot) => {
                let tmp="";
                snapshot.docs.forEach((doc) => {
                    if (doc.data().phone == check){
                        tmp = doc.data().mail;
                        tmp = tmp.replace("@gmail.com", "");
                        //setUserShortenMail(tmp);
                        userShortenMail = tmp;
                    }
                })
                setTest(tmp);
                console.log(userShortenMail);
                
            })
            .catch((error) => {
                alert("number not found");
                navigate(-1);
            })
        userShortenMail = test;
    }

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