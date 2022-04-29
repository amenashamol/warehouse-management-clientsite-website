import React from 'react';
import Inventories from '../Inventories/Inventories';
import PageTitle from '../PageTitle/PageTitle';

import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Inventories></Inventories>
            <PageTitle title="Home"></PageTitle> 
        </div>
    );
};

export default Home;