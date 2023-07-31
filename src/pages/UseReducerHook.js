import './App.css';
import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Cmp({text}) {return <span style={{color: "#4EC9B0"}}>{text}</span>}

function Comment({text}) {return <div style={{color: "#6A9955"}}>{text}</div>}

function DBlue({text}) {return <span style={{color: "#569CD6"}}>{text}</span>}

function MBlue({text}) {return <span style={{color: "#4FC1FF"}}>{text}</span>}

function Purple({text}) {return <span style={{color: "#990073"}}>{text}</span>}

function DYellow({text}) {return <span style={{color: "yellow"}}>{text}</span>}

function LYellow({text}) {return <span style={{color: "#DCDCAA"}}>{text}</span>}

function LGreen({text}) {return <span style={{color: "#B5CEA8"}}>{text}</span>}

function White({text}){return <span style={{color: "white"}}>{text}</span>}

function Grey({text}){return <span style={{color: "#808080"}}>{text}</span>}

function TextColor({text}){return <span style={{color: "#CE9178"}}>"{text}"</span>}

const displayVar = "{var}";
const displayDiv = <span><Grey text="<"/><DBlue text="div"/><Grey text=">"/></span>;
const displayDivClose = <span><Grey text="<"/><DBlue text="/div"/><Grey text=">"/></span>;
const opCB = "{";
const edCB = "}";
const opCBracket = <DYellow text="{"/>;
const closeCBracket = <DYellow text="}"/>;
const op = <Grey text="<"/>,   ed = <Grey text=">"/>;
const colon = ":";

function UseReducerHook(){

  return(
    <>
    <div style={{width: 1351}}>
        <div>
            <p style={{backgroundColor: "lightgoldenrodyellow", fontSize: "50px",
                height: "175px", display:"flex", alignItems: "center", width: 1183,
                justifyContent: "center", borderBottom: "2px solid lightgrey", marginTop: "0px"}}>
            <span style={{color: "#ff4d4d"}}>useReducer&nbsp;</span> Guide</p>
        </div>



        <div>


            <div style={{marginLeft: "150px", marginRight: "150px"}}>
          
                <p>The <span className='keyColor'>useReducer</span> Hook is similar to 
                    the <span className='keyColor'>useState</span> Hook, as it allows users to customize state.
                </p>
                <p><span className='keyColor'>useReducer</span> is usually used to manage complicated states.</p>

                <p style={{fontSize: "30px"}}>initialize <span style={{color: "#ff4d4d"}}>useReducer</span></p>
                <div>useReducer({op}reducer{ed}, {op}initialState{ed})</div>
                <p>The <span className='keyColor'>useReducer</span> accepts two arguements:</p>
                <ul>
                    <li><span className='keyColor'>reducer</span> function to customize state logic</li>
                    <li><span className='keyColor'>initialState</span>: this can be a simple value, but 
                        generally will contain an object</li>
                </ul>
                The <span className='keyColor'>useReducer</span> Hook returns two values:
                <ul>
                    <li>The current <span className='keyColor'>state</span></li>
                    <li>A <span className='keyColor'>dispatch</span> method</li>
                </ul>
                <div className='content-box'>
                    <DBlue text="const"/> <DYellow text="["/><MBlue text="state"/><White text=","/> <LYellow text="dispatch"/><DYellow text="]"/> <White text="="/> <LYellow text="useReducer"/><Purple text="("/><LYellow text="reducer"/><White text=","/> <MBlue text="initialState"/><Purple text=")"/><White text=";"/>
                </div>


                <p style={{fontSize: "30px"}}><span className='keyColor'>useReducer</span> in real code</p>
                <p>Use <span className='keyColor'>useReducer</span> to manage obj.count value:</p>
                <div className='content-box'>
                    <div><DBlue text="const"/> <MBlue text="initialValue"/> <White text="="/> {opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><MBlue text="count:"/> <LGreen text="0"/></div>
                    <div>{closeCBracket}<White text=";"/></div>

                    <br/>

                    <div><Comment text="// reducer function"/></div>
                    <div><DBlue text="const"/> <LYellow text="adjust"/> <White text="="/> <DYellow text="("/><MBlue text="state"/><White text=","/> <MBlue text="action"/><DYellow text=")"/> <MBlue text="=>"/> {opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text="if ("/><MBlue text="action.type"/> <White text="==="/> <TextColor text="increment"/><Purple text=")"/></div>
                    <div style={{paddingLeft: "30px"}}><Purple text="return {"/><White text="..."/><MBlue text="state"/><White text=","/> <MBlue text="count:"/> <MBlue text="state.count"/> <White text="+"/> <LGreen text="1"/><Purple text="}"/><White text=";"/></div>
                    <div style={{paddingLeft: "15px"}}><Purple text="if ("/><MBlue text="action.type"/> <White text="==="/> <TextColor text="increment"/><Purple text=")"/></div>
                    <div style={{paddingLeft: "30px"}}><Purple text="return {"/><White text="..."/><MBlue text="state"/><White text=","/> <MBlue text="count:"/> <MBlue text="state.count"/> <White text="-"/> <LGreen text="1"/><Purple text="}"/><White text=";"/></div>
                    <div style={{paddingLeft: "15px"}}><Purple text="throw"/> <DBlue text="new"/> <Cmp text="Error"/><Purple text="()"/><White text=";"/></div>
                    <div>{closeCBracket}</div>
                    <br/>

                    <div><DBlue text="function"/> <LYellow text="App"/><DYellow text="()"/> {opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><Comment text="// initialize useReducer Hook"/></div>
                    <div style={{paddingLeft: "15px"}}>
                        <DBlue text="const"/> <DYellow text="["/><MBlue text="obj"/><White text=","/> <LYellow text="dispatch"/><DYellow text="]"/> <White text="="/> <LYellow text="useReducer"/><Purple text="("/><LYellow text="adjust"/><White text=","/> <MBlue text="initialValue"/><Purple text=")"/><White text=";"/>
                    </div>

                    <br/>

                    <div style={{paddingLeft: "15px"}}><Purple text="return ("/></div>
                    <div style={{paddingLeft: "30px"}}>{displayDiv}</div>
                    <div style={{paddingLeft: "45px"}}><White text="Count:"/> {opCBracket}<MBlue text="obj.count"/>{closeCBracket}<White text=";"/></div>
                    <div style={{paddingLeft: "45px"}}>
                        {op}<DBlue text="button"/> <MBlue text="onClick"/> <White text="="/> {opCBracket}<DYellow text="()"/> <MBlue text="=>"/> <LYellow text="dispatch"/><DYellow text="("/>{opCBracket}<MBlue text="type"/> <TextColor text="increment"/>{closeCBracket}<DYellow text=")"/>{closeCBracket}{ed}
                        <White text="+"/>{op}<Grey text="/"/><DBlue text="button"/>{ed}
                    </div>
                    <div style={{paddingLeft: "45px"}}>
                        {op}<DBlue text="button"/> <MBlue text="onClick"/> <White text="="/> {opCBracket}<DYellow text="()"/> <MBlue text="=>"/> <LYellow text="dispatch"/><DYellow text="("/>{opCBracket}<MBlue text="type"/> <TextColor text="decrement"/>{closeCBracket}<DYellow text=")"/>{closeCBracket}{ed}
                        <White text="-"/>{op}<Grey text="/"/><DBlue text="button"/>{ed}
                    </div>
                    <div style={{paddingLeft: "30px"}}>{displayDivClose}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text=")"/><White text=";"/></div>
                    <div>{closeCBracket}</div>
                </div>

                
                




                
            </div>
        </div>
    </div>

    </>
  );
}

export default UseReducerHook;