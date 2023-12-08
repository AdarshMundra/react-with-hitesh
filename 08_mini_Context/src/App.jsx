import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1 className=' text-center bg-yellow-900 text-white'>Hello</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App