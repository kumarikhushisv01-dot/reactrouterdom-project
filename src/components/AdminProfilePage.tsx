import React, { useEffect, useState } from 'react'
import { Card } from './ui/card'
import { Outlet } from 'react-router-dom'
import { Button } from './ui/button'

const AdminProfilePage = () => { 
  const [user,setUser] = useState()
  function getUser (){
    const data = localStorage.getItem("user") 
    const value = JSON.parse(data)
    setUser(value)
  } 
  
  const handleLogout = ()=>{
    localStorage.removeItem("user")
    window.location.reload()

  }
  useEffect(()=>{
    getUser()
  },[])
  return (
    
    <> 
    <Card className='w-120 h-50 block mx-auto p-10 mt-30 border-2 border-purple-600  text-2xl font-light text-purple-950 '>
        <p>you are {user?.role}</p>
      <p> your id : {user?.id || 0}</p>
      <p> your email id : {user?.email || "Guest email"}</p>
      <p> your name : {user?.name || "Guest User"}</p>
    </Card>
    <Button onClick={handleLogout}>logout</Button>
    <Outlet/>
    
    </>
  )
}

export default AdminProfilePage