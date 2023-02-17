import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ApplyFrom = () => {

    const submit=(e)=>{
        e.preventDefault();

  const form = e.target;
  const email = form.email.value;
   
    toast.success('Success ')
    form.reset()

    }
    return (
        <div>
             <div className='py-8 add-item'>
        <h2 className='text-3xl py-3 font-bold text-center'>Apply Form</h2>
        <form onSubmit={submit}  className='mx-5 form'> 
        <div className="flex flex-wrap">
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Name </span>
    </label>
        <input name='name' type="text" placeholder="name" className="input input-bordered w-full max-w-xs" required/>        
    </div>
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Email</span>
    </label>
        <input name='email' type="email" placeholder="email" className="input input-bordered w-full max-w-xs" required />        
    </div>
    </div>
    <div className="flex flex-wrap">
    <div className="form-control w-full max-w-xs p-2">
    <label className="label">
        <span className="label-text">Resume </span>
    </label>
        <input name='logo' type="text" placeholder="resume" className="input input-bordered w-full max-w-xs" />        
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
        </select>
    </div>    
     </div>           
        <button className='btn btn-primary mx-2 mt-2'>Submit</button>
        </form>
    </div>
        </div>
        
    );
};

export default ApplyFrom;