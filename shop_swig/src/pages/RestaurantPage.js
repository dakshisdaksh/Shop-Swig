import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RestaurantList from '../components/RestaurantList';

const FoodPage = () => {
    return(
        <div className="FoodPage">
            <Header/>
            <RestaurantList/>
            <Footer/>
        </div>
    )
}

export default FoodPage;