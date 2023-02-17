import React from 'react';
import './Style.css'

const Alljobs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1 alljobs">
            <div className="card  w-80 bg-base-300 shadow-xl">
            <div className="card-body">
            <h2 className="card-title">Frontend Development</h2>
            <div className="company flex">
                <img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-red-and-black-logo-png-image_5517319.jpg" alt="" />
                <p>Globe Solution Ltd.</p>
            </div>   
            <p>New York, USA</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Apply Now</button>
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
            <button className="btn btn-primary">Apply Now</button>
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
            <button className="btn btn-primary">Apply Now</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Alljobs;