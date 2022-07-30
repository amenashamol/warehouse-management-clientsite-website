import React ,{useState,useEffect}from 'react';
import {  useParams } from 'react-router-dom';


const StockUpdate = () => {
    const[user,setUser]=useState({})
    const[newQuantity,setNewQuantity]=useState('')
    const {id}=useParams()
    
    useEffect(()=>{
        const url=`http://localhost:5000/inventory/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
        },[user])
       

   
      const  AddQuantity=event=>{
        event.preventDefault();
        

        const order = {
            
            quantity:parseInt(user.quantity)+parseInt(newQuantity)
            
            
        }
       
                
        const url=`http://localhost:5000/inventory/${id}`
     fetch(url,{
         method:'PUT',
         headers:{
             'content-type':'application/json'
         },
         body:JSON.stringify(order)
    
     })
     .then(res=>res.json())
     .then(data=>{
        setUser({...user,data} )
     })
     
    }  
    
    
    const  DeleveryQuantity=event=>{
        event.preventDefault();
        

        const order = {
            
            quantity:parseInt(user.quantity)-parseInt(newQuantity)
            
            
        }
       
                
        const url=`http://localhost:5000/inventory/${id}`
     fetch(url,{
         method:'PUT',
         headers:{
             'content-type':'application/json'
         },
         body:JSON.stringify(order)
    
     })
     .then(res=>res.json())
     .then(data=>{
        setUser({...user, data})
     })
    
    }  
  

    return (
        <div className="w-25 mx-auto" >
            <div className='services-container '>
                    
                <div className='service'>  
                    <h2 style={{marginBottom:"10px"}}>{user.name}</h2>
                    <img className='w-100'  style={{height:"300px"}} src={user.img} alt=""/> 
                    <p>Description:{user.description}</p>
                    <p>Price:{user.price}</p>
                    <p>Quantity:{user.quantity}</p>
                    <p>Supplier_Name:{user.supplier_name}</p>
                     <form>
                     <div className='flex d-flex ms-1 ' >
                        <div className='w-50 ms-4' > 
                            <input value={newQuantity} onChange={e=>{setNewQuantity(e.target.value)}} size="sm" className="mb-2 px-8" name='newQuantity' placeholder="quantity" type="number"  />
                        </div>
                        <div className='w-50 ms-4'> 
                            <button onClick={AddQuantity}  className='color-801336 btn btn-primary   '>
                            Add Quantity
                            </button>
                        </div>

                    </div>
                
              
                        <button onClick={DeleveryQuantity}  className='color-801336 btn btn-primary mx-5  '>
                            Delevery
                        </button>
                     </form>
                    
              
                </div>  
                
            </div>

        </div>

     
);
};

export default StockUpdate;