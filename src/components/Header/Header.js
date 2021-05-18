import React from 'react';
import './header.scss';
import { FcPlanner } from 'react-icons/fc';
import { FaBars } from 'react-icons/fa';

const Header = ({showNavlist, children}) => {
  return (
    <header className="header">
      <section className="header__left">
        <article className="header__left-icon">
          <FcPlanner />
        </article>
        <article className="header__left-title">
          weekly planner
        </article>
      </section>
      <section 
        className="header__right"
        onClick={showNavlist}>
        <FaBars />
      </section>
      {children}
    </header>
  )
}

export default Header
