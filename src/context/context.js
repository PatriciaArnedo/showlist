import React, { createContext, useState } from "react"

//create the context object
const Context = createContext()



//create the context provider (component)
function ContextProvider({ children }) {

    const [username, setUsername] = useState("")

    const name = [username, setUsername]

    return (
        <Context.Provider value={ {username:name} }>
            {children}
        </Context.Provider>
    )
}

export { Context, ContextProvider }
