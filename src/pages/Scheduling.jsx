import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import CreateSchdule from "../scheduling/CreateSchdule";
import Schedule from "../scheduling/Schedule";

const Scheduling = () => {
  const [showSchedule, setShowSchedule] = useState(false);

  const scheduleCreatorHandler = () => {
    setShowSchedule(true);
  };

  const closeCreatorHandler = () => {
    setShowSchedule(false);
  };

  const dummySchedule = [
    { ID: 1, title: 'Development Meeting', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eveniet', time: '02:02:04' },
    { ID: 2, title: 'Daily Scrum Meeting', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eveniet', time: '04:00:00' },
    { ID: 3, title: 'Scrum Meeting', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, eveniet', time: '01:00:00' },
  ];

  return (
    <div>
      <div className="m-10">
        <button
          onClick={scheduleCreatorHandler}
          className="flex justify-between items-center gap-x-4 text-sm min-w-[18rem] bg-indigo-50 py-5 px-7 text-indigo-500 hover:opacity-50 cursor-pointer font-medium rounded-lg border-2 border-dashed border-indigo-500"
        >
          <span>Schedule an event</span>
          <FaPlus />
          <p></p>
        </button>
        <React.Fragment>
          {showSchedule && (
            <div className="absolute top-10 right-10 shadow-2xl rounded-lg">
              <CreateSchdule closeSchedular={closeCreatorHandler} />
            </div>
          )}
        </React.Fragment>
        <div className="mt-10" >
          <Schedule schedule={dummySchedule} />
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
