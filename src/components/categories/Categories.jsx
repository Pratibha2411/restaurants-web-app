import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

const Categories = () => {
  const [productsState, setProductsState] = useState([]);
  
  useEffect(() => {
    fetch("https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants")
            .then((res)=>res.json())
            .then((productsArray)=>{
             console.log(productsArray);
            
            const newProductsState = productsArray.map((product) => {
              console.log(product.title);
              return product.title;
              
            })
            setProductsState(newProductsState)
            console.log(newProductsState);
            })
  }, [])

const hasProducts = productsState.length > 0

  return(
    <div>
      {hasProducts ? <SearchBar products={productsState} /> : "Loading......"}
      <SearchBar />
    </div>
  )

}

export default Categories;

