import React, {useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';




    


const CheackOut = () => {
    const [user] =useAuthState(auth)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[address,setAddress]=useState('')
    const[phone,setPhone]=useState('')
    
    

   

    const  handleNameBlur=event=>{
        setName(event.target.value)
    }
    
    

    const  handleAddressBlur=event=>{
        setAddress(event.target.value)
    }

    const handlePhoneBlur=event=>{
        setPhone(event.target.value)
    }
   

    

    const handleCreateUser=event=>{
        event.preventDefault()
        const shipping={name,email, address,phone}
        console.log(shipping)
        
    }

    return (
        <div className='login-container'>
            
            <div>
                <h2 className='login-title'>cheaking Information</h2>

                <form className='login-form' onSubmit={handleCreateUser}>
                    
                        <input onBlur={handleNameBlur} type='text' name='name' id='' placeholder='your name'  required/>
                   
                        <input value={user?.email} readOnly type='eamil' name='email' id='' required/>
                   
                        <input onBlur={handleAddressBlur} type='text' name='address' id='' placeholder='your address' required/>
                   
                        <input onBlur={handlePhoneBlur} type='text' name='phone' id='' placeholder='your Phone' required/>
                        <button>Add Information</button>
                    
                   
                    
                </form>
                
            
            </div>
            
        </div>
    );
};

export default CheackOut;

;

