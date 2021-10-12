import React, { useState } from "react";
import UseCart from "../../hooks/UseCart";
import data from "../../sample/data";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const { total, clearCart } = UseCart(data);

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="checkout">
      <h3>CheckOut total: {total}</h3>
      <div>
        {total !== 0 ? (
          <div className="cart-item">
            <div className="info">
              <span>
                <input
                  type="text"
                  onChange={handleChange}
                  value={address}
                  placeholder="Addres"
                />
              </span>
              <button
                style={{
                  color: "white",
                  backgroundColor: !address ? "grey" : "green",
                }}
                disabled={!address}
                onClick={clearCart}
              >
                Checkout
              </button>
            </div>
          </div>
        ) : "Cart is empty"}
      </div>
    </div>
  );
};

export default Checkout;
