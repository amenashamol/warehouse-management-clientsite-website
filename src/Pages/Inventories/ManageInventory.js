import React ,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';


import Allinventory from './Allinventory';


const Inventories = () => {
  
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allinventory')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },
    [])
  

    return (
        <div id ="#services" className='container' >
            <Link to="/AddInventory"> <button className='btn btn-info'>Add new item</button></Link>
            <div className='row'>
            <h1 className='text-primary text-center mt-5 mb-2'> Our All Inventories</h1>
            <div style={{height:'4px', width:"350px", borderRadius:"20px"}} className="bg-primary  mx-auto mt-0"></div>

                <div className='services-container'>

                    {
                        items.map(item=> <Allinventory
                        key={item._id}
                        item={item}
                        
                        >

                        </Allinventory>)
                    }

                </div>
            </div>
               
            
               
        </div>
    );
};

export default Inventories;