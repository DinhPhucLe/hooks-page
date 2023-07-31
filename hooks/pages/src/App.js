import './App.css';
import React from "react";
import { useState } from "react";

const displayVar = "{var}";
const displayDiv = "<div>";
const displayDivClose = "</div>";
const opCBracket = "{";
const closeCBracket = "}";

function App(){

  return(
    <div>
      <div>
        <p style={{backgroundColor: "lightgoldenrodyellow", fontSize: "50px",
            height: "150px", display:"flex", alignItems: "center",
            justifyContent: "center", marginTop: "0px", borderBottom: "2px solid lightgrey"}}>
        <span style={{color: "#ff4d4d"}}>useState</span> Guide</p>
      </div>



      <div>
        <div style={{marginLeft: "350px"}}> {/**content bar */}
          <p style={{fontSize: "20px"}}> Hooks: </p>
          
        </div>



        <div style={{marginLeft: "350px"}}>
          <p style={{fontSize: "30px"}}>Initialize <span style={{color: "#ff4d4d"}}>useState</span></p>

          <p>We initialize useState by calling <span className='useStateColor'>useState</span></p>
          <p><span className='useStateColor'>useState</span> accept an initial state and return two values:</p>
          <ul>
            <li>The current state</li>
            <li>The update function</li>
          </ul>

          <div className="content-box">

            <div>const [var, setVar] = useState("");</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp; // var: current state</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp; // setValue: function to set "var" value</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp; // useState(""): set initial "var" value</div>
          </div>



          <p style={{fontSize: "30px"}}>Rendering <span style={{color: "#ff4d4d"}}>useState</span></p>
          <p>Use the state variable in rendered component</p>

          <div className="content-box">
            <div>{displayDiv} &nbsp; My value: {displayVar} &nbsp; {displayDivClose}</div>
          </div>



          <p style={{fontSize: "30px"}}>Update <span style={{color: "#ff4d4d"}}>useState</span></p>
          <p>To update our state, we use state updater function</p>

          <div className="content-box">

            <div>{displayDiv}&nbsp; setVar("abc"); &nbsp;{displayDivClose}</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp; // set new value to "var"</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp; // "var" value is now "abc"</div>
          </div>



          <p style={{fontSize: "30px"}}>Using <span style={{color: "#ff4d4d"}}>useState </span>
              for Object</p>

          <p>Creating a state object using <span className='useStateColor'>useState</span></p>
          <div className="content-box">
            const [student, setStudent] = useState({opCBracket} <br/>
              &nbsp;&nbsp;&nbsp;&nbsp; name: "Mike", <br/>
              &nbsp;&nbsp;&nbsp;&nbsp; age: "18", <br/>
              &nbsp;&nbsp;&nbsp;&nbsp; school: "LHP" <br/>
            {closeCBracket});
          </div>

          <p>Rendering a property of the state object</p>
          <div className="content-box">
            {displayDiv}&nbsp; My name is: {opCBracket}student.name{closeCBracket} &nbsp;{displayDivClose}
          </div>

          <p>Update a property of the state object <span style={{color: "green", backgroundColor: "#e6e6e6"}}>
            (only school changes value, other keys keep their old value)
          </span></p>
          <div className="content-box">
            setStudent(prev = {opCBracket}   <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;return {opCBracket}...prev, school: "Stanford"{closeCBracket} <br/>
            {closeCBracket});
          </div> 

          <p><span style={{color: "goldenrod"}}>
              Notice: </span>This changes and keeps the <span className='useStateColor'>
              school</span> property and delete other properties</p>
          <div className="content-box">
            setStudent({opCBracket}school: "Stanford"{closeCBracket});
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;