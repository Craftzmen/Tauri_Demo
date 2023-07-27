import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

const Tasks_Issues = () => {
    const [taskCount, setTaskCount] = useState(0);

    const taskCreateHandler = () => {
        setTaskCount(() => (
            taskCount + 1
        ))
    }
    
    return (
        <div className='m-10' >
            <button onClick={taskCreateHandler} className='flex items-center gap-x-4 text-sm bg-indigo-50 px-5 py-2.5 text-indigo-500 hover:opacity-50 cursor-pointer font-medium rounded-3xl' >
                <FaPlus />
                <span>Create Task</span>
            </button>
            <div className='mt-5' >
                <span>Tasks Created : {taskCount}</span>
            </div>
        </div>
    )
}

export default Tasks_Issues
