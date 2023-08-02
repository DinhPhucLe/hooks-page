import './App.css';
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useRef } from "react";
import UseStateHook from "./UseStateHook.js";
import UseEffectHook from "./UseEffectHook.js";
import UseRefHook from "./UseRefHook.js";
import UseContextHook from './UseContextHook.js';
import UseReducerHook from './UseReducerHook.js';
import CallbackMemo from './CallbackMemo.js';
import AuthDetails from '../../../authDetails';


function Layout(){
  const state = useRef();
  const effect = useRef();
  const rf = useRef();
  const rdcr = useRef();
  const contxt = useRef();
  const cbmemo = useRef();

  function changeColor(cur){
    state.current.setAttribute('class', 'customLink');
    effect.current.setAttribute('class', 'customLink');
    rf.current.setAttribute('class', 'customLink');
    rdcr.current.setAttribute('class', 'customLink');
    contxt.current.setAttribute('class', 'customLink');
    cbmemo.current.setAttribute('class', 'customLink');

    cur.current.setAttribute('class', 'test');
    return (
      <>
      </>
    );
  }

  return(
    <>
      <div style={{display: "flex"}}>
        <div style={{paddingLeft: "50px", paddingTop: "225px", width: "100px", borderRight: "1px solid grey",
                    paddingRight: "30px", height: "1000px", backgroundColor: "#333333", position: "fixed"}}>
          <AuthDetails />
          <p style={{fontSize: "20px", color: "white"}}> Hooks:</p>

          <div style={{marginBottom: "10px"}}>
            <Link to = "UseStateHook" className='test' 
              ref={state} onClick={() => changeColor(state)}> useState </Link>
          </div>

          <div style={{marginBottom: "10px"}}>
            <Link to = "UseEffectHook" className='customLink'
              ref={effect} onClick={() => changeColor(effect)}> useEffect </Link>
          </div>

          <div style={{marginBottom: "10px"}}>
            <Link to = "UseRefHook" className='customLink'
              ref={rf} onClick={() => changeColor(rf)}> useRef </Link>
          </div>

          <div style={{marginBottom: "10px"}}>
            <Link to = "UseContextHook" className='customLink'
              ref={contxt} onClick={() => changeColor(contxt)}> useContext </Link>
          </div>

          <div style={{marginBottom: "10px"}}>
            <Link to = "UseReducerHook" className='customLink'
              ref={rdcr} onClick={() => changeColor(rdcr)}> useReducer </Link>
          </div>

          <div style={{marginBottom: "10px"}}>
            <Link to = "CallbackMemo" className='customLink'
              ref={cbmemo} onClick={() => changeColor(cbmemo)}>
              useCallback & useMemo </Link>
          </div>
        </div>
        
        <Outlet />
      </div>

    </>
  );
}

export default Layout;