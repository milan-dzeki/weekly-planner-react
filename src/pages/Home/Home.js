import React, { useState, useEffect } from 'react';
import './home.scss';
import { v4 as uuid } from 'uuid';
import Form from '../../components/Form/Form';
import FormAlert from '../../components/FormAlert/FormAlert';
import TaskBoxes from '../../components/TaskBoxes/TaskBoxes';
import TaskBox from '../../components/TaskBoxes/TaskBox/TaskBox';
import QuestionModal from '../../components/QuestionModal/QuestionModal';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import { useButtons } from '../../hooks/useButtons';

const Home = () => {
  const {questionModal, closeQuestionModal, itemBtnClicked, questionModalConfirm} = useButtons();
  const tasks = useSelector(state => state.tasks.toDo);
  const dispatch = useDispatch();
  // input values for the form to be passed as props
  const [nameInput, setNameInput] = useState("");
  const [dayInput, setDayInput] = useState("");
  const [submitBtnPrefix, setSubmitBtnPrefix] = useState("add");
  // editing task
  const editTask = useSelector(state => state.tasks.editTask);
  // form alert data
  const [formAlertData, setFormAlertData] = useState({show: false, msg: "", bcg: ""});
  // input changed handlers to be passed as props
  const nameInputChanged = (event) => {
    setNameInput(event.target.value);
  };
  const dayInputChanged = (event) => {
    setDayInput(event.target.value);
  };
  // add new task action
  const onTaskAdded = (task, day) => dispatch(actions.addNewTask(task, day));
  // submit form
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if(nameInput.trim() === "" || dayInput === "") {
      setFormAlertData({show: true, msg: "enter valid values in order to add task", bcg: "red"});
    } else {
      if(!editTask) {
        setFormAlertData({show: true, msg: "new task added", bcg: "green"});
      } else {
        setFormAlertData({show: true, msg: "task edited", bcg: "green"});
      }

      const newTask = {
        id: uuid(),
        name: nameInput
      };
      onTaskAdded(newTask, dayInput);
      setNameInput("");
      setDayInput("");
      setSubmitBtnPrefix("add");
    }
    setTimeout(() => {
      setFormAlertData({show: false, msg: "", bcg: ""});
    }, 1500);
  };

  useEffect(() => {
    if(editTask) {
      setNameInput(editTask.name);
      setDayInput(editTask.day);
      setSubmitBtnPrefix("edit");
    } 
  }, [editTask]);

  let taskboxes = Object.keys(tasks).map(taskbox => {
    return (
      <TaskBox
        key={taskbox}
        listType="toDo" 
        taskboxDay={taskbox}
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
      <Form
        nameValue={nameInput}
        nameValueChanged={nameInputChanged}
        submitBtnPrefix={submitBtnPrefix}
        dayValue={dayInput}
        dayValueChanged={dayInputChanged}
        formSubmit={formSubmitHandler}>
        <FormAlert 
          formAlertShow={formAlertData.show}
          formAlertMsg={formAlertData.msg}
          formAlertBcg={formAlertData.bcg}/>
      </Form>
      <section className="home__tasks">
        <h2 className="home__tasks-title">
          things to do this week
        </h2>
        <div className="home__tasks-boxes">
          <TaskBoxes
            taskboxesType="toDo" 
            taskboxes={taskboxes} />
        </div>
      </section>
    </>
  )
}

export default Home;
