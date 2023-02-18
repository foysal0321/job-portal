import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Alljobs from '../cetegori/Alljobs';
import './Style.css'

const Expereince = () => {
    const [data,setdata] = useState([])
    useEffect(()=>{
        fetch('expreince.json')
        .then(res=>res.json())
        .then(d=> setdata(d))
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1 expreincejob'>
            {
                data.map((item,i)=>{
                    return <div key={i} className="card  w-80 bg-base-300 shadow-xl">
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
        </div>
    );
};

export default Expereince;