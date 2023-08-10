import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskListItem from './TaskListItem';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: 'SET_TASKS', payload: data }))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, [dispatch]);

  const handleCheckboxChange = (taskId) => {
    const updatedTask = tasks.find((task) => task.id === taskId);
    if (updatedTask) {
      updatedTask.completed = !updatedTask.completed;
      dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
    }
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskListItem
            key={task.id}
            task={task}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
