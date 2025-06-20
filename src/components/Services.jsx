import React from "react";

function Services({mydata}){
    return(
        <>
            <h1>Services component</h1>
            <h1>my name is {mydata.name}</h1>
            <h1>my city is {mydata.city}</h1>
            <h1>my email is {mydata.email}</h1>
            <h1>my password is {mydata.password}</h1>
            <img src={mydata.img}/>
        </>
    )
}
export{Services}