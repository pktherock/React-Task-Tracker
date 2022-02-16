import React from 'react';
import Navbar from './Navbar.module.css';

const NavBar = () => {
  return (
    <>
      <nav className={Navbar.nav}>
        <h1>Task Tracker</h1>
      </nav>
    </>
  );
};

export default NavBar;
