import React, { useContext, useEffect } from "react";
import Product from "./Product";
import ThemeContenxt from "../../ThemeContext";
import UseCart from "../../hooks/UseCart";
import {store} from '../../store';
import data from "../../sample/data";

const Products = () => {
  const { dark } = useContext(ThemeContenxt);
  const {addCartItem} = UseCart();

  const {
    state: { products, keyword },
    dispatch,
  } = useContext(store);

  useEffect(() => {
    const results = data.filter(
      (product) =>
        product.title.includes(keyword) || product.brand.includes(keyword)
    );

    dispatch({ type: "SET_PRODUCTS", payload: results });
  }, [keyword, dispatch]);
  
  return (
    <div className={`product-list ${dark ? "light" : "light"}`}>
      {products.map((product) => (
        <Product {...product} key={product.id} addCartItem={addCartItem} />
      ))}
    </div>
  );
};

export default Products;
