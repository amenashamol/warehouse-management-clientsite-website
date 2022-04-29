import React , {useState,useEffect}from 'react';
import './SignUp.css'

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import PageTitle from '../../PageTitle/PageTitle';

const SignUp = () => {
    
    const [userInfo,setUserInfo]=useState({
        email:"",
        password:"",
        conformPassword:"",
    })
    
    const [errors,setErrors]=useState({
        email:" ",
        password:" ",
        general:" ",
    })


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true });

    const handleEmailChange= event=>{
        const emailRegex= /\S+@\S+\.\S+/
        const validEmail=emailRegex.test(event.target.value)
        if(validEmail){
            setUserInfo({...userInfo, email: event.target.value})
             setErrors({...errors, email:""})
        }

        else{
            setErrors({...errors, email:'Invalid Email'})
             setUserInfo({...userInfo,email:""})
        }
    }

    const handlePasswordChange= event=>{
        const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const validPassword=passwordRegex.test(event.target.value)

        if(validPassword){
           
            setUserInfo({...userInfo, password: event.target.value})
             setErrors({...errors, password:""})
        }

        else{
            setErrors({...errors, password: "minimum 6 charecter"})
             setUserInfo({...userInfo, password:""})
        }
    }


    const handleConformPasswordChange= event=>{
        

        if(event.target.value===userInfo.password){
           
            setUserInfo({...userInfo, conformPassword: event.target.value})
             setErrors({...errors, password:""})
        }

        else{
            setErrors({...errors, password: "password dont match"})
             setUserInfo({...userInfo,conformPassword:""})
        }
    }

    const handleLogin=event=>{
        event.preventDefault()
        
        createUserWithEmailAndPassword(userInfo.email,userInfo.password,userInfo.conformPassword)
        
    }


    

    const navigate=useNavigate()
    const location=useLocation()
    const from= location.state?.from?.pathname || "/"
     useEffect(() => {
        
    if(user){
        navigate(from)

    }
        
    }, [user])


    


    return (
        <div className='login-container'>
             <div className='login-title'>Sign Up</div>
           <form className='login-form' onSubmit={handleLogin}>
               <input type="text" name="email" placeholder='your Email' onBlur={handleEmailChange} required/>
               {errors?.email && <p className='error-message'>{errors.email}</p>}
               <input type="password" name="password" placeholder='your Password' onBlur={handlePasswordChange} required/>
               {errors?.password && <p className='error-message'>{errors.password}</p>}
               <input type="password" name="conformPassword" placeholder='conform Password' onBlur={handleConformPasswordChange} required/>
               
               
                
               <button>Resister</button>
                <p>Already have an account ? <Link to='/signin' className='text-primary pe-auto text-decoration-none' >Please login</Link></p>
            <ToastContainer  />
            </form>
            
            
            <SocialLogin></SocialLogin>
            <PageTitle title="SignUp"></PageTitle>
        </div>
    );
};



export default SignUp;