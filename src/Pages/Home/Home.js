import React from 'react';
import Inventories from '../Inventories/Inventories';
import PageTitle from '../PageTitle/PageTitle';
import InputForm from './inputForm/InputForm';

import Banner from './Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <InputForm></InputForm>
           <Banner></Banner>
           
           <Inventories></Inventories>
            <PageTitle title="Home"></PageTitle> 
        </div>
    );
};

export default Home;