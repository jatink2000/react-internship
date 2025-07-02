import React from 'react'
import { useParams } from 'react-router-dom'

function Useparams() {
   let {name,city}= useParams()

  return (
    <div>

    <h1>Useparams component</h1>

    <h1>my name is {name}</h1>
    <h1>my city name is {city}</h1>


      
    </div>
  )
}

export default Useparams
