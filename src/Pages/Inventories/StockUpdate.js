import React ,{useState,useEffect}from 'react';

import { Link, useParams } from 'react-router-dom';



import Stock from './Stock';


const StockUpdate = () => {
    const[user,setUser]=useState({})
    const {id}=useParams()
    // const [items,setItems]=useState([])
    useEffect(()=>{
        const url=`http://localhost:5000/inventory/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
        },[])
  

    return (
        <div >
            <div className='services-container'>
                    
            <div className='service'>  
              <h2 style={{marginBottom:"10px"}}>{user.name}</h2>
              <img className='w-100'  style={{height:"300px"}} src={user.img} alt=""/> 
              <p>Description:{user.description}</p>
              <p>Price:{user.price}</p>
              <p>Quantity:{user.quantity}</p>
              <p>Supplier_Name:{user.supplier_name}</p>
              
              
                

            </div>

            </div>

     </div>
            
               
            
               
        
    );
};

export default StockUpdate;