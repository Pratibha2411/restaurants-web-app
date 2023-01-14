#Setting up the developement enviorment and pre-requisite packages:
    node -v
    npm -v
    npx create-react-app .
    npm i bootstrap
    npm i font-awesome
    npm redux react-redux
    npm i react-redux
    npm i redux react-redux
    npm i react-router-dom
    npm start

## src > components
## see the console for API worked on this project only for few hour.
### Code for categories which has some filter error(filter is calling objects), couldn't fix it coz have worked on 2-3 projects only, & did not face anything like this before:
  import React, { useState, useRef } from "react";

const Categories = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useRef(() => {
    const getCategories = async () => {
      setLoading(true);
      const response = await fetch(
        "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getCategories();
  }, []);

  const Loading = () => {
    return <>Loading.....</>;
  };
  const ShowCategories = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2">Baked</button>
          <button className="btn btn-outline-dark me-2">Sweet</button>
          <button className="btn btn-outline-dark me-2">Hot Dish</button>
          <button className="btn btn-outline-dark me-2">Fast Food</button>
          <button className="btn btn-outline-dark me-2">Salads</button>
        </div>
        {
        filter.map((allRestaurants) => {
          return (
            <>
              <div className="col-md-3">
                <div class="card h-100 text-center p-4" key={allRestaurants.id}>
                  <img src={allRestaurants.restaurantImage} class="card-img-top" alt={allRestaurants.restaurantName} />
                  <div class="card-body">
                    <h5 class="card-title">{allRestaurants.restaurantName}</h5>
                    <p class="card-text">
                      ${allRestaurants.restaurantDescription}
                    </p>
                    <a href="Restaurants" class="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div>
        <div className="container my-4 py-4">
          <div className="row">
            <div className="col-12 mb-4">
              <h6 className="display-6 fw-bolder">
                Category
              </h6>
            </div>
          </div>
          <div className="row">
            {loading ? <Loading /> : <ShowCategories />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
