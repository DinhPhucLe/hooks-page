import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import UseStateHook from "./pages/UseStateHook.js";
import UseEffectHook from "./pages/UseEffectHook.js";
import UseRefHook from "./pages/UseRefHook.js";
import UseContextHook from './pages/UseContextHook.js';
import Layout from "./pages/Layout.js";
import './App.css';
import UseReducerHook from './pages/UseReducerHook.js';
import CallbackMemo from './pages/CallbackMemo.js';

function App(){

  return(
    <>
    <BrowserRouter>
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
    </BrowserRouter>

    <Outlet/>
    </>
  );
}

export default App;