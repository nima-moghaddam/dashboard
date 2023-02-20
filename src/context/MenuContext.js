import { createContext, useState } from "react";

export const menuContext = createContext({ openMenu: false });

export const MenuContextProvider = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = (event) => {
        setOpenMenu(!openMenu)
     }

  return (
    <menuContext.Provider value={{ openMenu, setOpenMenu, toggleMenu }}>
      {children}
    </menuContext.Provider>
  );
};