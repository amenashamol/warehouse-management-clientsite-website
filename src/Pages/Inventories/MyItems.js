import React ,{useState,useEffect}from 'react';
import './Inventories.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';
import MyItem from './MyItem';
import Loading from '../Shared/Loading';


const MyItems = () => {
   const [user]=useAuthState(auth)
   const [items,setItems]=useState([])

    useEffect(()=>{
    if(user){
        
            fetch(`https://mysterious-oasis-93671.herokuapp.com/myItem?email=${user.email}`,{
                method:'GET',
                headers:{
                    'authorization':`Bearer ${localStorage.getItem('token')}`
                }
             })
            .then(res=>res.json())
            .then(data=>setItems(data))
        
        
    }
    
},[])


    return (
        <div id ="#services" className='container' >
            <div className='row'>

            
                <div className='services-container'>

                    {
                        items.map(item=> <MyItem
                        key={item._id}
                        item={item}
                        items={items}
                        setItems={setItems}
                        >

                        </MyItem>)
                    }

                </div>
            </div>
               
            
               
        </div>
    );
};

export default MyItems;