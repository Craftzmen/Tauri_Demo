import React from "react";

const Schedule = (props) => {
  const scheduleDate = new Date().toISOString();
  const formattedDate = scheduleDate.slice(0, 10);

  return (
    <div>
      <div className="flex flex-col gap-y-5 text-sm">
        {props.schedule.map((item) => (
          <div key={item.ID} className="bg-white p-5 rounded-lg">
            <h1 className="font-medium">{item.title}</h1>
            <p className="text-zinc-500 mt-2">{item.description}</p>
            <div className="flex justify-between items-center mt-2">
              <div>
                <div>{item.time}</div>
                <div>{formattedDate}</div>
              </div>
              <div className="flex items-center gap-x-3">
              <button className="text-xs px-4 py-1.5 mr-2 text-blue-500 bg-blue-50 rounded-full">
                Edit
              </button>
              <button className="text-xs px-4 py-1.5 text-red-500 bg-red-50 rounded-full">
                Cancel
              </button>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
