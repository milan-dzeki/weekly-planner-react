import React from 'react';
import './done.scss';
import TaskBoxes from '../../components/TaskBoxes/TaskBoxes';
import TaskBox from '../../components/TaskBoxes/TaskBox/TaskBox';
import QuestionModal from '../../components/QuestionModal/QuestionModal';
import { MdDone } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useButtons } from '../../hooks/useButtons';

const Done = () => {
  const {questionModal, closeQuestionModal, itemBtnClicked, questionModalConfirm} = useButtons();
  const tasks = useSelector(state => state.tasks.done);

  let taskboxes = Object.keys(tasks).map(taskbox => {
    return (
      <TaskBox
        key={taskbox} 
        taskboxDay={taskbox}
        listType="done"
        taskboxItems={tasks[taskbox]}
        itemBtnClicked={itemBtnClicked} />
    );
  });

  return (
    <>
      <QuestionModal
        questionModalShow={questionModal.show}
        questionModalType={questionModal.action}
        questionModalText={questionModal.text}
        actionCancelled={closeQuestionModal}
        actionConfirmed={() => 
          questionModalConfirm(questionModal.listType, questionModal.day, questionModal.itemId)  
        } />
      <section className="done">
        <div className="done__title">
          <MdDone className="done__title-icon"/>
          <h2 className="done__title-text">
            accomplished tasks
          </h2>
        </div>
        <div className="done__taskboxes">
          <TaskBoxes
            taskboxesType="done"
            taskboxes={taskboxes} />
        </div>
      </section>
    </>
  );
}

export default Done;
