import { createBrowserRouter } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import ProfilePage from "./components/ProfilePage"
export const router = createBrowserRouter(
    [
        {path:'/',element:<LoginPage/>},
        {path:'/profile', element:<ProfilePage/>}
    ]
)