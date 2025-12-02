import { useState } from "react"
import { useNavigate } from "react-router-dom"


function CreateTask({task,setTask,priority,setPriority,handleFormSubmit,editIndex}){
        const navigate = useNavigate()


    return (
        <div className="bg-gradient-to-b from-blue-200 to-gray-200 min-h-screen p-10">
            <div className="md:w-[50%] border rounded-2xl mx-auto bg-white p-10 shadow-2xl border-gray-100 md:h-[70vh]">
            <h1 className="mb-10 font-bold md:text-3xl md:font-semibold">Create your new task</h1>
            <form action="" className="flex flex-col gap-6  md:text-xl"
            onSubmit={(e)=>
                {handleFormSubmit(e)
                    navigate("/home")
                }}
            >
                <label htmlFor="name">Task Name</label>
                <input type="text" className="p-1 md:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200" placeholder="Task Name"
                onChange={(e)=>
                    setTask(e.target.value)
                }
                required
                value={task}
                />
                <label htmlFor="desc">Priority</label>
                <select name="" id="" className="border border-gray-200 p-1 md:p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 " 
                onChange={(e)=>
                    setPriority(e.target.value)
                }
                required
                value={priority}
                >
                    <option className="border-none" value=""></option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="low">Low</option>
                </select>

                <button 
                    
                className="md:text-xl cursor-pointer bg-blue-500 text-white px-2 py-1 md:px-4 md:py-2 rounded mt-10 ml-auto"
                
                >{editIndex === null ? "Create" : "Update"}</button>
            </form>
            
        </div>
        </div>
    )
}
export default CreateTask