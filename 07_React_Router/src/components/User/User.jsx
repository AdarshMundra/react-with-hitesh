import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const{userid} = useParams()
  return (
    <div className=' text-center text-4xl bg-zinc-800 text-yellow-300 p-5 '>User: {userid}</div>
  )
}

export default User