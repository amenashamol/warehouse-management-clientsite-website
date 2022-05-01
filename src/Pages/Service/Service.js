import React from 'react';
import { useNavigate } from 'react-router-dom';
import UpdateModal from '../updateModal/UpdateModal';
import './Service.css'

const Service = ({service}) => {
    const{id,name,img,price,description}=service
   
    const navigate=useNavigate()
    // const navigateServiceDetails=id=>{
    //         navigate(`/service/${id}`)
    // }
    return (
        <div className='service'>  
              <h2 style={{marginBottom:"10px"}}>{name}</h2>
              <img className='w-100'  style={{height:"300px"}} src={img} alt=""/> 
              <p>price:{price}</p>
              <p>{description}</p>
              <div className='flex d-flex ms-4' >
                  <div > 
                  <button  className='color-801336 btn btn-primary mx-2  '>
                    delete
                   </button>
                  </div>

              <div>
                  
                  <UpdateModal></UpdateModal>
                 
                  
              </div>
                  </div>
              
                

                
                

               
              
           
        </div>
    );
};

export default Service;