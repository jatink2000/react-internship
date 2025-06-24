import React, { useState } from 'react'

function Usestate() {
    // let [name,setname]=useState("")

    // let inputvalue=(e)=>{
    //     setname(e.target.value)
    // }



    // let [email,setemail]=useState("")

    // let emailvalue=(e)=>{
    //     setemail(e.target.value)
    // }


    //  let [password,setpassword]=useState("")

    // let passwordvalue=(e)=>{
    //     setpassword(e.target.value)
    // }



    // single state ------------
   let [data,setdata]= useState({})

   let inputvalue=(e)=>{
    setdata({
       ...data,[e.target.name]:e.target.value
    })
   }


    return (
        <>
            <h1>Usestate component</h1>
            <input type='text' placeholder='enter your name' name='fullname' onChange={inputvalue}/>
            <p>your name is {data.fullname}</p>
            <input type='email' placeholder='enter your email' name='email' onChange={inputvalue}/>
            <p>your email is {data.email}</p>
            <input type='password' placeholder='enter your password' name='password' onChange={inputvalue}/>
            <p>your password is {data.password}</p>
            <input type='number' placeholder='enter your number' name='number' onChange={inputvalue}/>
            <p>your number is {data.number}</p>
            <input type='address' placeholder='enter your address' name='address' onChange={inputvalue}/>
            <p>your address is {data.address}</p>

        </>
    )
}

export default Usestate
