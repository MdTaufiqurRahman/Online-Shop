import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../ThemeContext";
import { store } from "../../store";

const Navbar = () => {
  const { toggle } = useContext(ThemeContext);
  const { dispatch } = useContext(store);
  const handgleChange = (e) => {
    dispatch({ type: "SET_KEYWORD", payload: e.target.value });
  };
  return (
    // --render prop--
    // <ThemeContext.Consumer>
    //   {(value) => (
    //     <div className="nav-bar">
    //       <span>My Shop {value.dark ? "dark" : "light"}</span>
    //       <input placeholder="search" type="text" onChange={handgleChange} />
    //       <button onClick={value.toggle}>Change Theme</button>
    //     </div>
    //   )}
    // </ThemeContext.Consumer>
    <div className="nav-bar">
      <span>Online Shop</span>
      <input type="text" placeholder="Search Here" onChange={handgleChange} />
      <button onClick={toggle}>Switch Theme</button>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default Navbar;
