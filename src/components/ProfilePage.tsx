import React, { useEffect, useState } from 'react'
import { Card } from './ui/card'

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
    <Card className='w-100 h-50 block mx-auto p-5 mt-30 border border-purple-600  text-2xl font-light  '>
      <p> your id : {user?.id || 0}</p>
      <p> your email id : {user?.email || "Gest email"}</p>
      <p> your name : {user?.name || "Guet User"}</p>
    </Card>
    
    </>
  )
}

export default ProfilePage