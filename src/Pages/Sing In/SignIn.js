import React, {useEffect} from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase-init';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignIn.css'
import SocialLogin from '../SocialLogin/SocialLogin';





const SignIn = () => {
    // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () =>{
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])


    if (loading) {
        return <Loading></Loading>
    }

    if(error){
        signInError= <p className='text-red-500'><small>{error?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
        
    }
    return (
        <div className='login-container'>
             <div className='login-title'>signIn</div>
           <form className='login-form'onSubmit={handleSubmit(onSubmit)}>
               <input type="text" placeholder='your Email' {...register("email", {
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
               
               <input type="password" placeholder='your Password' {...register("password", {
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
               <button>SignIn</button>
            {/* {error && <p className='error-message'>{error}</p>} */}
            {/* {<p className='error-message'>{hookError?.message}</p>} */}
            <ToastContainer  />
            <p>dont have an account? <Link to="/signup">  <span >Sign Up first</span> </Link> </p>
            
                        {/* <input className='btn  text-white' type="submit" value="Login" /> */}
            </form>
            <SocialLogin></SocialLogin>
            
        </div>
    );
};

export default SignIn;