import React, { createContext } from 'react'
import Component2 from './Component2'

let name = createContext() // step 1 
let city = createContext() // step 1 


function Component1() {
    
    return (
        <div>
            <h1>Component1</h1>

            <name.Provider value="jatin kumar">
                <city.Provider value="jaipur">
                    <Component2 />
                </city.Provider>
            </name.Provider>

        </div>
    )
}

export default Component1

export { name, city }
