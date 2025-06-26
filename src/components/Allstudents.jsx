import React from "react";

import { ourstudents } from "../json/Students";
import "../css/Allstudents.css"
import { useLocation } from "react-router-dom";

function Allstudents(){

    let loc=useLocation()
    // console.log(loc.state.data.email)

    return(
        <>
            <h1 className="tech">Allstudents component</h1>
            <h1>Hi! {loc.state.data.email}</h1>

            <table border={1}>
                <tr>
                    <th>student name</th>
                    <th>student course</th>
                    <th>student email</th>
                    <th>student city</th>
                    <th>student contact</th>
                </tr>

                {ourstudents.map((data)=>{
                    return(
                        <>
                            <tr>
                                <td>{data.studentname}</td>
                                <td>{data.course}</td>
                                <td>{data.email}</td>
                                <td>{data.city}</td>
                                <td>{data.contact}</td>
                            </tr>

                        </>
                    )
                })}
            </table>



        </>
    )
}

export{Allstudents}