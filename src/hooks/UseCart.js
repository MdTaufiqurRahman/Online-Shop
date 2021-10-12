import { useContext } from "react";
import { store } from "../store";

const UseCart = () => {
  // const [setCartItems] = useState(init);
  const {
    state: { products, cartItems },
    dispatch,
  } = useContext(store);

  const setCartItems = (items) => {
    dispatch({ type: "SET_CART_ITEMS", payload: items });
  };

  const addCartItem = (id) => {
    const item = products.find((product) => product.id === id);

    const itemIndex = cartItems.findIndex(
      (currentItem) => currentItem.id === id
    );
    if (itemIndex === -1) {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    } else {
      setCartItems(
        cartItems.map((currentItem) =>
          currentItem.id === id
            ? {
                ...currentItem,
                quantity: parseInt(currentItem.quantity) + 1,
              }
            : currentItem
        )
      );
    }
  };

  const deleteCartItem = (id) => {
    // setCartItems((current) => current.filter((item) => item.id !== id));
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    const response = window.confirm("Are you sure to perform the action?");
    if (response) {
      setCartItems([]);
    }
  };

  const total = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return {
    total,
    cartItems,
    addCartItem,
    deleteCartItem,
    clearCart,
  };
};

export default UseCart;
