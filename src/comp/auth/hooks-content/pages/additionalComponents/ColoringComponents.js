import React from "react";

function Cmp({text}) {return <span style={{color: "#4EC9B0"}}>{text}</span>}
export {Cmp};

function Comment({text}) {return <div style={{color: "#6A9955"}}>{text}</div>}
export {Comment};

function DBlue({text}) {return <span style={{color: "#569CD6"}}>{text}</span>}
export {DBlue};

function MBlue({text}) {return <span style={{color: "#4FC1FF"}}>{text}</span>}
export {MBlue};

function Purple({text}) {return <span style={{color: "#990073"}}>{text}</span>}
export {Purple};

function DYellow({text}) {return <span style={{color: "yellow"}}>{text}</span>}
export {DYellow};

function LYellow({text}) {return <span style={{color: "#DCDCAA"}}>{text}</span>}
export {LYellow};

function LGreen({text}) {return <span style={{color: "#B5CEA8"}}>{text}</span>}
export {LGreen};

function White({text}){return <span style={{color: "white"}}>{text}</span>}
export {White};

function Grey({text}){return <span style={{color: "#808080"}}>{text}</span>}
export {Grey};

function TextColor({text}){return <span style={{color: "#CE9178"}}>"{text}"</span>}
export {TextColor};
