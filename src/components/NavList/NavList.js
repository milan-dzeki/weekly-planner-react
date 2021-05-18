import React from 'react';
import './navlist.scss';
import { FaTimes } from 'react-icons/fa';
import { GoTasklist } from 'react-icons/go';
import  { BiTask, BiTaskX } from 'react-icons/bi';
import { ImStatsBars } from 'react-icons/im';
import { Link } from 'react-router-dom';

const NavList = ({navlistOpen, hideNavlist}) => {
  return (
    <nav className={navlistOpen ? "navlist navlist-show" : "navlist"}>
      <div 
        className="navlist__close"
        onClick={hideNavlist}>
        <FaTimes className="navlist__close-icon"/>
      </div>
      <ul className="navlist__list">
        <li className="navlist__list-item">
          <Link 
            to="/"
            className="navlist__list-item__link"
            onClick={hideNavlist}>
            <div className="navlist__list-item__icon">
              <GoTasklist />
            </div>
            <p className="navlist__list-item__text">
              tasks
            </p>
          </Link>
        </li>
        <li className="navlist__list-item">
          <Link 
            to="/done"
            className="navlist__list-item__link"
            onClick={hideNavlist}>
            <div className="navlist__list-item__icon">
              <BiTask />
            </div>
            <p className="navlist__list-item__text">
              done
            </p>
          </Link>
        </li>
        <li className="navlist__list-item">
          <Link 
            to="/failed"
            className="navlist__list-item__link"
            onClick={hideNavlist}>
            <div className="navlist__list-item__icon">
              <BiTaskX />
            </div>
            <p className="navlist__list-item__text">
              failed
            </p>
          </Link>
        </li>
        <li className="navlist__list-item">
          <Link 
            to="/stats"
            className="navlist__list-item__link"
            onClick={hideNavlist}>
            <div className="navlist__list-item__icon">
              <ImStatsBars />
            </div>
            <p className="navlist__list-item__text">
              stats
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavList
