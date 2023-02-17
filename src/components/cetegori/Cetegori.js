import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Home from '../home/Home';
import Navbar from '../navbar/Navbar';
import './Style.css'

const Cetegori = () => {
    return (
        <div className='py-10'>        
            <div className="cetegory">
                <div className="x">
                <h1 className='text-3xl py-3 font-semibold'>Discover jobs for you</h1>
                <div className="list">
                    <Link to='/fresher'>
                      <button className='btn btn-error btn-sm '>Fresher</button>
                    </Link>
                    
                    <Link to='/expreince'>
                      <button className='btn btn-error btn-sm '>Expreince</button>
                    </Link>
                    <Link to='/topit'>
                      <button className='btn btn-error btn-sm '>Top IT</button>
                    </Link>
                </div></div>
            </div>
      
              <Outlet />
        </div>
    );
};

export default Cetegori;