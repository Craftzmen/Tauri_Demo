import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import CreateTask from '../tasks/CreateTask';
import Task from '../tasks/Task';

const Tasks_Issues = () => {
  const [showTask, setShowTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Update local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const taskCreateHandler = () => {
    setShowTask(true);
  };

  const taskCloseHandler = () => {
    setShowTask(false);
  };

  const addTaskHandler = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowTask(false);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.ID !== taskId));
  };

  const updateTaskHandler = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.ID === updatedTask.ID ? updatedTask : task))
    );
    setEditingTask(null); // Clear the editingTask state after updating
  };

  const dummyTasks = [
    { ID: 1, NAME: 'Create Tasks for Taskly', DESCRIPTION: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eveniet?' },
    { ID: 2, NAME: 'Create Tasks for Udemy', DESCRIPTION: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eveniet?' },
  ];

  const allTasks = [...dummyTasks, ...tasks];

  return (
    <div className="m-10">
      <button
        onClick={taskCreateHandler}
        className="flex justify-between items-center gap-x-4 text-sm min-w-[18rem] bg-indigo-50 py-5 px-7 text-indigo-500 hover:opacity-50 cursor-pointer font-medium rounded-lg border-2 border-dashed border-indigo-500"
      >
        <span>Create Task</span>
        <FaPlus />
      </button>
      <div className='mt-10 w-[30rem] text-center p-3 rounded-lg bg-zinc-200 text-zinc-700 text-sm font-semibold' >
        <span>TODO</span>
      </div>
      <div>
        <Task tasks={allTasks} onDelete={deleteTaskHandler} onEdit={setEditingTask} />
      </div>
      <div className="absolute max-w-lg top-10 right-10 shadow-2xl rounded-lg">
        {showTask && <CreateTask addTaskHandler={addTaskHandler} closeHandler={taskCloseHandler} className="create-task-animate" />}
      </div>
      {editingTask && (
        <div className="absolute top-10 right-10 shadow-2xl rounded-lg">
          <CreateTask
            addTaskHandler={updateTaskHandler}
            closeHandler={() => setEditingTask(null)}
            className="create-task-animate"
            taskToEdit={editingTask}
          />
        </div>
      )}
    </div>
  );
};

export default Tasks_Issues;
