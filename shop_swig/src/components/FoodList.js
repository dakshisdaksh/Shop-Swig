import React, { useEffect, useState } from "react";
import "./FoodList.css";
import Card from "./Card";
import axios from "axios";

const FoodList = () => {
  const [List, setList] = useState([]);
  let mounted = false;
  useEffect(() => {
    axios
      .get("http://localhost:8000/food")
      .then(function (response) {
        setList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        mounted = true;
      });
  }, []);
  return (
    <div className="grid-card">
      {List.map(
        (index, idx) =>
          mounted || (
            <div className="card" key={idx}>
              <Card
                Image={index.Image}
                Name={index.Name}
                Rating={index.Rating}
                Type={index.Type}
                Price={index.Price}
              ></Card>
            </div>
          )
      )}
    </div>
  );
};

export default FoodList;
