import './App.css';
import React from "react";



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

function CallbackMemo(){

  return(
    <>
    <div style={{width: 1351, marginLeft: "165px"}}>
        <div style={{backgroundColor: "lightgoldenrodyellow", fontSize: "50px",
            height: "175px", display:"flex", alignItems: "center", width: 1183, flexDirection: "row",
            justifyContent: "center", borderBottom: "2px solid lightgrey", marginTop: "0px"}}>
            <p><span style={{color: "#ff4d4d"}}>useCallback & useMemo</span> Guide</p>
        </div>



        <div>


            <div style={{marginLeft: "150px", marginRight: "150px"}}>
          
                <p>The <span className='keyColor'>useCallback</span> and <span className='keyColor'>useMemo</span> Hooks are similar. The main difference 
                is that <span className='keyColor'>useMemo</span> returns a memoized value and <span className='keyColor'>useCallback</span> returns a memoized function.</p>

                <p>Both Hooks are usually used to optimize the code.</p>


                
                <p style={{fontSize: "30px"}}><span style={{color: "#ff4d4d"}}>useCallback</span></p>
                
                <p>The <span className='keyColor'>useCallback</span> Hook returns a memoized callback function.</p>
                <p>This allows users to isolate resource intensive functions so that they will not automatically run on every renders. 
                   The <span className='keyColor'>useCallback</span> Hook only runs when its dependency value changes.</p>
                <p>In other words, this Hook will prevent a component to re-render unless its props change.</p>

                <br/>

                <p>Using <span className='keyColor'>useCallback</span> Hook for function:</p>
                <div className='content-box'>
                    <div><DBlue text="const"/> <DYellow text="["/><MBlue text="taskList"/><White text=","/> <LYellow text="setTaskList"/><DYellow text="]"/> <White text="="/> <LYellow text="useState"/><DYellow text="("/><DBlue text="["/><DBlue text="]"/><DYellow text=")"/><White text=";"/></div>

                    <br/>

                    <div><DBlue text="const"/> <LYellow text="addTask"/> <White text="="/> <LYellow text="useCallback"/><Purple text="("/><DBlue text="()"/> <MBlue text="=>"/> {opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><LYellow text="setTaskList"/><DYellow text="("/><Purple text="("/><MBlue text="t"/><Purple text=")"/> <MBlue text="=>"/> <Purple text="["/><White text="..."/><MBlue text="t"/><White text=","/> <TextColor text="New Task"/><Purple text="["/><DYellow text=")"/><White text=";"/></div>
                    <div>{closeCBracket}<White text=","/> <DBlue text="["/><MBlue text="taskList"/><DBlue text="]"/><Purple text=")"/><White text=";"/></div>
                </div>
                <p>Function <span className='keyColor'>addTask</span> will now only re-render 
                    when <span className='keyColor'>taskList</span> prop changes.</p>


                


                <p style={{fontSize: "30px"}}><span style={{color: "#ff4d4d"}}>useMemo</span></p>
                
                <p>The <span className='keyColor'>useMemo</span> Hook prevents element to recalculate unless its props change.</p>
                
                <div className='content-box'>
                    <div><DBlue text="function"/> <LYellow text="expensiveCalculation"/><DYellow text="("/><MBlue text="num"/><DYellow text=")"/> {opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text="for ("/><DBlue text="let"/> <MBlue text="i"/> <White text="="/> <LGreen text="0"/><White text=";"/> <MBlue text="i"/> {op} <LGreen text="1000"/><White text=";"/> <MBlue text="i"/><White text="++"/><Purple text=")"/> {opCBracket}</div>
                    <div style={{paddingLeft: "30px"}}><MBlue text="num"/><White text="+="/><LGreen text="1"/><White text=";"/></div>
                    <div style={{paddingLeft: "15px"}}>{closeCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text="return"/> <MBlue text="num"/><White text=";"/></div>
                    <div>{closeCBracket}<White text=";"/></div>

                    <br/>

                    <div><DBlue text="const"/> <MBlue text="calculation"/> <White text="="/> <LYellow text="useMemo"/><DYellow text="("/><Purple text="()"/> <MBlue text="=>"/> <LYellow text="expensiveCalculation"/><Purple text="("/><MBlue text="count"/><Purple text=")"/><White text=","/> <Purple text="["/><MBlue text="count"/><Purple text="]"/><DYellow text=")"/><White text=";"/></div>
                </div>
                <p>The <span className='keyColor'>expensiveCalculation</span> will only recalculate when count changes.</p>

                
                




                
            </div>
        </div>
    </div>

    </>
  );
}

export default CallbackMemo;