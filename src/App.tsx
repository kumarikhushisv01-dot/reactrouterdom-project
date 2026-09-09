
import {  RouterProvider } from "react-router-dom"
import { router } from "./router"
import { Toaster } from "./components/ui/sonner"




const App = () => {
  
  return (
    <> 
    <RouterProvider router={router}/>
    <Toaster position="top-right" closeButton={true} richColors={true}/>
   
    </>

   
  )
}

export default App