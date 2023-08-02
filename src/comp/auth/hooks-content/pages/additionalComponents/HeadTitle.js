import React from "react";

function PageTitle({title}){

    return (
        <div>
            <p style={{backgroundColor: "lightgoldenrodyellow", fontSize: "50px",
                height: "175px", display:"flex", alignItems: "center", width: 1183,
                justifyContent: "center", borderBottom: "2px solid lightgrey", marginTop: "0px"}}>
            <span style={{color: "#ff4d4d"}}>{title}&nbsp;</span> Guide</p>
        </div>
    );
}

export {PageTitle};