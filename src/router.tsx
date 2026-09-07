import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import ProfilePage from "./components/ProfilePage"
import ProfileEdite from "./components/ProfileEdite"

function ProtectedRoute (){
    const data = localStorage.getItem("user")
    const value = JSON.parse(data)
    const isLogin = value.islogin
    return isLogin ? <Outlet/> : <Navigate to={"/"} replace/>
}

function GuestUser  (){
      const data = localStorage.getItem("user")
    const value = JSON.parse(data)
    const isLogin = value.islogin
    return isLogin? <Navigate to={"/profile"} replace/>:<Outlet/>

}
export const router = createBrowserRouter(
    [
        {
            element:<ProtectedRoute/>,
            children:[{
               path:"/profile",element:<ProfilePage/>,
               children:[{
                path:"edite", element:<ProfileEdite/>
               }]
            }]
        },
        {
            element: <GuestUser/>,
            children:[{
                path:"/", element:<LoginPage/>
            }]
        }
    ]
)