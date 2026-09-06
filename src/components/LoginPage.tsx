
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card,  CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";


const USER_DATA = [
  {id:1,name:"Ram", email:"Ram@gmail.com",password:"12ab"},
  {id:2,name:"Ram2", email:"Ram1@gmail.com",password:"12ab"},
  {id:3,name:"Ram3", email:"Ram2@gmail.com",password:"12ab"},
  {id:4,name:"Ram4", email:"Ram3@gmail.com",password:"12ab"},
]






const LoginPage = () => {
const [email,setEmail] =useState("")
const[password,setPassword] = useState("")
const navigate = useNavigate()

const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault()
  let isFound = false
  for (let index = 0; index < USER_DATA.length; index++) {
    const element = USER_DATA[index];
    if(email===element.email && password===element.password){ 
      isFound=true;
      window.alert("Login succusesfull")
      navigate('/profile')


    }
    
  }



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
                <Input type="email" onChange={(e)=>{setEmail(e.target.value)}} className="border border-purple-500"/>
              </div>
              
            </div>
            <div className="mt-2">
              <div className="flex mb-2">
                <Label >Password</Label>
                <p className="ml-auto inline-block underline-offset-2 hover:underline ">Forget Passrword</p>
              </div>
              <div>
                <Input type="passwrd" onChange={(e)=>{setPassword(e.target.value)}} className="border border-purple-500"/>
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