import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handleClick = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
        <div >
            <div className=' box-border P-4 text-center text-3xl m-4'>
            <h2 className='text-center text-4xl'>Login</h2>
            <input type="text" name="" id="" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" name="" id="" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleClick} type="submit">Submit</button>
        </div>
        </div>
    )
}

export default Login