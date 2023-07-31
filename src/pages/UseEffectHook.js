import './App.css';
import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Comment(props) {return <div style={{color: "#6A9955"}}>{props.text}</div>}

function DBlue(props) {return <span style={{color: "#569CD6"}}>{props.text}</span>}

function MBlue(props) {return <span style={{color: "#4FC1FF"}}>{props.text}</span>}

function Purple(props) {return <span style={{color: "#990073"}}>{props.text}</span>}

function DYellow(props) {return <span style={{color: "yellow"}}>{props.text}</span>}

function LYellow(props) {return <span style={{color: "#DCDCAA"}}>{props.text}</span>}

function LGreen(props) {return <span style={{color: "#B5CEA8"}}>{props.text}</span>}

function White(props){return <span style={{color: "white"}}>{props.text}</span>}

function Grey(props){return <span style={{color: "#808080"}}>{props.text}</span>}

function TextColor(props){return <span style={{color: "#CE9178"}}>"{props.text}"</span>}

const displayVar = "{var}";
const displayDiv = <span><Grey text="<"/><DBlue text="div"/><Grey text=">"/></span>;
const displayDivClose = <span><Grey text="<"/><DBlue text="/div"/><Grey text=">"/></span>;
const opCBracket = <DYellow text="{"/>;
const closeCBracket = <DYellow text="}"/>;
const op = "<",   ed = ">";

function UseEffectHook(){

  return(
    <>
    <div style={{width: 1351}}>
      <div>
        <p style={{backgroundColor: "lightgoldenrodyellow", fontSize: "50px",
            height: "175px", display:"flex", alignItems: "center", width: 1183,
            justifyContent: "center", borderBottom: "2px solid lightgrey", marginTop: "0px"}}>
        <span style={{color: "#ff4d4d"}}>useEffect&nbsp;</span> Guide</p>
      </div>



      <div>


      <div style={{marginLeft: "150px", marginRight: "150px"}}>
          
          <p>The <span className='keyColor'>useEffect</span> Hook allows users to perform side effects of components 
            (timer, fetching data, directly updating the DOM).</p>

          <p style={{fontSize: "30px"}}>Initialize <span style={{color: "#ff4d4d"}}>useEffect</span></p>

          <p>We initialize useEffect by calling <span className='keyColor'>useEffect</span></p>
          <p><span className='keyColor'>useEffect</span> receives two arguements. 
              The second arguement is <b>optional</b>.</p>
          <ul>
            <li><div className='keyColor'>{op}function{ed}</div></li>
            <li><div className='keyColor'>{op}dependency{ed}</div></li>
          </ul>
          <div className='keyColor'>useEffect({op}function{ed}, {op}dependency{ed})</div>




          <div className="content-box">
            <div><DBlue text="const"/> <DYellow text="["/><MBlue text="val"/><White text=","/> <LYellow text="setVal"/><DYellow text="]"/> <White text="="/> <LYellow text="useState"/><DYellow text="("/><LGreen text="0"/><DYellow text=")"/><White text=";"/></div>
            <div style={{paddingLeft: "15px"}}><Comment text="// initialize useState Hook"/></div>
            <br/><br/>

            <div><Comment text="// using setTimeout() effect as an example"/></div>
            <br/>

            <div><LYellow text="useEffect"/><DYellow text="("/><Purple text="()"/> <DBlue text="=>"/> {opCBracket}</div>
            <div style={{paddingLeft: "15px"}}><LYellow text="setTimeout"/><DYellow text="("/><Purple text="()"/> <DBlue text="=>"/> {opCBracket}</div>
            <div style={{paddingLeft: "30px"}}><LYellow text="setVal"/><Purple text="("/><DYellow text="("/><MBlue text="val"/><DYellow text=")"/> <DBlue text="=>"/> <MBlue text="val"/><White text="+"/><LGreen text="1"/><Purple text=")"/><White text=";"/></div>
            <div style={{paddingLeft: "15px"}}>{closeCBracket}<White text=","/> <LGreen text="1000"/><DYellow text=")"/><White text=";"/></div>
            <div>{closeCBracket}<DYellow text=")"/><White text=";"/></div>
            <br/>

            <div><Comment text="// 'var' value will increase every 1 second"/></div>
          </div>

          <p>The "var" will increase infinitely over time.</p>
          <p><span style={{color: "yellow"}}>Note: </span>
            <span className='keyColor'>useEffect</span> runs on every renders. That means every time "var" increase, 
            a render happens, which then trigger another <span className='keyColor'>useEffect</span>.
          </p>
          <p>To control the side effect, we should include our second parameter to our <span 
              className='keyColor'>useEffect
            </span> as an array.
          </p>



          <p style={{fontSize: "30px"}}><span style={{color: "#ff4d4d"}}>Dependency</span></p>

          <p>Dependency is the second arguement of <span className='keyColor'>useEffect</span>. 
          The <span className='keyColor'>useEffect</span> is triggered when any values 
            of <span className='keyColor'>Dependency</span> changes. We can pass multiple values into 
            the <span className='keyColor'>Dependency</span> array.
          </p>
          <br/>

          <p>No dependency passed:</p>
          <div className="content-box">
            <div><LYellow text="useEffect"/><DYellow text="("/><Purple text="()"/> <DBlue text="=>"/> {opCBracket}</div>
            <div style={{paddingLeft: "15px"}}><Comment text="// Runs on every renders"/></div>
            <div>{closeCBracket}<DYellow text=")"/><White text=";"/></div>
          </div>
          <br/>

          <p>An empty array passed:</p>
          <div className="content-box">
            <div><LYellow text="useEffect"/><DYellow text="("/><Purple text="()"/> <DBlue text="=>"/> {opCBracket}</div>
            <div style={{paddingLeft: "15px"}}><Comment text="// Runs only on the first render"/></div>
            <div>{closeCBracket}<White text=","/> <Purple text="["/> <Purple text="]"/><DYellow text=")"/><White text=";"/></div>
          </div>
          <br/>

          <p>"value1" and "value2" passed:</p>
          <div className="content-box">
            <div><LYellow text="useEffect"/><DYellow text="("/><Purple text="()"/> <DBlue text="=>"/> {opCBracket}</div>
            <div style={{paddingLeft: "15px"}}><Comment text="// Runs on the first render"/></div>
            <div style={{paddingLeft: "15px"}}><Comment text="// and any time any value in dependency array changes"/></div>
            <div>{closeCBracket}<White text=","/> <Purple text="["/> <MBlue text="value1"/><White text=","/> <MBlue text="value2"/> <Purple text="]"/><DYellow text=")"/><White text=";"/></div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default UseEffectHook;