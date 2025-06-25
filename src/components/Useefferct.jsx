import React, { useEffect, useState } from 'react'

function Useefferct() {

    let [count,setcount]=useState("0")
    let [name,setname]=useState([])
    let [filterdataapi,setfilterdataapi]=useState([])


    let increment=()=>{
        setcount(++count)
    }

    let groot=async()=>{
       let a=await fetch("https://fakestoreapi.com/products")
       let b=await a.json()
       setname(b)
       setfilterdataapi(b)
    }

    useEffect(() => {
        groot()
    }, [])
    


    // filter -----------
    let filterapi=(j)=>{
        let filtereddata=name.filter(data=> data.category==j)
        setfilterdataapi(filtereddata)
    }
    
  return (
    <div>
        <h1>Useefferct hook</h1>
        <h1>{count}</h1>
        <button onClick={increment}>+</button> <br></br>



    <button onClick={()=>filterapi("men's clothing")}>men's clothing</button>
    <button onClick={()=>filterapi("jewelery")}>jewelery</button>
    <button onClick={()=>filterapi("electronics")}>electronics</button>
    <button onClick={()=>filterapi("women's clothing")}>women's clothing</button>


        {filterdataapi.map((item)=>{
            return(
                <>
                <h1>our product</h1>
                    <img src={item.image}/>
                    <h4>{item.title}</h4>
                    <p>$ {item.price}</p>
                    <p>{item.rating.rate}</p>


                    <p>{item.category}</p>
                </>
            )
        })}

      
    </div>
  )
}

export default Useefferct
