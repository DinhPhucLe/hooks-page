import './App.css';
import React from "react";
import { Outlet, Link } from "react-router-dom";


function Layout(){

  return(
    <>
      <div style={{display: "flex"}}>
        <div style={{paddingLeft: "50px", paddingTop: "225px", width: "100px", borderRight: "1px solid grey",
                    paddingRight: "30px", height: "1000px", backgroundColor: "#333333", position: "fixed"}}>
          <p style={{fontSize: "20px", color: "white"}}> Hooks:</p>

          <div style={{marginBottom: "10px"}}>
            <Link to = "/UseStateHook" className='customLink'> useState </Link>
          </div>

          <div style={{marginBottom: "10px"}}>
            <Link to = "/UseEffectHook" className='customLink'> useEffect </Link>
          </div>

          <div style={{marginBottom: "10px"}}>
            <Link to = "/UseRefHook" className='customLink'> useRef </Link>
          </div>

          <div style={{marginBottom: "10px"}}>
            <Link to = "/UseContextHook" className='customLink'> useContext </Link>
          </div>

          <div style={{marginBottom: "10px"}}>
            <Link to = "/UseReducerHook" className='customLink'> useReducer </Link>
          </div>

          <div style={{marginBottom: "10px"}}>
            <Link to = "/CallbackMemo" className='customLink'>
              useCallback & useMemo </Link>
          </div>
        </div>
        
        <Outlet />
      </div>

    </>
  );
}

export default Layout;