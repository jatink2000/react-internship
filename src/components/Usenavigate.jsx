import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Usenavigate() {

    let [data,setdata]=useState({})
   let go= useNavigate()


    let inputvalue=(e)=>{
        setdata(
            {...data,[e.target.name]:e.target.value}
        )
    }

    let login=()=>{
        if(data.email=="a@gmail.com" && data.password=="123"){
            alert("login")
            go("/Allstudents",{state:{data}})
        }
        else{
            alert("invalid user")
        }
    }

    return (
        <div>
            <h1>Usenavigate hook</h1>

            <label>email:</label>
            <input type='email' placeholder='enter your email' name='email' onChange={inputvalue}/><br></br>
             <label>password:</label>
            <input type='password' placeholder='enter your password' name='password' onChange={inputvalue}/>
            <button onClick={login}>login</button>
            
        </div>
    )
}
export default Usenavigate