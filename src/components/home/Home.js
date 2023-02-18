import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Usecontext';
import Alljobs from '../cetegori/Alljobs';
import Cetegori from '../cetegori/Cetegori';
import Expereince from '../experience/Expereince';
import Fresher from '../fresser/Fresher';
import TopIT from '../topIT/TopIT';
import './Style.css'

const Home = () => {
    const {x} = useContext(AuthContext)
   // console.log(x);
    return (
        <div>
            <div className="header text-white">
            <div className="info">
                <h3 className='dot'> .</h3>
              <h5 className='text-xl py-2'>LOVE WHAT YOU DO? THOUSANDS ARE LOOKING FOR YOU!</h5> 
              <h1 className='text-5xl py-2'>10,650 Job Listed Here!</h1> 
              <p className='py-2'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br /> there live the blind texts. brSeparated they live in Bookmarksgrove right at the coast of the<br /> Semantics,  a large language ocean.</p>
             <Link to='/jobpost'> <button className='btn btn-primary '>Post a job</button></Link>
             <a href='#cetegori' ><button className='btn btn-secondary mt-5 mx-3' >Want a job</button></a> 
             </div>
            </div>
             <div id="cetegori">
             <div className="jobinfo">
                <h1 className='text-4xl py-3 font-semibold p-8'>Discover jobs for you</h1>           
                    <a href='#fresher'>
                      <button className='btn btn-error btn-sm '>Fresher</button>
                    </a>
                    
                    <a href='#expreince'>
                      <button className='btn btn-error btn-sm '>Expreince</button>
                    </a>
                    <a href='#topit'>
                      <button className='btn btn-error btn-sm '>Top IT</button>
                    </a>
                </div>
                </div> 
             <h1 id='fresher' className='text-3xl p-3 py-6'>Fresher Jobs</h1> 
              <Alljobs />
              <div className="jobitem">
             <h1 id='expreince' className='text-3xl p-4 py-12'>Expreince Jobs</h1> 
              <Expereince />
             <h1 id='topit' className='text-3xl p-4 py-12'>Top IT </h1> 
              <TopIT />
             </div>
               
           
            
        </div>
    );
};

export default Home;