import React from 'react';
import PageTitle from '../PageTitle/PageTitle';

import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           
            <PageTitle title="Home"></PageTitle> 
        </div>
    );
};

export default Home;