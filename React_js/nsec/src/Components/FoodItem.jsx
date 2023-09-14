import React, { useState } from "react";
import Food from "./Food";

const FoodItem = () => {
  const [data] = useState(Food);
  return (
    <div>
      {/* {data.map((elem) => {
        const { id, name, price, image } = elem;
        return (
          <h6>{`Item number: ${id} Item name: ${name} Item price: ${price} Item Image: ${image}`}</h6>
        );
      })} */}
      <div className="container-fluid">
        <h4 className="text-center pt-3">All Food Items</h4>
        <hr></hr>
        <div className="row">
          <div className="col-12 d-flex justify-content-center menu-btn">
            <button className="btn btn-warning">All Menu</button>
            <button className="btn btn-warning">Fast Food</button>
            <button className="btn btn-warning">Lunch</button>
            <button className="btn btn-warning">Dinner</button>
            <button className="btn btn-warning">Veg</button>
            <button className="btn btn-warning">Non-Veg</button>
          </div>
        </div>

        <div className="row mt-4">
          {data.map((elem) => {
            const { id, name, price, image,catagory } = elem;
            return (
              <div className="col-12 col-md-3">
                <div className="card1 d-flex mb-5">
                  <div className="card1-left">
                    <img src={image} className="card1-img" alt=" img" height={'120px'} width={'100%'}/>
                  </div>
                  <div className="card1-right">
                    <h3 className="card1-title">{name}</h3>
                    <span className="catagory">{catagory}</span>
                    <div className="btn d-flex">
                        <h6 className="price">Price: {price}</h6>
                        <a href="#">
                          <button className="badge badge-success">Order Now</button>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
