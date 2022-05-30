import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';



const Stock = ({item}) => {
    const{name,img,description,price,quantity}=item
    const [itms,setItms]=useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allinventory')
        .then(res=>res.json())
        .then(data=>setItms(data))
        
    }, [])
    

    const handleInventoryDelete=id=>{
          const proceed=window.confirm('are you sure you want to delete ')
          if(proceed){
              
              const url= `http://localhost:5000/allinventory/${id}`
              fetch(url,{
                  method:'DELETE'

              })
              .then(res=>res.json())
              .then(data=>{
                  if(data.deletedCount>0){
                      console.log('deleted')
                       const remaining=itms.filter(item=>item._id!==id)
                       console.log(remaining)
                      setItms(remaining)
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
              <p>Supplier_Name:{quantity}</p>
              
              {/* <div className='flex d-flex ms-5' >
                  <div > 
                  <button  onClick={()=>handleInventoryDelete(item._id)} className='color-801336 btn btn-primary mx-5  '>
                    deliver
                   </button>
                  </div>

              
                  </div>
               */}
                

                
                

               
              
           
        </div>
    );
};

export default Stock;