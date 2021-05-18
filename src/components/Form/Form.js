import React from 'react';
import './form.scss';

const Form = ({nameValue, dayValue, nameValueChanged, dayValueChanged, formSubmit, submitBtnPrefix, children}) => {
  return (
    <section className="form">
      <div className="form__center">
        <h3 className="form__title">
          set your task
        </h3>
        {children}
        <form className="form__form" onSubmit={formSubmit}>
          <div className="form__control">
            <label
              className="form__label"htmlFor="name">
              task name:
            </label>
            <input
              className="form__input" 
              id="name"
              name="name"
              type="text"
              value={nameValue}
              onChange={nameValueChanged} />
          </div>
          <div className="form__control">
            <label
              htmlFor="day"
              className="form__label">
              day: 
            </label>
            <select
              className="form__input" 
              id="day"
              name="day"
              value={dayValue || ""}
              onChange={dayValueChanged}>
              <option value="" hidden ></option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
              <option value="sunday">Sunday</option>
            </select>
          </div>
          <button
            type="submit"
            className="form__submit">
            {submitBtnPrefix} item
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;
