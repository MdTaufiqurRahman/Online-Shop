import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import ThemeContext from "./ThemeContext";

import Checkout from "./components/CheckOut/CheckOut";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Products/ProductDetails";
import { StateProvider } from "./store";

import "./App.css";
import Cart from "./components/Cart/Cart";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark((isDark) => (isDark = !isDark));

  return (
    <StateProvider>
      <ThemeContext.Provider value={{ dark, toggle: toggleTheme }}>
        <div className={`App ${dark ? "dark" : "light"}`}>
          <Router>
            <NavBar />
            <Switch>
              <Route path="/checkout" component={Checkout} />

              <Route path="/product/:productid" component={ProductDetails} />

              <Route path="/" component={Home} />
            </Switch>
            <Cart />
          </Router>
        </div>
      </ThemeContext.Provider>
    </StateProvider>
  );
}

export default App;
