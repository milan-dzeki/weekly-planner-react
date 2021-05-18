import * as actionTypes from './actionTypes';

export const addNewTask = (task, day) => {
  return {
    type: actionTypes.ADD_NEW_TASK,
    task,
    day
  };
};

export const removeTask = (list, day, itemId) => {
  return {
    type: actionTypes.REMOVE_TASK,
    list,
    day,
    itemId
  };
};

export const taskDone = (list, day, itemId) => {
  return {
    type: actionTypes.TASK_DONE,
    list,
    day,
    itemId
  };
};

export const taskFailed = (list, day, itemId) => {
  return {
    type: actionTypes.TASK_FAILED,
    list,
    day,
    itemId
  };
};

export const editTask = (list, day, itemId) => {
  return {
    type: actionTypes.EDIT_TASK,
    list,
    day,
    itemId
  };
};

export const clearList = (list, day) => {
  return {
    type: actionTypes.CLEAR_LIST,
    list,
    day
  };
};

