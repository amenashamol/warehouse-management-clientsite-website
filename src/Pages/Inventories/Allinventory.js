import React from 'react';
import { Link } from 'react-router-dom';




const Allinventory = ({item,items,setItems}) => {
    const{name,img,description,price,quantity,supplier_name}=item
    
    

    const handleInventoryDelete=id=>{
          const proceed=window.confirm('are you sure you want to delete ')
          if(proceed){
              
              const url= `http://localhost:5000/allinventory/${id}`
              fetch(url,{
                  method:'DELETE'

              })
              .then(res=>res.json())
              .then(data=>{
                  if(data.deletedCount > 0){
                     
                       const remaining=items.filter(item=>item._id!==id)
                       
                      setItems(remaining)
                    }
              })
              
          }
    
        }
    

    return (
        <div className='service'>  
              <h2 style={{marginBottom:"10px"}}>{name}</h2>
              <img className='w-100'  style={{height:"300px"}} src={img} alt=""/> 
              <p>Description:{description}</p>
              <p>Price:{price}</p>
              <p>Quantity:{quantity}</p>
              <p>Supplier_Name:{supplier_name}</p>
              
              <div className='flex d-flex ms-2' >
                  <div > 
                  <button  onClick={()=>handleInventoryDelete(item._id)} className='color-801336 btn btn-primary mx-5  '>
                    delete
                   </button>
                   </div>
                   <div> 
                   <Link to={`/inventory/${item._id}`} ><button className='btn btn-primary'>Stock Update</button></Link>
                  </div>

              <div>
                  
              
                  
              </div>
                  </div>
              
                

                
                

               
              
           
        </div>
    );
};

export default Allinventory;