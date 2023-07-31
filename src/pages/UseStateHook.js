import './App.css';
import React from "react";

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

const displayDiv = <span><Grey text="<"/><DBlue text="div"/><Grey text=">"/></span>;
const displayDivClose = <span><Grey text="<"/><DBlue text="/div"/><Grey text=">"/></span>;
const opCBracket = <DYellow text="{"/>;
const closeCBracket = <DYellow text="}"/>;

function UseStateHook(){

  return(
    <>
    <div style={{width: 1351}}>
      <div>
        <p style={{backgroundColor: "lightgoldenrodyellow", fontSize: "50px",
            height: "175px", display:"flex", alignItems: "center", width: 1183,
            justifyContent: "center", borderBottom: "2px solid lightgrey", marginTop: "0px"}}>
        <span style={{color: "#ff4d4d"}}>useState&nbsp;</span> Guide</p>
      </div>



      <div>



        <div style={{marginLeft: "150px", marginRight: "150px"}}>
          <p style={{fontSize: "30px"}}>Initialize <span style={{color: "#ff4d4d"}}>useState</span></p>

          <p>We initialize useState by calling <span className='keyColor'>useState()</span></p>
          <p><span className='keyColor'>useState</span> accept an initial state and return two values:</p>
          <ul>
            <li>The current state</li>
            <li>The update function</li>
          </ul>

          <div className="content-box">
            <div><DBlue text="const"/> <DYellow text="["/><MBlue text="val"/><White text=","/> <LYellow text="setVal"/><DYellow text="]"/> <White text="="/> 
              <LYellow text="useState"/><DYellow text="("/><LGreen text="0"/><DYellow text=")"/><White text=";"/></div>
            <div style={{paddingLeft: "15px"}}><Comment text="// val: current state"/></div>
            <div style={{paddingLeft: "15px"}}><Comment text="// setVal: function to set 'var' value"/></div>
            <div style={{paddingLeft: "15px"}}><Comment text="// useState(): set initial 'var' value"/></div>
          </div>



          <p style={{fontSize: "30px"}}>Rendering <span style={{color: "#ff4d4d"}}>useState</span></p>
          <p>Use the state variable in rendered component</p>

          <div className="content-box">
            <div>{displayDiv} <White text="My value: "/> {opCBracket}<MBlue text="val"/>{closeCBracket} &nbsp; {displayDivClose}</div>
          </div>



          <p style={{fontSize: "30px"}}>Update <span style={{color: "#ff4d4d"}}>useState</span></p>
          <p>To update our state, we use state updater function</p>

          <div className="content-box">

            <div>{displayDiv}&nbsp; <LYellow text="setVal"/><DYellow text="("/><TextColor text="abc"/><DYellow text=")"/><White text=";"/> &nbsp;{displayDivClose}</div>
            <div style={{paddingLeft: "15px"}}><Comment text="// set new value to 'val'"/></div>
            <div style={{paddingLeft: "15px"}}><Comment text="// 'val' value is now 'abc'"/></div>
          </div>



          <p style={{fontSize: "30px"}}>Using <span style={{color: "#ff4d4d"}}>useState </span>
              for Object</p>

          <p>Creating a state object using <span className='keyColor'>useState</span></p>
          <div className="content-box">
            <div><DBlue text="const"/> <DYellow text="["/><MBlue text="student"/><White text=","/> <LYellow text="setStudent"/><DYellow text="]"/> <White text="="/> <LYellow text="useState"/><DYellow text="("/>{opCBracket} </div>
            <div style={{paddingLeft: "15px"}}><MBlue text="name:"/> <TextColor text="Mike"/><White text=","/></div>
            <div style={{paddingLeft: "15px"}}><MBlue text="age:"/> <LGreen text="18"/><White text=","/> </div>
            <div style={{paddingLeft: "15px"}}><MBlue text="school:"/> <TextColor text="LHP"/> </div>
            <div>{closeCBracket}<DYellow text=")"/><White text=";"/></div>
          </div>

          <p>Rendering a property of the state object</p>
          <div className="content-box">
            {displayDiv} <White text="My name is:"/> {opCBracket}<MBlue text="student.name"/>{closeCBracket} {displayDivClose}
          </div>

          <p>Update a property of the state object <span style={{color: "green", backgroundColor: "#e6e6e6"}}>
            (only school changes value, other keys keep their old value)
          </span></p>
          <div className="content-box">
            <div><LYellow text="setStudent"/><DYellow text="("/><MBlue text="prev"/> <White text="="/> {opCBracket}</div>
            <div style={{paddingLeft: "15px"}}><Purple text="return"/> {opCBracket}<White text="..."/><MBlue text="prev"/><White text=","/> <MBlue text="school"/><White text=":"/> <TextColor text="Stanford"/>{closeCBracket} </div>
            {closeCBracket}<DYellow text=")"/><White text=";"/>
          </div> 

          <p><span style={{color: "goldenrod"}}>
              Notice: </span>This changes and keeps the <span className='keyColor'>
              school</span> property and delete other properties</p>
          <div className="content-box">
          <LYellow text="setStudent"/><DYellow text="("/>{opCBracket}<MBlue text="school:"/> <TextColor text="Stanford"/>{closeCBracket}<DYellow text=")"/><White text=";"/>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default UseStateHook;