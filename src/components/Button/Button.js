import React from 'react';
import './button.scss';

const Button = ({btnType, clicked, btnDisabled}) => {
  let additionalClass;
  switch(btnType) {
    case("edit"):
      additionalClass = "btn--edit";
      break;
    case("remove"):
      additionalClass = "btn--remove";
      break;
    case("done"):
      additionalClass = "btn--done";
      break;
    case("failed"):
      additionalClass = "btn--failed";
      break;
    case("clear list"):
      additionalClass = "btn--clear";
      break;
    default:
      additionalClass = null;
  }
  return <button className={`btn ${additionalClass}`} disabled={btnDisabled} onClick={clicked}>{btnType}</button>
}

export default Button;
