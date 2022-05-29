import React ,{useState,useEffect}from 'react';
import Service from '../Service/Service';
import PageTitle from '../PageTitle/PageTitle';
import './Inventories.css'
import { Link } from 'react-router-dom';
// import logo1 from '../../images/graphics.jpg'
// import logo2 from '../../images/web development.jpg'
// import logo3 from '../../images/database.jpg'
// import logo4 from '../../images/networking.jpg'
// 


// const services= [
//   {id:1 , name:'Graphics', price:3000, description:"Learn Photoshop, Illustrator, and InDesign by creating posters, logos, and more.", img:logo1},
//   {id:2 , name:'Web Development', price:6000,description:"Online courses for building websites from scratch using popular tools and languages like HTML, CSS, Python, JavaScript, and more.",img:logo2},
//   {id:3 , name:'Database', price:5000,description:"Learn Database Programming online at your own pace. Start today with a special offer. Join millions of learners already learning on Udemy", img:logo3},
//   {id:4 , name:'Networking', price:4000, description:"Purchase full-access or a single technology subscription to meet specific training needs. Cisco training is an essential tool for developing employees & optimizing your IT teams",img:logo4},
  
  
// ]

const Inventories = () => {
  
    const [items,setItems]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },
    [])
  

    return (
        <div id ="#services" className='container' >
            <div className='row'>
            <h1 className='text-primary text-center mt-5 mb-2'> our Inventories</h1>
            <div style={{height:'5px', width:"320px", borderRadius:"20px"}} className="bg-primary  mx-auto mt-0"></div>

                <div className='services-container'>

                    {
                        items.map(item=> <Service
                        key={item._id}
                        item={item}
                        
                        >

                        </Service>)
                    }

                </div>
            </div>
               
            <Link to='/manageinventory' ><button className='btn btn-primary my-5 '>ManageInventories</button></Link>
            <PageTitle title="Service"></PageTitle>    
        </div>
    );
};

export default Inventories;