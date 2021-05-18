import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import NavList from '../../components/NavList/NavList';
import Backdrop from '../../components/Backdrop/Backdrop';

const Layout = ({children}) => {
  const [navlistOpen, setNavlistOpen] = useState(false);
  // manage backdrop and navlist with screen change
  
  useEffect(() => {
    const media = window.matchMedia("(min-width: 800px)");
    const adjustBackdropAndNavlistOnScreenChange = () => {
      if(media.matches) {
        setNavlistOpen(false);
      }
    }
    window.addEventListener("load", adjustBackdropAndNavlistOnScreenChange);
    window.addEventListener("resize", adjustBackdropAndNavlistOnScreenChange);

    return () => {
      window.removeEventListener("load", adjustBackdropAndNavlistOnScreenChange);
      window.removeEventListener("resize", adjustBackdropAndNavlistOnScreenChange);
    }
  }, []);

  //show navlist
  const showNavlist = () => {
    setNavlistOpen(true);
  };
  //hide navlist
  const hideNavlist = () => {
    setNavlistOpen(false);
  };

  return (
    <>
      <Header
        showNavlist={showNavlist}>
        <Backdrop
          show={navlistOpen}
          backdropClicked={hideNavlist} />
        <NavList
          navlistOpen={navlistOpen} 
          hideNavlist={hideNavlist} />
      </Header>
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;
