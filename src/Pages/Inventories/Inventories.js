import React ,{useState,useEffect}from 'react';
import Service from '../Service/Service';
import PageTitle from '../PageTitle/PageTitle';
import './Inventories.css'
import { Link } from 'react-router-dom';


const Inventories = () => {
  
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('https://mysterious-plateau-57967.herokuapp.com/inventory')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },
    [])
  

    return (
        <div id ="#services" className='container' >
            <div className='row'>
            <h1 className='text-primary text-center mt-5 mb-2'> our Inventories</h1>
            <div style={{height:'5px', width:"320px", borderRadius:"20px"}} className="bg-primary  mx-auto mt-0"></div>

                <div className='services-container'>

                    {
                        items.map(item=> <Service
                        key={item._id}
                        item={item}
                        
                        >

                        </Service>)
                    }

                </div>
            </div>
               
            <Link to='/manageinventory' ><button className='btn btn-primary my-5 '>ManageInventories</button></Link>
            <PageTitle title="Service"></PageTitle>    
        </div>
    );
};

export default Inventories;