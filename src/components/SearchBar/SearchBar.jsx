import React, { useState } from "react";
import "./SearchBar.css";


const products = [
  <div>
    <div className="container my-4 py-4">
      <div className="row">
        <div className="col-12 mb-4">
          <h6 className="display-6 fw-bolder">Category </h6>
        </div>
      </div>

      <div className="row">
        <div className="buttons d-flex justify-content-center pb-5">
          <button className="btn btn-outline-dark me-2">Baked</button>
          <button className="btn btn-outline-dark me-2">Sweet</button>
          <button className="btn btn-outline-dark me-2">Hot Dish</button>
          <button className="btn btn-outline-dark me-2">Fast Food</button>
          <button className="btn btn-outline-dark me-2">Salads</button>
        </div>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card h-100 text-center p-4">
        <img src="" className="card-img-top" alt=" " />
        <div className="card-body">
          <h5 className="card-title">Name: " "</h5>
          <p className="card-text">Restaurant Description: " "</p>
          <a href="Restaurants" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  </div>
];

const foods = [
  'saying',
  'something',
  'Like and love',
  'coz',
  'because'
];

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const shouldDisplayButton = searchValue.length > 0;

  const filterFoods = foods.filter((food) => {
    return food.includes(searchValue)
  })

  const Placeholder = "Filter Searchbar";
  return (
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">
        <i className="bi bi-search"></i>
      </span>
      <input
        type="text"
        className="form-control searchbar"
        placeholder={Placeholder}
        onChange={handleInputChange}
        aria-label="Username"
        aria-describedby="basic-addon1"
      />

      {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}

      {products.map((product) => {
        return (
          <div className="container" key={product}>
            {product}

          </div>
        );
      })}

      {filterFoods.map((food) => {
        return (
          <div className="container" key={food}>
            {food}
           </div>
        )
      })}

    </div>
  );
};

export default SearchBar;
