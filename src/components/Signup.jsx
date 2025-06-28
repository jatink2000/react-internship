import React, { useState } from 'react'

function Signup() {
    let [userdata, setuserdata] = useState({})

    let inputvalue = (e) => {
        setuserdata(
            { ...userdata, [e.target.name]: e.target.value }
        )
    }


    let signup = () => {
        let alreadyusers = JSON.parse(localStorage.getItem("signupdata")) || []




        let alreadyemail = alreadyusers.filter(data => data.email == userdata.email)

        let existuser = alreadyemail[0]

        if (existuser) {
            alert("already signup")
        }
        else {
            alreadyusers.push(userdata)
            localStorage.setItem("signupdata", JSON.stringify(alreadyusers))
        }

    }

    return (
        <div>
            <h1>signup component</h1>
            <label>First name</label>
            <input type='text' placeholder='enter your first name' name='firstname' onChange={inputvalue} />
            <label>last name</label>
            <input type='text' placeholder='enter your last name' name='lastname' onChange={inputvalue} />
            <label>email</label>
            <input type='email' placeholder='enter your email' name='email' onChange={inputvalue} />
            <label>password</label>
            <input type='password' placeholder='enter your password' name='password' onChange={inputvalue} />

            <button onClick={signup}>signup</button>
        </div>
    )
}

export default Signup





// input value : usestate 
// gettiem : localStorage access 

// filter : email object inputemail==localStorage.email 
// users: if(inputemail==users.email && inputpassword==users.password){
//     navigate 
// }
// else{
//     alert("invalid user")
// }
