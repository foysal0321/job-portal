import React, { useEffect, useState } from 'react';
import './Style.css'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Alljobs = () => {

        const [data,setdata] = useState([])
        useEffect(()=>{
            fetch('data.json')
            .then(res=>res.json())
            .then(d =>setdata(d))
        },[])

    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1 alljobs">
            {
                data.map((item,i)=>{
                  return  <div key={i} className="card  w-80 bg-base-300 shadow-xl">
            <div className="card-body">
            <h2 className="card-title">{item.position}</h2>
            <div className="company flex">
                <img src={item.logo} alt="" />
                <p>{item.company}</p>
            </div>  
            <div className="flex">
              <p>{item.location}</p> 
                </div> 
            
            <div className="card-actions justify-end">
            <Link to='/apply'> 
         <button className="btn btn-primary">Apply Now</button>
         </Link>
            </div>
        </div>
        </div>
                })
            }
            
             {/* <div className="card w-80 bg-base-300 shadow-xl">
            <div className="card-body">
            <h2 className="card-title">Frontend Development</h2>
            <div className="company flex">
                <img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-red-and-black-logo-png-image_5517319.jpg" alt="" />
                <p>Globe Solution Ltd.</p>
            </div>   
            <p>New York, USA</p>
            <div className="card-actions justify-end">
            <Link to='/apply'> 
         <button className="btn btn-primary">Apply Now</button>
         </Link>
            </div>
        </div>
        </div>
            <div className="card w-80 bg-base-300 shadow-xl">
            <div className="card-body">
            <h2 className="card-title">Frontend Development</h2>
            <div className="company flex">
                <img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-red-and-black-logo-png-image_5517319.jpg" alt="" />
                <p>Globe Solution Ltd.</p>
            </div>   
            <p>New York, USA</p>
            <div className="card-actions justify-end">
           <Link to='/apply'> 
         <button className="btn btn-primary">Apply Now</button>
         </Link>
            </div>
        </div>
        </div> */}
        </div> 
    );
};

export default Alljobs;