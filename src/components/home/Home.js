import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Usecontext';
import Alljobs from '../cetegori/Alljobs';
import Cetegori from '../cetegori/Cetegori';
import './Style.css'

const Home = () => {
    const {x} = useContext(AuthContext)
   // console.log(x);
    return (
        <div>
            <div className="header text-white">
            <div className="info">
                <h3> .</h3>
              <h5 className='text-xl py-2'>LOVE WHAT YOU DO? THOUSANDS ARE LOOKING FOR YOU!</h5> 
              <h1 className='text-5xl py-2'>10,650 Job Listed Here!</h1> 
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br /> there live the blind texts. brSeparated they live in Bookmarksgrove right at the coast of the<br /> Semantics,  a large language ocean.</p>
             <Link to='/jobpost'> <button className='btn btn-primary '>Post a job</button></Link>
             <a href='#cetegori' ><button className='btn btn-secondary mt-5 mx-3' >Want a job</button></a> 
             </div>
            </div>
             <div id="cetegori"><Cetegori /></div> 
             
                <Alljobs />
           
            
        </div>
    );
};

export default Home;