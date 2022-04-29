import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{id,name,img,price,description}=service
   
    const navigate=useNavigate()
    const navigateServiceDetails=id=>{
            navigate(`/service/${id}`)
    }
    return (
        <div className='service'>  
              <h2 style={{marginBottom:"10px"}}>{name}</h2>
              <img className='w-100'  style={{height:"300px"}} src={img} alt=""/> 
              <p>price:{price}</p>
              <p>{description}</p>
                <button onClick={()=>navigateServiceDetails(id)} className='btn btn-primary  '>
                    Book
                </button>
                
                

               
              
           
        </div>
    );
};

export default Service;