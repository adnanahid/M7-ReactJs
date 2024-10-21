import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    useEffect(()=>{
        fetch('bottles.json')
        .then((res)=>res.json())
        .then((data)=>setBottles(data))
    },[])
    return (
        <div className='bottles'>
            {
                bottles.map((bottle, index)=><Bottle key={index} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;