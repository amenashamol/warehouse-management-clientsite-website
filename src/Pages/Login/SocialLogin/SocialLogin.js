import React from 'react';
import google from '../../../images/social/google.png'

import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase-init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    
    const navigate=useNavigate()
     let errorMessage

     if(googleLoading ){
        return <Loading></Loading>
    }
    
    if (googleError ) {
        errorMessage=
          
            <p className='text-danger'>Error: {googleError?.message}</p>
        
        
      }

      if(googleUser ){
          navigate('/home')
      }

      

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className="bg-primary w-50"></div>
                <p className='mt-1 px-2'>or</p>

                <div style={{height:'1px'}} className="bg-primary w-50"></div>
            </div>
            {errorMessage}

            <div>
                <button onClick={()=> signInWithGoogle()} className='btn btn-info d-block w-50 mx-auto my-2 '>
                   <img style={{height:'30px', width:'30px'}} src={google} alt=""/> 
                   <span className='px-2'>Google Sign In </span>
                  
                </button>

               

                
            </div>
        </div>
    );
};

export default SocialLogin;