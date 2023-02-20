import { createContext, useState } from "react";

export const menuContext = createContext({ openMenu: false });

export const MenuContextProvider = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = (event) => {
        setOpenMenu(!openMenu)
     }
  
  
    // const toggleDrawer = (anchor, open) => (event) => {
    //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //     return;
    //   }

    //   setState({ ...state, [anchor]: open });
    // };

  return (
    <menuContext.Provider value={{ openMenu, setOpenMenu, toggleMenu }}>
      {children}
    </menuContext.Provider>
  );
};