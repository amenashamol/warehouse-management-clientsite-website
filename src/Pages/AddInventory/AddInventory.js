import React from "react";
import { useForm } from "react-hook-form";

const AddInventory = () => {
  const {
    register,
    handleSubmit,
    } = useForm();

  const onSubmit = (data) =>{
   console.log(data);

   const url='https://mysterious-plateau-57967.herokuapp.com/inventory'
   fetch(url,{
       method:'POST',
       headers:{
           'content-type':'application/json'
       },
       body:JSON.stringify(data)

   })
   .then(res=>res.json())
   .then(result=>{
       console.log(result)
   })

}

  return (
    <div className="w-50 mx-auto">
        <h2>Add inventory</h2>
     <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
     <input className="mb-2" placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
     <input className="mb-2" placeholder="photo url" type="text" {...register("img")} />
      <input className="mb-2" placeholder="description" {...register("description", )} />
      <input className="mb-2" placeholder="price" type="number" {...register("price")} />
      <input className="mb-2" placeholder="quantity" type="number" {...register("quantity")} />
      <input className="mb-2" placeholder="supplier_name" type="text" {...register("supplier_name")} />
      
      <input className="mb-2"  type="submit"  value="add submit"/>
    </form>
    </div>
  );
};

export default AddInventory;
