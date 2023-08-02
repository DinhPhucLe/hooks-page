import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom';
import UseStateHook from "./pages/UseStateHook.js";
import UseEffectHook from "./pages/UseEffectHook.js";
import UseRefHook from "./pages/UseRefHook.js";
import UseContextHook from './pages/UseContextHook.js';
import Layout from "./pages/Layout.js";
import UseReducerHook from './pages/UseReducerHook.js';
import CallbackMemo from './pages/CallbackMemo.js';
import './App.css';



function MainContent(){
  const navigate = useNavigate();
  const changeToContent = () => navigate("/mainContent");

  return(
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UseStateHook />}/>
          
          <Route path="UseStateHook" element={<UseStateHook />}/>
          <Route path="UseEffectHook" element={<UseEffectHook />}/>
          <Route path="UseRefHook" element={<UseRefHook />}/>
          <Route path="UseContextHook" element={<UseContextHook />}/>
          <Route path="UseReducerHook" element={<UseReducerHook />}/>
          <Route path="CallbackMemo" element={<CallbackMemo />}/>
        </Route>
      </Routes>
    <Outlet/>
    </>
  );
}

export default MainContent;