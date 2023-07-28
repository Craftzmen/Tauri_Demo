import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import CreateSchdule from "../scheduling/CreateSchdule";

const Scheduling = () => {
  const [showSchedule, setShowSchedule] = useState(false);

  const scheduleCreatorHandler = () => {
    setShowSchedule(true);
  };

  const closeCreatorHandler = () => {
    setShowSchedule(false);
  };

  return (
    <div>
      <div className="m-10">
        <button
          onClick={scheduleCreatorHandler}
          className="flex justify-between items-center gap-x-4 text-sm min-w-[18rem] bg-indigo-50 py-5 px-7 text-indigo-500 hover:opacity-50 cursor-pointer font-medium rounded-lg border-2 border-dashed border-indigo-500"
        >
          <span>Schedule an event</span>
          <FaPlus />
        </button>
        <React.Fragment>
            {showSchedule && (
                 <div className="absolute top-10 right-10 shadow-2xl rounded-lg">
                    <CreateSchdule closeSchedular={closeCreatorHandler} />
                </div>
            )}
        </React.Fragment>
      </div>
    </div>
  );
};

export default Scheduling;
