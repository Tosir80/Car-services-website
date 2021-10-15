import React from 'react';
import './Service.css'
const Service = (props) => {
    const {name ,price, discription,img}=props.service
    return (
      <div className='service'>
        <img src={img} alt='' />
        <h2>{name}</h2>
        <h4>Price: {price}</h4>
        <p>{discription}</p>
      </div>
    );
};

export default Service;