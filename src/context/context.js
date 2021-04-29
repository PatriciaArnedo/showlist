import React, { createContext } from "react"

//create the context object
const Context = createContext()



//create the context provider (component)
function ContextProvider({ children }) {

    return (
        <Context.Provider value="HELLO">
            {children}
        </Context.Provider>
    )
}


//export
export { Context, ContextProvider }