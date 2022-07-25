import React ,{useState,useEffect}from 'react';
import Service from '../Service/Service';

import './Inventories.css'

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';


const MyItem = () => {
   const [user]=useAuthState(auth)
  // console.log(user)
  //
  //ole.log(emaiconsl)

    const [items,setItems]=useState([])

    useEffect(()=>{
    if(user){
        
            fetch(`http://localhost:5000/myItem?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>setItems(data))
        
        
    }
    
},[])

    return (
        <div id ="#services" className='container' >
            <div className='row'>

            
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
               
            
               
        </div>
    );
};

export default MyItem;