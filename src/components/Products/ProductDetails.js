import React from "react";
import { useParams } from "react-router-dom";
import Product from "../Products/Product";
import data from "../../sample/data";
import useCart from '../../hooks/UseCart';

const ProductDetails = () => {
  const { productid } = useParams();
  const {addCartItem} = useCart(data);
  const product = data.find((p) => p.id === parseInt(productid));

  return (
    <div className="product-details">
      <Product {...product} addCartItem={addCartItem} />
    </div>
  );
};

export default ProductDetails;
