import React from 'react';
import './backdrop.scss';

const Backdrop = ({show, backdropClicked}) => (
  <div className={show ? "backdrop backdrop-show" : "backdrop"} onClick={backdropClicked}></div>
);

export default Backdrop;
