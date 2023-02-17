import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Usecontext';

const Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext)
  //console.log(user?.email);
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
                <Link to='/'>Home</Link>
             </li>
            <li>
            <Link >About</Link>
             </li>
            <li>
            <Link >Contact Us</Link>
             </li>           
             {
                user ? 
                <li> <button onClick={logOutUser} className='btn btn-sm btn-info lg:mt-2 py-2 text-white rounded-md'>Logout</button> </li>
                : 
                <>
                 <li>
                <Link to='/signup'>SignUp</Link>
                </li>
                <li>
                <Link to='/signin'>SignIn</Link>
                </li>
            </>
              }
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-3xl font-semibold">Job-Portal</Link>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
                <Link to='/'>Home</Link>
             </li>
            <li>
            <Link >About</Link>
             </li>
            <li>
            <Link >Contact Us</Link>
             </li>           
              {
                user ? 
                <li> <button onClick={logOutUser} className='btn btn-sm btn-info lg:mt-2 py-2 text-white rounded-md'>Logout</button> </li>
                : 
                <>
                 <li>
                <Link to='/signup'>SignUp</Link>
                </li>
                <li>
                <Link to='/signin'>SignIn</Link>
                </li>
            </>
              }
             
          </ul>
        </div>
        {
          user ? 
          <div className="navbar-end">
        <a className="mx-5 font-medium">{user?.displayName}</a>
      </div>  : 
      null
        }
        
      </div>
           
    );
};

export default Navbar;