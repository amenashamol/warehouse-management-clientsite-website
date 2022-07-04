import React ,{useState,useEffect}from 'react';
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const Update = () => {
  const {id}=useParams()
  const[user,setUser]=useState({})
  const {
    register,
    handleSubmit,
    } = useForm();

    useEffect(()=>{
      const url=`http://localhost:5000/inventory/${id}`
      fetch(url)
      .then(res=>res.json())
      .then(data=>setUser(data))
      },[id])

  const HandleUpdate = (data) =>{
   console.log(data);

   const url=`http://localhost:5000/inventory/${id}`
   fetch(url,{
       method:'PUT',
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
        <h2>Update </h2>
     <form className="d-flex flex-column" onSubmit={handleSubmit(HandleUpdate)}>
     <input className="mb-2"  placeholder="name" {...register("name")} />
     <input className="mb-2" placeholder="photo url" type="text" {...register("img")} />
      <input className="mb-2" placeholder="description" {...register("description", )} />
      <input className="mb-2" placeholder="price" type="number" {...register("price")} />
      <input className="mb-2" placeholder="quantity" type="number" {...register("quantity")} />
      <input className="mb-2" placeholder="supplier_name" type="text" {...register("supplier_name")} />
      
      <input className="mb-2"  type="submit"  value="update"/>
    </form>
    </div>
  );
};

export default Update;
