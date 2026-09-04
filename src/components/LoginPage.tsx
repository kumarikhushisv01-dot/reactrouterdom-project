
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

    <Card className="grid w-90 h-90 m-auto ">
        <form onSubmit={handleSubmit}>

      <CardHeader>
        <CardTitle>Login Page</CardTitle>
        <CardDescription>
          Enter your information
        </CardDescription>
       
      </CardHeader>
      <CardContent>
          <div className="grid gap-4">
            <div>
              <Label>Email</Label>
              <Input type="email" onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
              <div className="flex">
                <Label >Password</Label>
                <p className="ml-auto inline-block underline-offset-2 hover:underline ">Forget Passrword</p>
              </div>
              <Input type="passwrd" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
          </div>
        
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button type="submit" className="w-full">Login</Button>
       
      </CardFooter>
      </form>
    </Card>
    </>
  )
}


export default LoginPage