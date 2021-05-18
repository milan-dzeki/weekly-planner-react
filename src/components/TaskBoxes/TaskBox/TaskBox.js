import React from 'react';
import './taskbox.scss';
import Button from '../../Button/Button';

const TaskBox = ({ listType, taskboxDay, taskboxItems, itemBtnClicked}) => {
  let addedTasks;
  if(taskboxItems.length === 0) {
    addedTasks = <p style ={{textAlign: "center", padding: "2rem 0", fontSize: "2rem"}}>No added tasks yet</p>
  } else {
    addedTasks = taskboxItems.map(item => {
      return (
        <li
          key={item.id}
          id={item.id}
          className="taskbox__item">
          <p className="taskbox__item-name">
            {item.name}
          </p>
          <div className="taskbox__item-btns">
            {(listType === "failed" || listType === "toDo") && <Button btnType="done" clicked={() => itemBtnClicked("Are you sure you have completed this task?", "done", listType, taskboxDay, item.id )}/>}
            {listType === "toDo" && (
              <>
                <Button 
                  btnType="failed"
                  clicked={() => itemBtnClicked("Are you sure you cannot accomplish this task?", "failed", listType, taskboxDay, item.id )}/>
                <Button btnType="edit" clicked={() => itemBtnClicked("Are you sure waht to edit this task?", "edit", listType, taskboxDay, item.id )} />
              </>)}
            <Button 
              btnType="remove" 
              clicked={() => itemBtnClicked("Are you sure you want to remove this task?", "remove", listType, taskboxDay, item.id )}/>
          </div>
        </li>
      );
    })
  }
  return (
    <article className={`taskbox taskbox--${taskboxDay}`}>
      <h2 className="taskbox__day">
        {taskboxDay}
      </h2>
      <ul className="taskbox__items">
        {addedTasks}
      </ul>
      <Button 
        btnType="clear list" className="taskbox__clear-btn"
        btnDisabled={taskboxItems.length === 0 || false}
        clicked={() => itemBtnClicked("Are you sure you want to delete all tasks from for this day?", "clear", listType, taskboxDay, null)} />
    </article>
  );
}

export default TaskBox;
