import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

import './Service.css'

const Service = ({item}) => {
    const{name,img,description,price,quantity}=item
    const [itms,setItms]=useState([])

    useEffect(() => {
        fetch('https://mysterious-plateau-57967.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=>setItms(data))
        
    }, [])
    

    
   
    
    return (
        <div className='service'>  
              <h2 style={{marginBottom:"10px"}}>{name}</h2>
              <img className='w-100'  style={{height:"300px"}} src={img} alt=""/> 
              <p>Description:{description}</p>
              <p>Price:{price}</p>
              <p>Quantity:{quantity}</p>
              <p>Supplier_Name:{quantity}</p>
              
              
                  
              <Link to={`/inventory/${item._id}`} ><button className='btn btn-primary'>Stock Update</button></Link>
                  
              
                  
              
                

                
                

               
              
           
        </div>
    );
};

export default Service;