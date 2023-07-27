import React from "react";

const Task = (props) => {
  const handleDelete = (taskId) => {
    props.onDelete(taskId);
  };

  const handleEdit = (task) => {
    props.onEdit(task);
  };

  return (
    <div>
      <div className="text-sm mt-10 flex">
        <div className="flex flex-col gap-y-3">
          {props.tasks.map((task) => (
            <div key={task.ID} className="bg-white p-5 border-l-[4px] border-indigo-500 rounded-r-lg w-[30rem]" >
              <p className="font-medium">{task.NAME}</p>
              <p className="text-zinc-400 mt-2">{task.DESCRIPTION}</p>
              <div className="mt-2 flex justify-end" >
                <button onClick={() => handleEdit(task)} className="text-xs px-4 py-1.5 mr-2 text-blue-500 bg-blue-50 rounded-full" >
                  Edit
                </button>
                <button onClick={() => handleDelete(task.ID)} className="text-xs px-4 py-1.5 text-red-500 bg-red-50 rounded-full" >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
