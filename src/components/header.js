import React, { useContext } from "react"
import { Context } from '../context/context'

const Header = () => {
    
    const [username, setUsername] = useContext(Context)
    return(
        <h1>Welcome {username.username}</h1>
    )

}

export default Header