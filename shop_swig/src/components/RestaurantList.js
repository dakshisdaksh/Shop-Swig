import React, { useEffect, useState } from "react";
// import "./Restaurantlist.css";
import RestroCard from "./RestroCard";
import "./FoodList.css";
import axios from "axios";

const RestaurantList = () => {
  const [Restaurant, setRestaurant] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/restaurants")
      .then((response) => {
        setRestaurant(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid-card">
        {Restaurant?.map((index, idx) => {
          return (
            <div className="card" key={idx}>
              <RestroCard
                Image={index.image}
                Name={index.name}
                Address={`${index.address.building}, ${index.address.street} , ${index.address.zipcode}`}
                Type={index.type}
                Grades={index.grades}
              ></RestroCard>
            </div>
          );
        })}
    </div>
  );
};
export default RestaurantList;
