import React from "react";

function Groot(props) {
    console.log(props)
    return (
        <>
            <h1>Groot component</h1>
            <p>this my my webpage</p>
            <h2>{2 + 4}</h2>

            <img src={props.myimg}/>

            
        </>
    )
}

export { Groot }