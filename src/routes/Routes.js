import { createBrowserRouter } from "react-router-dom";
import ApplyFrom from "../components/apply/ApplyFrom";
import Cetegori from "../components/cetegori/Cetegori";
import Jobpost from "../components/cetegori/jobPost/Jobpost";
import Expereince from "../components/experience/Expereince";
import Fresher from "../components/fresser/Fresher";
import Home from "../components/home/Home";
import TopIT from "../components/topIT/TopIT";
import LogIn from "../log/LogIn";
import SignUp from "../log/SignUp";
import Main from "../lyout/Main";
import PrivetRout from "./PrivetRout";

export const router = createBrowserRouter([
    {
        path: '/',
        element : <Main />,
        children : [
            {
                path: '/',
                element: <Home />,
                children:[
                    {
                path: '/fresher',
                element: <Fresher />
            },
            {
                path: '/expreince',
                element: <Expereince />
            },
            {
                path: '/topit',
                element: <TopIT />
            },
                ]
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/signin',
                element: <LogIn />
            },
            {
                path: '/jobpost',
                element: <Jobpost />
            },
            {
                path: '/apply',
                element: <PrivetRout> <ApplyFrom /> </PrivetRout> 
            },
           
            
        ]
    }
])