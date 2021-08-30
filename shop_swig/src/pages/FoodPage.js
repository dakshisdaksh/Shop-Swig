import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodList from '../components/FoodList';

const FoodPage = () => {
    return(
        <div className="FoodPage">
            <Header/>
            <FoodList/>
            <Footer/>
        </div>
    )
}

export default FoodPage;