import { useNavigate } from "react-router-dom"

function Home ({taskList,setTaskList,setTask,setPriority, setEditIndex,setSearch, filteredTask}){

    const navigate = useNavigate()
const handleEdit=(indx)=>{

        console.log(indx);

        const clickedTask = taskList[indx]
        setTask(clickedTask.taskName)
        setPriority(clickedTask.priorityLevel)
        setEditIndex(indx)

        navigate("/createtask")

        
    }

    const handleDelete = (indx)=>{
        taskList.splice(indx,1)
        setTaskList([...taskList])
    }
    


    return (
        <div className="bg-gradient-to-b from-blue-200 to-gray-200 min-h-screen">
          <h1 className="text-5xl font-bold text-center p-5">My Task Manager App</h1>

         <div className="border mx-auto md:w-[70%] mt-10 flex flex-col rounded-lg bg-white shadow-[0_-0px_25px_rgba(0,0,0,0.15)] border-gray-50 p-4">
             <form action="" className="mt-6 px-10">
            <input type="text"
            className="border border-gray-100 shadow-xl text-sm md:text-lg mx-auto w-full rounded-2xl p-2 md:p-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Search your tasks here.."
            onChange={(e)=>{
                setSearch(e.target.value)
            }}
            />
         </form>
          <button className=" bg-green-500 ml-auto font-bold text-sm md:text-lg text-white cursor-pointer rounded mt-10 px-2 py-1"
          onClick={()=>navigate("/createtask")}
          >+ New Task</button>
          <table className="mt-4 w-full text-sm md:text-lg rounded-2xl ">
            <thead className="">
                <tr className="bg-gray-100">
                <th className="border-gray-200 w-[70%] border p-2">Task Name </th>
                <th className="border-gray-200 border p-2">priority </th>
                <th className="border-gray-200 border p-2">Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                    filteredTask.map((tasks,index)=>{
                        return(
                            <tr key={index} className="border border-gray-200">
                            <td className="border border-gray-200 p-2">{tasks.taskName}</td>
                            <td className="border border-gray-200 p-2">{tasks.priorityLevel}</td>
                            <td className="border border-gray-200 p-2 flex gap-2"><button 
                            onClick={()=>{
                                handleEdit(index)
                            }}
                            className="bg-blue-500 rounded px-2 py-1 text-white">Edit</button> 
                            
                            <button 
                            className="bg-red-500 px-2 py-1 text-white rounded p-2"
                            onClick={()=>{
                                handleDelete(index)
                            }}
                            >Delete</button></td>

                        </tr>
                        )
                    })
                }        
            </tbody>
          </table>
         </div>
        
        </div>
    )
}
export default Home