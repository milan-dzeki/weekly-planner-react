import React from 'react';
import './failed.scss';
import TaskBoxes from '../../components/TaskBoxes/TaskBoxes';
import TaskBox from '../../components/TaskBoxes/TaskBox/TaskBox';
import QuestionModal from '../../components/QuestionModal/QuestionModal';
import { CgDanger } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { useButtons } from '../../hooks/useButtons';

const Failed = () => {
  const {questionModal, closeQuestionModal, itemBtnClicked, questionModalConfirm} = useButtons();
  const tasks = useSelector(state => state.tasks.failed);

  let taskboxes = Object.keys(tasks).map(taskbox => {
    return (
      <TaskBox
        key={taskbox} 
        taskboxDay={taskbox}
        listType="failed"
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
      <section className="failed">
        <div className="failed__title">
          <CgDanger className="failed__title-icon"/>
          <h2 className="failed__title-text">
            failed tasks
          </h2>
        </div>
        <div className="failed__taskboxes">
          <TaskBoxes
            taskboxesType="failed"
            taskboxes={taskboxes} />
        </div>
      </section>
    </>
  );
}

export default Failed;