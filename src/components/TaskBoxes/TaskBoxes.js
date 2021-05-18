import React, { useState, useEffect } from 'react';
import './taskboxes.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TaskBoxes = ({taskboxesType, taskboxes}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const checkSize = () => {
    setWindowSize(window.innerWidth);
    setSlideIndex(0);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    }
  }, [windowSize]);

  useEffect(() => {
    setSlideIndex(0);
  }, []);

  // slide right
  const slideRight = () => {
    if(slideIndex < 6 && windowSize < 1000) {
      setSlideIndex(prevIndex => prevIndex + 1);
    }
    if(slideIndex < 3 && windowSize > 1000) {
      setSlideIndex(prevIndex => prevIndex + 0.5);
    } else {
      return;
    }
  }

  const slideLeft = () => {
    if(slideIndex > 0 && windowSize < 1000) {
      setSlideIndex(prevIndex => prevIndex - 1);
    }
    if(slideIndex > 0 && windowSize > 1000) {
      setSlideIndex(prevIndex => prevIndex - 0.5);
    } else {
      return;
    }
  }
  return (
    <div className={`taskboxes taskboxes__${taskboxesType}`}>
      <div 
        className="taskboxes__btn taskboxes__btn--left"
        onClick={slideLeft}>
        <FaChevronLeft />
      </div>
      <div 
        className="taskboxes__btn taskboxes__btn--right"
        onClick={slideRight}>
        <FaChevronRight />
      </div>
      <div className="taskboxes__items">
        <div className="taskboxes__items-flex" style={{transform: `translateX(calc(-100% * ${slideIndex}))`}}>
          {taskboxes}
        </div>
      </div>
    </div>
  )
}

export default TaskBoxes;
