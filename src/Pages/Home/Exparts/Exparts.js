import React, { useEffect, useState } from 'react';
import Expart from '../Expart/Expart';

const Exparts = () => {
const [exparts ,setExparts]=useState([])
    useEffect(()=>{
        fetch('expart.json')
        .then(res=>res.json())
        .then(data=>setExparts(data))
    },[])
    return (
        <div className="conatainer">
            <h3 className="text-primary">Exparts {exparts.length}</h3>

            <div className="row">
                {exparts.map(expart=><Expart key={expart.id} expart={expart}></Expart>)}
            </div>
            
        </div>
    );
};

export default Exparts;