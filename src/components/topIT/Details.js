import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    return (
        <div>
           <img src="https://pridesys.com/wp-content/uploads/2022/08/Pridesys-IT-Limited-1024x558.jpg" alt="" />
           <p>TigerIT provides end-to-end credential management solutions for government and state agencies. It combines state of the art solution design, robust back-end systems <br /> with efficient project management in a single turnkey solution for national IT infrastructure undertakings.
<br />
TigerIT solutions range from National ID, Voter Registration, e-Passports, Border Control, <br /> Driving License to Vehicle registration and tracking. In addition, TigerIT provides highly specialized system integration of 3rd party hardware/software with legacy systems, <br /> including identity governance, Enterprise Single Sign-On, identity and access management <br /> solutions to large organizations like banks, telecom companies and multinational companies.</p>
        </div>
    );
};

export default Details;