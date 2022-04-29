import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
           <Banner></Banner>
            <Services></Services>
            <PageTitle title="Home"></PageTitle> 
        </div>
    );
};

export default Home;