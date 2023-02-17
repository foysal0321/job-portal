import React from 'react';
import Navbar from '../../navbar/Navbar';
import toast, { Toaster } from 'react-hot-toast';
const Jobpost = () => {

    const addJob=(e)=>{
        e.preventDefault()
        const form = e.target;
        const position = form.job.value
        const company = form.company.value
        const logo = form.logo.value
        const location = form.location.value
        const cetagori = form.cetagori.value
        const jobInfo ={
            position: position,
            company : company,
            logo: logo,
            location: location,
            cetagori: cetagori
        }
        toast.success('Success ')
        console.log(jobInfo);
        form.reset()
    }
    return (
        <div>

            <div className='py-8 add-item'>
        <h2 className='text-3xl py-3 font-bold text-center'>Add A Job</h2>
        <form onSubmit={addJob} className='mx-5 form'> 
        <div className="flex flex-wrap">
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Job Position </span>
    </label>
        <input name='job' type="text" placeholder="position" className="input input-bordered w-full max-w-xs" required/>        
    </div>
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Company Name </span>
    </label>
        <input name='company' type="text" placeholder="company" className="input input-bordered w-full max-w-xs" required />        
    </div>
    </div>
    <div className="flex flex-wrap">
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Company logo </span>
    </label>
        <input name='logo' type="text" placeholder="company logo" className="input input-bordered w-full max-w-xs" />        
    </div>
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Location</span>
    </label>
        <input name='location' type="text" placeholder="location" className="input input-bordered w-full max-w-xs" required/>       
    </div>
    </div>
    <div className="flex flex-wrap">  
    
    
    </div>
    
    <div className="flex flex-wrap">
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Cetagory</span>
    </label>
    <select className="select select-bordered select-ghost w-full max-w-xs"
   name='cetagori' > 
        <option >Select cetagori</option>
              <option value="fresher">Fresher</option>  
              <option value="expreince">Expreince</option>  
              <option value="topIT">TopIT</option>  
        </select>
    </div>    
     </div>           
        <button className='btn btn-accent mx-2 mt-2'>Add Item</button>
        </form>
    </div>
        </div>
    );
};

export default Jobpost;