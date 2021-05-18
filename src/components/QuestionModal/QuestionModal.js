import React from 'react';
import './question-modal.scss';
import Backdrop from '../Backdrop/Backdrop';

const QuestionModal = ({questionModalShow, questionModalType, questionModalText, actionCancelled, actionConfirmed}) => {
  return (
    <>
      <Backdrop show={questionModalShow}/>
      <div 
        className={questionModalShow ? `question-modal question-modal--${questionModalType} question-modal__show` : `question-modal`}>
        <h2 className="question-modal__title">
          watch out
        </h2>
        <p className="question-modal__text">
          {questionModalText}
        </p>
        <div className="question-modal__btns">
          <button 
            className="question-modal__btn question-modal__btn--cancel"
            onClick={actionCancelled}>
            cancel
          </button>
          <button 
            className="question-modal__btn question-modal__btn--confirm"
            onClick={actionConfirmed}>
            confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default QuestionModal;
