import React from 'react';
import './form-alert.scss';

const FormAlert = ({formAlertShow, formAlertBcg, formAlertMsg}) => {
  return (
    <div 
      className="form-alert"
      style={{
        display: formAlertShow ? "block" : "none",
        backgroundColor: formAlertBcg
      }}>
      {formAlertMsg}
    </div>
  );
}

export default FormAlert;
