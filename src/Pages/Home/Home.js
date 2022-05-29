
import Inventories from '../Inventories/Inventories';
import PageTitle from '../PageTitle/PageTitle';


import Banner from './Banner/Banner';
import Contact from './Contact';

import './Home.css'

import Reviews from './Reviews';


const Home = () => {
    
    return (

        <div>
            
           <Banner></Banner>
           
           <Inventories></Inventories>
           
           <Reviews></Reviews>
           <Contact></Contact>
            <PageTitle title="Home"></PageTitle> 
        </div>
    );
};

export default Home;