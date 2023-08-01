import './App.css';
import React from "react";
import { Comment, DBlue, MBlue, Purple, DYellow, LYellow, LGreen, White, Grey, TextColor } from "./additionalComponents/ColoringComponents"
import { PageTitle } from "./additionalComponents/HeadTitle"

const displayDiv = <span><Grey text="<"/><DBlue text="div"/><Grey text=">"/></span>;
const displayDivClose = <span><Grey text="<"/><DBlue text="/div"/><Grey text=">"/></span>;
const opCB = "{";
const edCB = "}";
const opCBracket = <DYellow text="{"/>;
const closeCBracket = <DYellow text="}"/>;
const op = <Grey text="<"/>,   ed = <Grey text=">"/>;
const colon = ":";

function UseRefHook(){

  return(
    <>
    <div style={{width: 1351, marginLeft: "165px"}}>
        <PageTitle title="useRef"/>

        <div>


            <div style={{marginLeft: "150px", marginRight: "150px"}}>
          
                <p>The <span className='keyColor'>useRef</span> Hook allows users to persist values 
                between renders.</p>

                <p style={{fontSize: "30px"}}>Initialize <span style={{color: "#ff4d4d"}}>useRef</span></p>

                <p>We initialize useEffect by calling <span className='keyColor'>useRef()</span></p>
                <p><span className='keyColor'>useRef</span> only returns one value like an object:</p>
                <ul>
                    <li><div className='keyColor'>{op}object{ed}.current</div></li>
                </ul>




                <div className="content-box">
                    <div><DBlue text="const"/> <MBlue text="val"/> <White text="="/> <LYellow text="useRef"/><DYellow text="("/><LGreen text="0"/><DYellow text=")"/><White text=";"/></div>
                    <div style={{paddingLeft: "15px"}}><Comment text="// initialize useRef Hook"/></div>
                    <div style={{paddingLeft: "15px"}}><Comment text="// 'val' initial value is 0"/></div>
                </div>
                <p>This is similar to: <span className='keyColor'>const var = 
                {opCB}current{colon} 0{edCB};</span></p>


                <p style={{fontSize: "30px"}}><span style={{color: "#ff4d4d"}}>useRef</span> does not cause 
                re-renders</p>
                <p>Unlike to <span className='keyColor'>useState</span>, <span className='keyColor'>useRef</span> does 
                not cause re-render.</p>


                <div className="content-box">
                    <div><DBlue text="function"/> <LYellow text="App"/><DYellow text="()"/>{opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><DBlue text="const"/> <DYellow text="["/><MBlue text="inputValue"/>, <LYellow text="setInputValue"/><DYellow text="]"/> <White text="="/> <LYellow text="useState"/><DYellow text="("/><TextColor text=""/><DYellow text=")"/><White text=";"/></div>
                    <div style={{paddingLeft: "15px"}}><DBlue text="const"/> <MBlue text="count"/> <White text="="/> <LYellow text="useRef"/><DYellow text="("/><LGreen text="0"/><DYellow text=")"/><White text=";"/></div>
                    <br/>
                    <div style={{paddingLeft: "15px"}}><LYellow text="useEffect"/><DYellow text="("/><Purple text="()"/> <DBlue text="=>"/> {opCBracket}</div>
                    <div style={{paddingLeft: "30px"}}><MBlue text="count.current"/> <White text="="/> <MBlue text="count.current"/> <White text="+"/> <LGreen text="1"/><White text=";"/></div>
                    <div style={{paddingLeft: "15px"}}>{closeCBracket}<DYellow text=")"/><White text=";"/></div>

                    <div style={{paddingLeft: "15px"}}><Purple text="return ("/></div>
                    <div style={{paddingLeft: "30px"}}>{displayDiv}</div>
                    <div style={{paddingLeft: "45px"}}>{op}<DBlue text="input"/></div>
                    <div style={{paddingLeft: "60px"}}><MBlue text="type"/> <White text="="/> <TextColor text="text"/></div>
                    <div style={{paddingLeft: "60px"}}><MBlue text="value"/> <White text="="/> {opCBracket}<TextColor text="inputValue"/>{closeCBracket}</div>
                    <div style={{paddingLeft: "60px"}}><MBlue text="onChange"/><White text="="/>{opCBracket}<DYellow text="("/><MBlue text="e"/><DYellow text=")"/>
                        <DBlue text="=>"/> <LYellow text="setInputValue"/><DYellow text="("/><MBlue text="e"/><White text="."/><MBlue text="target"/><White text="."/><MBlue text="value"/><DYellow text=")"/>{closeCBracket}<Grey text="/>"/></div>


                    <div style={{paddingLeft: "45px"}}><White text="Render Count:"/> {op}<DBlue text="h1"/>{ed}&nbsp;
                        {opCBracket}<MBlue text="count.current"/>{closeCBracket} &nbsp; {op}<DBlue text="/h1"/>{ed}</div>
                    <div style={{paddingLeft: "30px"}}>{displayDivClose}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text=")"/><White text=";"/> </div>
                    <div>{closeCBracket}</div>
                </div>
          
                <p>Use <span className='keyColor'>useRef</span> to 
                    track <span className='keyColor'>count</span> value without getting into infinite 
                    re-renders like <span className='keyColor'>useState</span>.</p>


                
                <p style={{fontSize: "30px"}}>Accessing DOM Elements</p>
                <p>We can add a <span className='keyColor'>ref</span> attribute to an element 
                to access it directly in DOM.</p>

                <div className='content-box'>
                    <div><DBlue text="function"/> <LYellow text="App"/><DYellow text="()"/>{opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><DBlue text="const"/> <MBlue text="inputElement"/> <White text="="/> <LYellow text="useRef"/><Purple text="()"/><White text=";"/></div>

                    <div style={{paddingLeft: "15px"}}><DBlue text="const"/> <MBlue text="focusInput"/> <White text="="/> <Purple text="()"/> <DBlue text="=>"/> {opCBracket}</div>
                    <div style={{paddingLeft: "30px"}}><MBlue text="inputElement"/><White text="."/><MBlue text="current"/><White text="."/><LYellow text="focus"/><DBlue text="()"/><White text=";"/></div>
                    <div style={{paddingLeft: "15px"}}>{closeCBracket}<White text=";"/></div>

                    <div style={{paddingLeft: "15px"}}><Purple text="return ("/></div>
                    <div style={{paddingLeft: "30px"}}>{displayDiv}</div>
                    <div style={{paddingLeft: "45px"}}>{op}<DBlue text="input"/> <MBlue text="type"/> <White text="="/> <TextColor text="text"/> <MBlue text="ref"/> <White text="="/> {opCBracket}<MBlue text="inputElement"/>{closeCBracket} <Grey text="/"/>{ed}</div>
                    <div style={{paddingLeft: "45px"}}>{op}<DBlue text="button"/> <MBlue text="onClick"/> <White text="="/> {opCBracket}<MBlue text="focusInput"/>{closeCBracket}{ed}<White text="Focus Input"/>{op}<Grey text="/"/><DBlue text="button"/>{ed}</div>
                    <div style={{paddingLeft: "30px"}}>{displayDivClose}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text=")"/><White text=";"/></div>
                    <div>{closeCBracket}</div>

                    <br/>
                    <div><Comment text="// assign 'ref' to the input tag, then access it directly in 'focusInput'"/></div>
                </div>
            </div>
        </div>
    </div>

    </>
  );
}

export default UseRefHook;