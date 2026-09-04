
import { Button } from "./ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";



const LoginPage = () => {


  return (
    <>

    <Card className="grid w-90 h-90 m-auto ">
      <CardHeader>
        <CardTitle>Login Page</CardTitle>
        <CardDescription>
          Enter your information
        </CardDescription>
       
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid gap-4">
            <div>
              <Label>Email</Label>
              <Input type="email"/>
            </div>
            <div>
              <div className="flex">
                <Label>Password</Label>
                <p className="ml-auto inline-block underline-offset-2 hover:underline ">Forget Passrword</p>
              </div>
              <Input type="passwrd"/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-3">
        <Button type="submit" className="w-full">Login</Button>
       
      </CardFooter>
    </Card>
    </>
  )
}


export default LoginPage