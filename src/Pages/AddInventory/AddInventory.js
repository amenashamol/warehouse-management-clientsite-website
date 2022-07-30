import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase-init";
import { toast } from 'react-toastify';

const AddInventory = () => {
  const [user]=useAuthState(auth)
  const {
    register,
    handleSubmit,
    } = useForm();

  const onSubmit = (data) =>{
   

   const url='https://mysterious-oasis-93671.herokuapp.com/inventory'
   fetch(url,{
       method:'POST',
       headers:{
           'content-type':'application/json'
       },
       body:JSON.stringify(data)

   })
   .then(res=>res.json())
   .then(result=>{
    
    toast.success('item insert is success')
   })

}

  return (
    <div className="w-50 mx-auto">
        <h2>Add inventory</h2>
     <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
     <input className="mb-2" placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
     <input className="mb-2" placeholder="email" type="text" value={user?.email} {...register("email")} />
     <input className="mb-2" placeholder="photo url" type="text" {...register("img")} />
      <input className="mb-2" placeholder="description" {...register("description", )} />
      <input className="mb-2" placeholder="price" type="number" {...register("price")} />
      <input className="mb-2" placeholder="quantity" type="number" min='0' {...register("quantity",{required:true})} />
      <input className="mb-2" placeholder="supplier_name" type="text" {...register("supplier_name",)} />
      
      <input className="mb-2"  type="submit"  value="add submit"/>
    </form>
    
    </div>
  );
};

export default AddInventory;
