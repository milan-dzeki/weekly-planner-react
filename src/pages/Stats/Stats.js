import React, { useState, useEffect, useMemo } from 'react';
import './stats.scss';
import { ImStatsDots } from 'react-icons/im';
import { useSelector } from 'react-redux';

const Stats = () => {
  const allTaskLists = useSelector(state => state.tasks);
  const mainLists = useMemo(() => {
    return {
      toDo: allTaskLists.toDo,
      done: allTaskLists.done, 
      failed: allTaskLists.failed
    }
  }, [allTaskLists]);
  // put percentages for each list in the state
  const [tasksToBeDonePercentage, setTasksToBeDonePercentage] = useState(null);
  const [tasksDonePercentage, setTasksDonePercentage] = useState(null);
  const [tasksFailedPercentage, setTasksFailedPercentage] = useState(null);
  // custom list with each day containing three arrays (toDo, done, failed)
  const [tasksByDayPercentages, setTasksByDayPercentages] = useState({});

  // percentage calculator
  const getPercentages = (allTasks, singleList) => {
    let percentage = (singleList / allTasks) * 100;
    if(allTasks === 0) {
      percentage = 0;
    }
    return percentage;
  }
  // set percentages with every state change
  useEffect(() => {
    // get one array that contains ALL tasks
    let arrayWithAllTasks = Object.keys(mainLists).map(list => Object.keys(mainLists[list]).map(day => mainLists[list][day]).reduce((arr, el) => {
      return arr.concat(el)
    }, [])).reduce((arr, el) => {
      return arr.concat(el)
    }, []);

    // get number of ALL tasks
    let totalTasks = arrayWithAllTasks.length;

    // num of to do tasks
    let toDoTasks = Object.keys(mainLists.toDo).map(day => {
      return mainLists.toDo[day]
    }).reduce((arr, el) => {
      return arr.concat(el);
    }, []).length; 

    // num of accomplished tasks
    let doneTasks = Object.keys(mainLists.done).map(day => {
      return mainLists.done[day]
    }).reduce((arr, el) => {
      return arr.concat(el);
    }, []).length;
    
    // num of failed tasks
    let failedTasks = Object.keys(mainLists.failed).map(day => {
      return mainLists.failed[day]
    }).reduce((arr, el) => {
      return arr.concat(el);
    }, []).length;
    
    // set percentages
    setTasksToBeDonePercentage(getPercentages(totalTasks, toDoTasks).toFixed(2));
    setTasksDonePercentage(getPercentages(totalTasks, doneTasks).toFixed(2));
    setTasksFailedPercentage(getPercentages(totalTasks, failedTasks).toFixed(2));
  }, [mainLists]);

  // set percentages for each single day
  useEffect(() => {
    // get list with all tasks by day
    let list = {};
    for(const day in mainLists.toDo) {
      list[day] = {
        toDo: [...mainLists.toDo[day]].length,
        done: [...mainLists.done[day]].length,
        failed: [...mainLists.failed[day]].length,
        total: [...mainLists.toDo[day]].length + [...mainLists.done[day]].length + [...mainLists.failed[day]].length
      }
    }
    // get percentages for each day
    let percentagesByDay = {};
    for(const day in list) {
      percentagesByDay[day] = {
        toDo: getPercentages(list[day].total, list[day].toDo).toFixed(2),
        done: getPercentages(list[day].total, list[day].done).toFixed(2),
        failed: getPercentages(list[day].total, list[day].failed).toFixed(2)
      }
    }
    setTasksByDayPercentages(percentagesByDay);
  }, [mainLists]);

  let statsByDay;
  if(Object.keys(tasksByDayPercentages).length === 0) {
    statsByDay = <div>loading</div>;
  } else {
    statsByDay = Object.keys(mainLists.toDo).map(day => {
      return (
        <div key={day} className={`stats__stats-day stats__stats-day--${day}`}>
          <h4 className="stats__stats-day__title">
            {day}
          </h4>
          <div className="stats__stats-day__box">
            <p className="toDo">tasks to be done: {tasksByDayPercentages[day].toDo}%</p>
            <p className="done">tasks you accomlished: {tasksByDayPercentages[day].done}%</p>
            <p className="failed">tasks you failed to do: {tasksByDayPercentages[day].failed}%</p>
          </div>
        </div>
      );
    })
  }
  return (
    <section className="stats">
      <div className="stats__title">
        <ImStatsDots  className="stats__title-icon"/>
        <h2 className="stats__title-text">
          statistics
        </h2>
      </div>
      <article className="stats__stats">
        <div className="stats__stats-all">
          <h3 className="stats__stats-title">
            all tasks statistics
          </h3>
          <div className="stats__stats-box">
            <p className="stats__stats-box__toDo">tasks to be done: {tasksToBeDonePercentage}%</p>
            <p className="stats__stats-box__done">tasks you accomlished: {tasksDonePercentage}%</p>
            <p className="stats__stats-box__failed">tasks you failed to do: {tasksFailedPercentage}%</p>
          </div>
        </div>
        <div className="stats__stats-byday">
          <h3 className="stats__stats-title">
            statistics by day
          </h3>
          <div className="stats__stats-byday__content">
            {statsByDay}
          </div>
        </div>
      </article>
    </section>
  )
}

export default Stats;
