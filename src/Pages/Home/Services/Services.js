import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
const [services ,setServices]=useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    } ,[] )
    
    return (
      <>
      <h3 className="my-3 text-warning border">Car Services Catagory</h3>
      <div className="services-container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
      </>
    );
};

export default Services;