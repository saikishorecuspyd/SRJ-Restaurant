import React from "react";
import { useRouteError } from "react-router-dom";

function Error(){
    const err = useRouteError();
    // console.log(err)
    return(
        <>
        <h1>{err.data}</h1>
        <h1>{err.status}</h1>
        <h2>{err.statusText}</h2>
        </>
    )
}

export default Error