import React ,{useState,useEffect}from 'react';
import { Link } from 'react-router-dom';


import Stock from './Stock';


const StockUpdate = () => {
  
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allinventory')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },
    [])
  

    return (
        <div id ="#services" className='container' >
            <Link to='/manageinventory' ><button className='btn btn-primary my-5 '>ManageInventories</button></Link>
            <div className='row'>
            <h1 className='text-primary text-center mt-3 mb-2'> quantity:{items.length}</h1>
            <div style={{height:'4px', width:"200px", borderRadius:"20px"}} className="bg-primary  mx-auto mt-0"></div>

                <div className='services-container'>

                    {
                        items.map(item=> <Stock>
                        key={item._id}
                        item={item}
                        
                        >

                        </Stock>)
                    }

                </div>
            </div>
               
            
               
        </div>
    );
};

export default StockUpdate;