import React, { useEffect, useState } from 'react'
import { Card } from './ui/card'
import { Outlet } from 'react-router-dom'

const ProfilePage = () => { 
  const [user,setUser] = useState()
  function getUser (){
    const data = localStorage.getItem("user") 
    const value = JSON.parse(data)
    setUser(value)
  } 
  useEffect(()=>{
    getUser()
  },[])
  return (
    
    <> 
    <Card className='w-120 h-50 block mx-auto p-10 mt-30 border border-purple-600  text-2xl font-light  '>
      <p> your id : {user?.id || 0}</p>
      <p> your email id : {user?.email || "Gest email"}</p>
      <p> your name : {user?.name || "Guet User"}</p>
    </Card>
    <Outlet/>
    
    </>
  )
}

export default ProfilePage