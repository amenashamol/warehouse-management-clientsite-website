import React from 'react';
import './SignUp.css'
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';
import Loading from '../Shared/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    
     
    
    const navigate = useNavigate();

    let signInError;

    if (loading) {
        return <Loading></Loading>
    }

    if (error ) {
        signInError = <p className='text-red-500'><small>{error?.message}</small></p>
    }

    

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
       
        navigate('/');
    }
    


    return (
        <div className='login-container'>
             <div className='login-title'>Sign Up</div>
           <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
           <input type="text" name="name" placeholder='your name' {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}/>
                 <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                 </label>                
               <input type="text" name="email" placeholder='your Email' {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}/>
               <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
               <input type="password" name="password" placeholder='your Password' {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}/>
              <label className="label">
                 {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
               </label>
               
               
               {signInError}
               <button>Resister</button>

                <p>Already have an account ? <Link to='/signin' className='text-primary pe-auto text-decoration-none' >Please login</Link></p>
            <ToastContainer  />
            </form>
            
            
            <SocialLogin></SocialLogin>
           
        </div>
    );
};



export default SignUp;