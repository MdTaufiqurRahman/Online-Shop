import { createContext } from "react";

const themeOpts = {
  dark: false,
  toogle: () => {},
};

const ThemeContext = createContext();

export default ThemeContext;
