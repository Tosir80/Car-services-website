import React from 'react';

const Expart = ({expart}) => {
    const{ name , img }=expart
    return (
      <div className='col-md-4 col-sm-6 col-12'>
        <img className='img-fluid' src={img} alt='' />
        <h2>{name}</h2>
      </div>
    );
};

export default Expart;