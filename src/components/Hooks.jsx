import React, { useState } from 'react'

function Hooks() {

    let [count,setcount]=useState("0")

    let update=()=>{
        setcount(++count)
    }

    let update1=()=>{
        setcount(--count)
    }




    let [name,setname]=useState("jatin")

    let groot=()=>{
        setname("nirmal")
    }

  return (
    <>

       <h1>hooks component</h1>
       {/* 1. useState hook :  */}

       <h1>count : {count}</h1>
       <button onClick={update}>click increase</button>
       <button onClick={update1}>click decrease</button>

       <h1>my name is {name}</h1>
       <button onClick={groot}>click here</button>

      
    </>
  )
}

export default Hooks
