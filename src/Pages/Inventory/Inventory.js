import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({inventory}) => {
    const{id,name,img,price,description}=inventory
   
    const navigate=useNavigate()
    const navigateServiceDetails=id=>{
            navigate(`/inventory/${id}`)
    }
    return (
        <div className='inventory'>  
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

export default Inventory;