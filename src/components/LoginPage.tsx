
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card,  CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";


const USER_DATA = [
  {id:1,name:"ram", email:"ram@gmail.com",password:"12ab" ,role:"user"},
  {id:2,name:"ram2", email:"ram1@gmail.com",password:"12ab" ,role:"user"},
  {id:3,name:"ram3", email:"ram2@gmail.com",password:"12ab" ,role:"admin"},
  {id:4,name:"ram4", email:"ram3@gmail.com",password:"12ab", role:"admin"}
]






const LoginPage = () => {
const [email,setEmail] =useState("")
const[password,setPassword] = useState("")
const navigate = useNavigate()

const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  if (!email || !password ){
      window.alert("Email and Password is requaired")
      return
    }

  const element = USER_DATA.find((user) => user.email === email.toLowerCase())
  if (!element) {
    window.alert("Account does not excist")
    return
  }

  if (password !== element.password) {
    window.alert("Password missmatch")
    return
  }

  window.alert("Login successfull")
  localStorage.setItem("user",JSON.stringify({id:element.id,email,name:element.name, islogin:true , role: element.role}))
  navigate(element.role === "admin" ? "/admin-profile" : "/profile")


}

  return (
    <>

    <Card className="grid w-90 h-90 m-auto border-2 border-purple-500 ">
        <form onSubmit={handleSubmit}>

      <CardHeader className="m-5">
        <CardTitle className="text-2xl text-purple-700 font-extrabold">Login Page</CardTitle>
        <CardDescription className="text-purple-500">
          Enter your information
        </CardDescription>
       
      </CardHeader>
      <CardContent className="mt-10 m-5 ">
          <div className="grid gap-4">
            <div>
              <Label>Email</Label>
              <div className="mt-2">
                <Input type="email" required onChange={(e)=>{setEmail(e.target.value)}} className="border border-purple-500"/>
              </div>
              
            </div>
            <div className="mt-2">
              <div className="flex mb-2">
                <Label >Password</Label>
                <p className="ml-auto inline-block underline-offset-2 hover:underline ">Forget Passrword</p>
              </div>
              <div>
                <Input type="password" required onChange={(e)=>{setPassword(e.target.value)}} className="border border-purple-500"/>
              </div>
              
            </div>
          </div>
        
      </CardContent>
      <CardFooter className="flex-col gap-3 mt-10 m-5 ">
        <Button type="submit" className="w-full bg-purple-600">Login</Button>
       
      </CardFooter>
      </form>
    </Card>
    </>
  )
}


export default LoginPage