import * as actionTypes from '../actions/actionTypes';

const initialState = {
  toDo: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  },
  done: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  },
  failed: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  },
  editTask: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case(actionTypes.ADD_NEW_TASK):
      return {
        ...state,
        toDo: {
          ...state.toDo,
          [action.day]: [
            ...state.toDo[action.day],
            action.task
          ],
        },
        editTask: null
      };
    case(actionTypes.REMOVE_TASK):
      const newList = state[action.list][action.day].filter(item => item.id !== action.itemId);

      return {
        ...state,
        [action.list]: {
          ...state[action.list],
          [action.day]: newList
        }
      };
    case(actionTypes.TASK_DONE):
      const itemDone = state[action.list][action.day].find(item => item.id === action.itemId);
      const filteredList = state[action.list][action.day].filter(item => item.id !== action.itemId);
      
      return {
        ...state,
        [action.list]: {
          ...state[action.list],
          [action.day]: filteredList
        },
        done: {
          ...state.done,
          [action.day]: state.done[action.day].concat(itemDone)
        }
      };
    case(actionTypes.TASK_FAILED):
      const itemFailed = state[action.list][action.day].find(item => item.id === action.itemId);
      const updatedList = state[action.list][action.day].filter(item => item.id !== action.itemId);
      return {
        ...state,
        [action.list]: {
          ...state[action.list],
          [action.day]: updatedList
        },
        failed: {
          ...state.failed,
          [action.day]: state.failed[action.day].concat(itemFailed)
        }
      };
    case(actionTypes.EDIT_TASK):
      const itemToEdit = state[action.list][action.day].find(item => item.id === action.itemId);
      itemToEdit.day = action.day;
      const listWithoutEditingItem = state[action.list][action.day].filter(item => item.id !== action.itemId);

      return {
        ...state,
        [action.list]: {
          ...state[action.list],
          [action.day]: listWithoutEditingItem
        },
        editTask: itemToEdit
      };
    case(actionTypes.CLEAR_LIST):
      return {
        ...state,
        [action.list]: {
          ...state[action.list],
          [action.day]: []
        }
      };
    default:
      return state;
  }
};

export default reducer;