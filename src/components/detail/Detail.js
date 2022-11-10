import React from "react";
import Navs from "./Navs";

const Detail = ({ selector }) => {
    
    return(
        <>
        <Navs />
        <h1>{selector}</h1>
        </>
    )
}

export default Detail