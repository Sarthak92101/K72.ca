import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const NavbarContext = createContext();

const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavContext;
