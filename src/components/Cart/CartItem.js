import React from "react";

const CartItem = ({ id, title, price, quantity, deleteCartItem }) => {
  return (
    <div className="cart-item">
      <button onClick={() => deleteCartItem(id)}>X</button>
      <div className="info">
        <span>
          {title} X {quantity}
        </span>
        <span>${price * quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
