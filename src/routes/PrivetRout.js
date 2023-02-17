import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Usecontext';

const PrivetRout = ({children}) => {
    const {user, loding} = useContext(AuthContext);
    const location = useLocation();
   
    if(loding){
        return <div className="w-80 mx-auto py-12">
            <progress className="progress w-80  "></progress>
        </div> 
    };

   if(user){
    return children;
   };

   return <Navigate to='/signin' state={{from: location}} replace></Navigate>
};

export default PrivetRout;