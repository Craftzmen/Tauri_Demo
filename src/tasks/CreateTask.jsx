import React, { useState, useEffect } from 'react';

const CreateTask = (props) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    if (props.taskToEdit) {
      setTaskName(props.taskToEdit.NAME);
      setTaskDescription(props.taskToEdit.DESCRIPTION);
    }
  }, [props.taskToEdit]);

  const taskNameHandler = (event) => {
    setTaskName(event.target.value);
  };

  const taskDescriptionHandler = (event) => {
    setTaskDescription(event.target.value);
  };

  const createTaskHandler = (event) => {
    event.preventDefault();
    if (taskName && taskDescription) {
      const newTask = {
        ID: props.taskToEdit ? props.taskToEdit.ID : Math.random().toString(),
        NAME: taskName,
        DESCRIPTION: taskDescription,
      };
      props.addTaskHandler(newTask);
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <div className={props.className}>
      <div className="bg-white rounded-lg p-7">
        <form className="flex flex-col text-sm min-w-[20rem] ">
          <div className="flex flex-col">
            <input
              type="text"
              autoFocus
              value={taskName}
              onChange={taskNameHandler}
              placeholder="Task name"
              id="task_name"
              className="bg-zinc-50 rounded-xl px-5 py-3.5"
            />
          </div>
          <div className="flex flex-col mt-4">
            <textarea
              value={taskDescription}
              onChange={taskDescriptionHandler}
              placeholder="Task description"
              id="task_description"
              className="bg-zinc-50 rounded-lg px-5 py-3.5 w-full min-h-[10rem] "
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              disabled={!taskName || !taskDescription}
              onClick={createTaskHandler}
              className={`${
                !taskName || !taskDescription
                  ? 'cursor-not-allowed text-zinc-400 bg-zinc-100'
                  : 'cursor-pointer text-indigo-500 bg-indigo-50 hover:opacity-70'
              } px-7 py-2.5 rounded-full`}
            >
              {props.taskToEdit ? 'Update' : 'Create'}
            </button>
            <button
              onClick={props.closeHandler}
              className="px-7 py-2.5 rounded-full focus:rin text-red-500 bg-red-50 hover:opacity-70"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
