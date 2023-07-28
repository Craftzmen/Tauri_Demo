import React from "react";
import { TimePicker, DatePicker, Switch } from "antd";
import { FaBell } from "react-icons/fa";

const CreateSchdule = (props) => {
  return (
    <React.Fragment>
      <div className="bg-white rounded-lg p-7">
        <div className="flex flex-col text-sm min-w-[25rem]">
          <h1 className="mb-4 text-lg font-serif">Schedule an event</h1>
          <div className="flex flex-col gap-y-1.5">
            <label htmlFor="schedule_title" className="text-zinc-700">
              Schedule Title
            </label>
            <input
              type="text"
              autoFocus
              placeholder="Enter title"
              id="task_name"
              className="bg-zinc-50 rounded-md px-5 py-3.5"
            />
          </div>
          <div className="flex flex-col mt-2 gap-y-1.5">
            <label htmlFor="schedule_description" className="text-zinc-700">
              Schedule Description
            </label>
            <textarea
              placeholder="Enter Description"
              id="task_description"
              className="bg-zinc-50 rounded-lg px-5 py-3.5 w-full min-h-[10rem] "
            />
          </div>
          <div className="flex gap-x-5" >
            <div className="flex flex-col mt-2 gap-y-1.5 w-full">
              <label htmlFor="schedule_date" className="text-zinc-700">
                Pick Date
              </label>
              <DatePicker
                id="schedule_date"
                className="w-full rounded-tl-none px-5 py-3.5 text-zinc-700 bg-zinc-50 border-0"
              />
            </div>
            <div className="flex flex-col mt-2 gap-y-1.5 w-full">
              <label htmlFor="schedule_time" className="text-zinc-700">
                Pick Time
              </label>
              <TimePicker
                id="schedule_time"
                className="w-full rounded-tl-none px-5 py-3.5 text-zinc-700 bg-zinc-50 border-0"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-x-2">
              <FaBell className="text-yellow-500 w-5 h-5" />
              <p className="text-zinc-500">
                Reminder{" "}
                <span className="underline underline-offset-2 font-medium text-black">
                  15 mins before event
                </span>
              </p>
            </div>
            <Switch className="bg-zinc-100" />
          </div>
          <div className="flex justify-between items-center mt-8">
            <button className="px-7 py-2.5 rounded-full text-blue-500 bg-blue-50 hover:opacity-70">
              Schdeule
            </button>
            <button
              onClick={props.closeSchedular}
              className="px-7 py-2.5 rounded-full text-red-500 bg-red-50 hover:opacity-70"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateSchdule;
