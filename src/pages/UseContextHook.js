import './App.css';
import React from "react";
import { Cmp, DBlue, MBlue, Purple, DYellow, LYellow, White, Grey, TextColor } from "./additionalComponents/ColoringComponents"
import { PageTitle } from "./additionalComponents/HeadTitle"

const displayDiv = <span><Grey text="<"/><DBlue text="div"/><Grey text=">"/></span>;
const displayDivClose = <span><Grey text="<"/><DBlue text="/div"/><Grey text=">"/></span>;
const opCBracket = <DYellow text="{"/>;
const closeCBracket = <DYellow text="}"/>;
const op = <Grey text="<"/>,   ed = <Grey text=">"/>;

function UseContextHook(){

  return(
    <>
    <div style={{width: 1351, marginLeft: "165px"}}>
        <PageTitle title="useContext"/>
        <div>


        <div style={{marginLeft: "150px", marginRight: "150px"}}>
          
                <p>The <span className='keyColor'>useRef</span> Hook allows users to manage state globally.</p>
                <p>It is especially useful to manage state between deeply nested components.</p>

                <p style={{fontSize: "30px"}}>Problem</p>

                <p>To illustrate, we have many nested components. The component at the top and the bottom 
                    need the access to the state.
                </p>
                <p>To do this without the Context Hook, we will need to pass the state as "props" through 
                    each nested component. This process is called "prop drilling".
                </p>
                <br/>


                
                <p>Passing "props" through nested components:</p>


                <div className="content-box">
                    <div><DBlue text="function"/> <LYellow text="Component1"/><DYellow text="()"/> {opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><DBlue text="const"/> <DYellow text="["/><MBlue text="user"/><White text=","/> <LYellow text="setUser"/><DYellow text="]"/> <White text="="/> <LYellow text="useState"/><DYellow text="("/><TextColor text="Michael"/><DYellow text=")"/><White text=";"/></div>
                    <br/>
                    <div style={{paddingLeft: "15px"}}><Purple text="return ("/></div>
                    <div style={{paddingLeft: "30px"}}>{displayDiv}</div>
                    <div style={{paddingLeft: "45px"}}>
                        {op}<DBlue text="h1"/>{ed}{opCBracket}<span style={{color: "#CE9178"}}>`Hello</span> <DYellow text="$"/>{opCBracket}<MBlue text="user"/>{closeCBracket}<span style={{color: "#CE9178"}}>!`</span>{closeCBracket}{op}<Grey text="/"/><DBlue text="h1"/>{ed}
                    </div>
                    <div style={{paddingLeft: "45px"}}>
                        {op}<Cmp text="Component2"/> <MBlue text="user"/> <White text="="/> {opCBracket}<MBlue text="user"/>{closeCBracket} <Grey text="/"/>{ed}
                    </div>
                    <div style={{paddingLeft: "30px"}}>{displayDivClose}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text=")"/><White text=";"/></div>
                    <div>{closeCBracket}</div>

                    <br/>

                    <div><DBlue text="function"/> <LYellow text="Component2"/><DYellow text="()"/> {opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text="return ("/></div>
                    <div style={{paddingLeft: "30px"}}>{displayDiv}</div>
                    <div style={{paddingLeft: "45px"}}>
                        {op}<DBlue text="h1"/>{ed}<White text="Component 2"/>{op}<Grey text="/"/><DBlue text="h1"/>{ed}
                    </div>
                    <div style={{paddingLeft: "45px"}}>
                        {op}<Cmp text="Component3"/> <MBlue text="user"/> <White text="="/> {opCBracket}<MBlue text="user"/>{closeCBracket} <Grey text="/"/>{ed}
                    </div>
                    <div style={{paddingLeft: "30px"}}>{displayDivClose}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text=")"/><White text=";"/></div>
                    <div>{closeCBracket}</div>

                    <br/>

                    <div><DBlue text="function"/> <LYellow text="Component3"/><DYellow text="()"/> {opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text="return ("/></div>
                    <div style={{paddingLeft: "30px"}}>{displayDiv}</div>
                    <div style={{paddingLeft: "45px"}}>
                        {op}<DBlue text="h1"/>{ed}<White text="Component 3"/>{op}<Grey text="/"/><DBlue text="h1"/>{ed}
                    </div>
                    <div style={{paddingLeft: "45px"}}>
                        {op}<Cmp text="Component4"/> <MBlue text="user"/> <White text="="/> {opCBracket}<MBlue text="user"/>{closeCBracket} <Grey text="/"/>{ed}
                    </div>
                    <div style={{paddingLeft: "30px"}}>{displayDivClose}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text=")"/><White text=";"/></div>
                    <div>{closeCBracket}</div>

                    <br/>

                    <div><DBlue text="function"/> <LYellow text="Component4"/><DYellow text="()"/> {opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text="return ("/></div>
                    <div style={{paddingLeft: "30px"}}>{displayDiv}</div>

                    <div style={{paddingLeft: "45px"}}>
                        {op}<DBlue text="h1"/>{ed}<White text="Component 4"/>{op}<Grey text="/"/><DBlue text="h1"/>{ed}
                    </div>
                    <div style={{paddingLeft: "45px"}}>
                        {op}<DBlue text="h1"/>{ed}{opCBracket}<span style={{color: "#CE9178"}}>`Hello</span> <DYellow text="$"/>{opCBracket}<MBlue text="user"/>{closeCBracket}<span style={{color: "#CE9178"}}>!`</span>{closeCBracket}{op}<Grey text="/"/><DBlue text="h1"/>{ed}
                    </div>
                    
                    <div style={{paddingLeft: "30px"}}>{displayDivClose}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text=")"/><White text=";"/></div>
                    <div>{closeCBracket}</div>
                </div>
          
                <p>Even though components 2 and 3 did not need the state, they had to pass the state along 
                    so that it could reach component 4.
                </p>


                
                <p style={{fontSize: "30px"}}>The Solution</p>
                <p>The solution is to create context.</p>

                <p style={{fontSize: "25px"}}>Create Context</p>
                <p>To create context, you must import <span className='keyColor'>createContext</span> and 
                    initialize it:</p>
                <div className='content-box'>
                    <div><Purple text="import"/> {opCBracket} <MBlue text="createContext"/> {closeCBracket} <Purple text="from"/> <TextColor text="react"/></div>
                    <br/>
                    <DBlue text="const"/> <MBlue text="UserContext"/> <White text="="/> <LYellow text="createContext"/><DYellow text="()"/><White text=";"/>
                </div>
                <p>Next, we'll use the Context Provider to wrap the tree of components that 
                    need the state Context.
                </p>

                <p style={{fontSize: "25px"}}>Context Provider</p>
                <p>Wrap child components in the Context Provider and supply the state value.</p>
                <div className='content-box'>
                <div><DBlue text="function"/> <LYellow text="Component1"/><DYellow text="()"/> {opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><DBlue text="const"/> <DYellow text="["/><MBlue text="user"/><White text=","/> <LYellow text="setUser"/><DYellow text="]"/> <White text="="/> <LYellow text="useState"/><DYellow text="("/><TextColor text="Michael"/><DYellow text=")"/><White text=";"/></div>
                    <br/>
                    <div style={{paddingLeft: "15px"}}><Purple text="return ("/></div>
                    <div style={{paddingLeft: "30px"}}>{op}<Cmp text="UserContext.Provider"/> <MBlue text="value"/> <White text="="/> {opCBracket}<MBlue text="user"/>{closeCBracket}{ed}</div>
                    <div style={{paddingLeft: "45px"}}>
                        {op}<DBlue text="h1"/>{ed}{opCBracket}<span style={{color: "#CE9178"}}>`Hello</span> <DYellow text="$"/>{opCBracket}<MBlue text="user"/>{closeCBracket}<span style={{color: "#CE9178"}}>!`</span>{closeCBracket}{op}<Grey text="/"/><DBlue text="h1"/>{ed}
                    </div>
                    <div style={{paddingLeft: "45px"}}>
                        {op}<Cmp text="Component2"/> <MBlue text="user"/> <White text="="/> {opCBracket}<MBlue text="user"/>{closeCBracket} <Grey text="/"/>{ed}
                    </div>
                    <div style={{paddingLeft: "30px"}}>{op}<Grey text="/"/><Cmp text="UserContext.Provider"/>{ed}</div>
                    <div style={{paddingLeft: "15px"}}><Purple text=")"/><White text=";"/></div>
                    <div>{closeCBracket}</div>
                </div>
                <p>Now all components in this tree will have access to the <span className='keyColor'>user</span> Context.</p>

                <p style={{fontSize: "25px"}}>Use the <span style={{color: '#ff4d4d'}}>useContext</span> Hook</p>
                <p>In order to use the Context in a child component, we need to access it using 
                    the <span className='keyColor'>useContext</span> Hook.
                </p>

                <p>First, import the <span className='keyColor'>useContext</span>:</p>
                <div className='content-box'>
                    <Purple text="import"/> {opCBracket} <MBlue text="useState"/><White text=","/> <MBlue text="createContext"/><White text=","/> <MBlue text="useContext"/> {closeCBracket} <Purple text="from"/> <TextColor text="react"/>
                </div>

                <p>Then you can access the user Context in all components:</p>
                <div className='content-box'>
                <div><DBlue text="function"/> <LYellow text="Component4"/><DYellow text="()"/> {opCBracket}</div>
                    <div style={{paddingLeft: "15px"}}><DBlue text="const"/> <MBlue text="user"/> <White text="="/> <LYellow text="useContext"/><Purple text="("/><MBlue text="UserContext"/><Purple text=")"/></div>
                    <div style={{paddingLeft: "15px"}}><Purple text="return ("/></div>
                    <div style={{paddingLeft: "30px"}}>{displayDiv}</div>

                    <div style={{paddingLeft: "45px"}}>
                        {op}<DBlue text="h1"/>{ed}<White text="Component 4"/>{op}<Grey text="/"/><DBlue text="h1"/>{ed}
                    </div>
                    <div style={{paddingLeft: "45px"}}>
                        {op}<DBlue text="h1"/>{ed}{opCBracket}<span style={{color: "#CE9178"}}>`Hello</span> <DYellow text="$"/>{opCBracket}<MBlue text="user"/>{closeCBracket}<span style={{color: "#CE9178"}}>!`</span>{closeCBracket}{op}<Grey text="/"/><DBlue text="h1"/>{ed}
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

export default UseContextHook;