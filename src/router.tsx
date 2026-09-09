import { createBrowserRouter, Navigate, Outlet } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import ProfilePage from "./components/ProfilePage"
import ProfileEdite from "./components/ProfileEdite"
import AdminProfilePage from "./components/AdminProfilePage"

function ProtectedRoute (){
    const data = localStorage.getItem("user")
    const value = JSON.parse(data)
    const isLogin = value?.islogin 
    const role = value?.role
    if (!isLogin){
        return <Navigate to={"/"} replace/>

    }
    if(role !== "user"){
        return <Navigate to={"/admin-profile"} replace/>
    }
    return <Outlet/>
}

function GuestUser  (){
      const data = localStorage.getItem("user")
    const value = JSON.parse(data)
    const isLogin = value?.islogin
    const role = value?.role
    if(isLogin){
        return <Navigate to={"/profile"}/>
    }
    return <Outlet/>
    //return isLogin? <Navigate to={"/profile"} replace/>:<Outlet/>
    
} 
function AdminRoute (){
     const data = localStorage.getItem("user")
    const value = JSON.parse(data)
    const isLogin = value?.islogin
    const role = value?.role
    console.log(value)
    if (!isLogin){
        return <Navigate to={"/"} replace/>

    }
    if(role !== "admin"){
        return <Navigate to={"/profile"} replace/>
    }
    return <Outlet/>


}
export const router = createBrowserRouter(
    [
        {
            element:<ProtectedRoute/>,
            children:[{
               path:"/profile",element:<ProfilePage/>,
               children:[{
                path:"edite", element:<ProfileEdite/>
               }],
            }, 
        ]
        },
        {element:<AdminRoute/>,
            children:[
                {
                    path:"/admin-profile", element:<AdminProfilePage/>
                }
            ]
        },
        {
            element: <GuestUser/>,
            children:[{
                path:"/", element:<LoginPage/>
            }]
        },
    ]
)