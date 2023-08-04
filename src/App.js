import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';
import SignIn from './comp/auth/signIn.js';
import SignUp from "./comp/auth/signUp.js";
import SignInPhoneNumber from './comp/auth/signInPhoneNumber';
import AuthDetails from './comp/authDetails';
import Layout from './comp/auth/hooks-content/pages/Layout';

import UseStateHook from "./comp/auth/hooks-content/pages/UseStateHook.js";
import UseEffectHook from "./comp/auth/hooks-content/pages/UseEffectHook.js";
import UseRefHook from "./comp/auth/hooks-content/pages/UseRefHook.js";
import UseContextHook from './comp/auth/hooks-content/pages/UseContextHook.js';
import UseReducerHook from './comp/auth/hooks-content/pages/UseReducerHook.js';
import CallbackMemo from './comp/auth/hooks-content/pages/CallbackMemo.js';

import firebase from "firebase/compat/app";
import "firebase/firestore";
import { collection, addDoc, doc, getDocs } from "firebase/firestore"
import { db } from "./firebase";

function App(){

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />}/>

          <Route path="/signUp" element = {<SignUp/>}/>
          <Route path="/signInPhoneNumber" element = {<SignInPhoneNumber />}/>
          <Route path="/mainContent" element = {<Layout/>}>
            
              <Route index element={<UseStateHook />}/>
          
              <Route path="UseStateHook" element={<UseStateHook />}/>
              <Route path="UseEffectHook" element={<UseEffectHook />}/>
              <Route path="UseRefHook" element={<UseRefHook />}/>
              <Route path="UseContextHook" element={<UseContextHook />}/>
              <Route path="UseReducerHook" element={<UseReducerHook />}/>
              <Route path="CallbackMemo" element={<CallbackMemo />}/>
          </Route>
          
        </Routes>
      </BrowserRouter>

      <Outlet/>
    </>
  );
}

export default App;