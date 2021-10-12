import React, { useState, useContext } from "react";
import CartItem from "./CartItem";
import ThemeContext from "../../ThemeContext";
import UseCart from "../../hooks/UseCart";

const Cart = () => {
  const { cartItems, deleteCartItem, clearCart, total } = UseCart();
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const [address, setAddress] = useState("");
  const { dark } = useContext(ThemeContext);

  const toggleCheckout = () => {
    setCheckOutOpen((status) => !status);
  };

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className={`cart ${dark ? "light" : "light"}`}>
      <h4>Cart Items</h4>
      <div className="cart-items">
        {cartItems.length === 0 && (
          <div className="cart-item">
            <div className="info">
              <span>Cart is empty</span>
            </div>
          </div>
        )}

        {cartItems.map((item) => (
          <CartItem {...item} key={item.id} deleteCartItem={deleteCartItem} />
        ))}

        {cartItems.length !== 0 && (
          <>
            <div className="cart-item">
              <div className="info">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <div className="cart-item">
              <div className="info">
                <button
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    padding: "0.5rem",
                  }}
                  onClick={() => clearCart()}
                >
                  Cancel
                </button>
                <button
                  onClick={toggleCheckout}
                  style={{ color: "white", backgroundColor: "green" }}
                >
                  {checkOutOpen ? "Hide" : "CheckOut"}
                </button>
              </div>
            </div>
          </>
        )}

        {checkOutOpen && cartItems.length !== 0 && (
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
        )}
      </div>
    </div>
  );
};

export default Cart;
