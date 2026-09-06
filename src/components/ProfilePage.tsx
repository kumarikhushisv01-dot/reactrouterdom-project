import React, { useEffect, useState } from 'react'

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
    <p>{user?.id || 0}</p>
    <p>{user?.email || "Gest email"}</p>
    <p>{user?.name || "Guet User"}</p>
    </>
  )
}

export default ProfilePage