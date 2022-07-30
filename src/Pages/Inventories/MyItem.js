
import { Link } from 'react-router-dom';

// import './Service.css'

const MyItem = ({item,items,setItems}) => {
    const{name,img,description,price,quantity,supplier_name}=item
    
    const handleInventoryDelete=id=>{
        const proceed=window.confirm('are you sure you want to delete ')
        if(proceed){
            
            const url= `http://localhost:5000/allinventory/${id}`
            fetch(url,{
                method:'DELETE'

            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount > 0){
                   
                     const remaining=items.filter(item=>item._id!==id)
                     
                    setItems(remaining)
                  }
            })
            
        }
  
      }

    
   
    
    return (
        <div className='service'>  
              <h2 style={{marginBottom:"10px"}}>{name}</h2>
              <img className='w-100'  style={{height:"300px"}} src={img} alt=""/> 
              <p>Description:{description}</p>
              <p>Price:{price}</p>
              <p>Quantity:{quantity}</p>
              <p>Supplier_Name:{supplier_name}</p>
              
              
                  
              <div > 
                  <button  onClick={()=>handleInventoryDelete(item._id)} className='color-801336 btn btn-primary mx-5  '>
                    delete
                   </button>
                   </div>
                  
              
                  
              
                

                
                

               
              
           
        </div>
    );
};

export default MyItem;