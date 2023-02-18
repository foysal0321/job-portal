import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Style.css'

const TopIT = () => {
    const [data,setdata] = useState([])

    useEffect(()=>{
        fetch('topit.json')
        .then(res=>res.json())
        .then(d=> setdata(d))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1 topit'>
            {
                data.map((item,i)=>{
                    return <div key={i} className="card  w-80 bg-base-300 shadow-xl">
                    <div className="card-body">
                    <h2 className="card-title">{item.company}</h2>
                    <div className="company flex">
                        <img src={item.logo} alt="" />
                    </div>  
                    <div className="flex">
                      <p>{item.location}</p>
                        </div> 
                        <div className="card-actions justify-end">
            <Link to={`/details/${item.id}`}> 
         <button className="btn btn-primary">View Details</button>
         </Link>
            </div>
                    
                </div>
                </div>
                })
            }
            
        </div>
    );
};

export default TopIT;