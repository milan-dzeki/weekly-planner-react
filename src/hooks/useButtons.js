import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions/index';

export const useButtons = () => {
  const [questionModal, setQuestionModal] = useState({show: false, text: "", action: "", listType: "", day: "", itemId: ""});
  
  const closeQuestionModal = () => {
    setQuestionModal({show: false, text: "", action: "", listType: "", day: "", itemId: ""})
  };

  const dispatch = useDispatch();
  // remove task
  const onRemoveTask = (list, day, itemId) => dispatch(actions.removeTask(list, day, itemId));
  // task done
  const onTaskDone = (list, day, itemId) => dispatch(actions.taskDone(list, day, itemId));
  const onTaskFailed = (list, day, itemId) => dispatch(actions.taskFailed(list, day, itemId));
  const onEditTask = (list, day, itemId) => dispatch(actions.editTask(list, day, itemId));
  const onClearList = (list, day) => dispatch(actions.clearList(list, day));
  // item btn clicked
  const itemBtnClicked = (text, action, listType, day, itemId) => {
    setQuestionModal({show: true, text: text, action: action, listType: listType, day: day, itemId: itemId});
  };
  // question modal action confirm
  const questionModalConfirm = (list, day, itemId) => {
    if(questionModal.action === "remove") {
      onRemoveTask(list, day, itemId);
    }
    if(questionModal.action === "done") {
      onTaskDone(list, day, itemId);
    }
    if(questionModal.action === "failed") {
      onTaskFailed(list, day, itemId);
    }
    if(questionModal.action === "edit") {
      onEditTask(list, day, itemId);
    }
    if(questionModal.action === "clear") {
      onClearList(list, day);
    }
    closeQuestionModal();
  };

  return {
    questionModal,
    closeQuestionModal,
    itemBtnClicked,
    questionModalConfirm
  }
}