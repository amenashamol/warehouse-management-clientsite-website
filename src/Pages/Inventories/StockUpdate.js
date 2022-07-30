import React ,{useState,useEffect}from 'react';
import {  useParams } from 'react-router-dom';


const StockUpdate = () => {
    const[user,setUser]=useState({})
    const[newQuantity,setNewQuantity]=useState('')
    const {id}=useParams()
    
    useEffect(()=>{
        const url=`https://mysterious-oasis-93671.herokuapp.com/inventory/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
        },[user])
       

   
      const  AddQuantity=event=>{
        event.preventDefault();
        
        const order = {
            quantity:parseInt(user.quantity)+parseInt(newQuantity)
            
             }
       
                
        const url=`https://mysterious-oasis-93671.herokuapp.com/inventory/${id}`
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
       
                
        const url=`https://mysterious-oasis-93671.herokuapp.com/inventory/${id}`
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
                    
                    <p>Price:  {user.price}</p>
                    <p>Quantity: {user.quantity}</p>
                   
                    
                     <div style={{ width:"350px"}} className='flex d-flex ms-1  ' >
                        <div className=' ms-4' > 
                            <input value={newQuantity} min='0'  onChange={e=>{setNewQuantity(e.target.value)}} style={{ width:"120px"}}  className="mb-2 px-8" name='newQuantity' placeholder="quantity" type="number"  />
                        </div>
                        <div className=' ms-4'> 
                            <button onClick={AddQuantity}  className='color-801336 btn btn-primary ms-4  '>
                            Add Quantity
                            </button>
                        </div>

                    </div>
                
              
                        <button onClick={DeleveryQuantity}  className='color-801336 btn btn-primary mx-5  '>
                            Delevery
                        </button>
                    
                    
              
                </div>  
                
            </div>

        </div>

     
);
};

export default StockUpdate;