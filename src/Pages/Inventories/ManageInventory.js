import React ,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';


import Allinventory from './Allinventory';


const ManageInventory = () => {
  
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('https://mysterious-oasis-93671.herokuapp.com/allinventory',{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('token')}`
            }
         })
        .then(res=>res.json())
        .then(data=>setItems(data))
    },
    [])
  

    return (
        <div id ="#services" className='container' >
            
            <h1 className='text-primary text-center mt-2 mb-2'> Our All Inventories</h1>
            
            <div style={{height:'4px', width:"350px", borderRadius:"20px"}} className="bg-primary  mx-auto mt-0 mb-4"></div>
            <Link to="/AddInventory"> <button className='btn btn-info mb-2'>Add new item</button></Link>
            <div className='row'>
            

                <div className='services-container'>

                    {
                        items.map(item=> <Allinventory
                        key={item._id}
                        item={item}
                        items={items}
                        setItems={setItems}
                        >

                        </Allinventory>)
                    }

                </div>
            </div>
               
            
               
        </div>
    );
};

export default ManageInventory;