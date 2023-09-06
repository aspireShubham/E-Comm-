
import React, { useState } from 'react'

type AuthUser = {
    name:string,
    email:string
}

export default function LoggedIn ()  {

    const [logIn,setlogIn] = useState<boolean>(false)

    // const [user,setUser] = useState<AuthUser | null>(null)
    const [user,setUser] = useState({} as AuthUser)


    const handleLoggedIn = () => {

        setUser({
            name:'shubham',
            email: 'shubham@111'
        })
        setlogIn(true)
    }

    const handleLoggedOut = () => {
        // setUser(null)   
        setlogIn(false)
    }

    return (
        <div>

      <button onClick={handleLoggedIn} >Log-In</button>
      <button onClick={handleLoggedOut} >Log-Out</button>

      <div>user is {logIn ? 'log-In' : 'log-Out'}</div>

     <div>{user?.name} {user?.email}</div>
     <div>{user.name} {user.email}</div>


        </div>
    )
}