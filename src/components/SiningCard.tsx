import { Button } from "./ui/button"
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"


const SiningCard = () => {
  return (
    <Card className="grid w-90 h-90 mx-auto ">
        <CardHeader >
        <CardTitle>Singin Page</CardTitle>
        <CardDescription>Enter your information</CardDescription>
        <CardAction>
            <Button variant={"outline"} onClick={()=>(setPage("login"))}>Login Page</Button>
        </CardAction>
        </CardHeader>
        <CardContent className="py-5 ">
            <form>
                <div className="">
                    <div className="">
                        <Label>Email</Label>
                        <Input type="email" placeholder="enter your Email"></Input>
                    </div>
                    <div className="pt-5">
                        <Label >Password</Label>
                        <Input type="password"  placeholder="enter yor password"></Input>
                    </div>
                    <div className="pt-5">
                        <Label>Conform Password</Label>
                        <Input type="password" placeholder="conform Password"></Input>
                    </div>
                    <CardFooter className="pt-5">
                        
                        <Button className="w-full">singup</Button>
                       
                    </CardFooter>
                    
                </div>
            </form>
            
        </CardContent>
    </Card>
  )
}

export default SiningCard