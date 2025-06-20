import React from "react";

function Propsclass(props){
    console.log(props)
    return(
        <>
            <h1>Propsclass component</h1>
            <h1>my name is {props.mydetils.name}</h1>
            <h1>my city is {props.mydetils.city}</h1>
            <h1>my email is {props.mydetils.email}</h1>
            <h1>my password is {props.mydetils.password}</h1>

            <img src={props.mydetils.img}/>



        </>
    )
}


export{Propsclass}