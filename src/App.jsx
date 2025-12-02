import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import CreateTask from './pages/CreateTask'
import { useEffect, useState } from 'react'

function App() {

  
  const [taskList, setTaskList] = useState([])
   const [task, setTask] = useState("")
    const [priority, setPriority]=useState("")
    const [editIndex, setEditIndex] = useState(null)
  const [search, setSearch]=useState("")


const [isFirstLoad, setIsFirstLoad] = useState(true)

// load tasks from localStorage once
useEffect(() => {
  const saved = JSON.parse(localStorage.getItem("tasks"))
  if (saved) {
    setTaskList(saved)
  }
  setIsFirstLoad(false)
}, [])

// save tasks only after initial load
useEffect(() => {
  if (!isFirstLoad) {
    localStorage.setItem("tasks", JSON.stringify(taskList))
  }
}, [taskList])

 const handleFormSubmit = (e)=>{
        e.preventDefault()
         if (editIndex !== null) {
    // update
    const updated = [...taskList]
    updated[editIndex] = {
      taskName: task,
      priorityLevel: priority
    }
    setTaskList(updated)
    setEditIndex(null)
  } else {
    // create
    const newTask = {
      taskName: task,
      priorityLevel: priority
    }
    setTaskList([...taskList, newTask])
  }
        setTask("")
        setPriority("")
          
        }

        // const filteredTask = taskList.filter((ind)=>{
        //   ind.taskName.toLowerCase().includes(search
        //     .toLowerCase()
        //   )
        // })
        const filteredTask = taskList.filter((t) =>
    t.taskName.toLowerCase().includes(search.toLowerCase())
  )
  
  
  
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='*' element={<Home 
      taskList={taskList} 
      setEditIndex={setEditIndex}
      setPriority={setPriority}
      setTask={setTask}
      setTaskList={setTaskList}
      setSearch={setSearch}
      filteredTask={filteredTask}
       ></Home>}></Route>
      <Route path='/home' element={<Home 
      taskList={taskList}
      setEditIndex={setEditIndex}
       setPriority={setPriority}
      setTask={setTask}
      setTaskList={setTaskList}
      setSearch={setSearch}
      filteredTask={filteredTask}
      ></Home>}></Route>
      <Route path='/createtask' element={<CreateTask 
      taskList={taskList} 
      setTaskList={setTaskList}
      task={task}
      setTask={setTask}
      priority={priority}
      setPriority={setPriority}
      handleFormSubmit={handleFormSubmit}
      editIndex={editIndex}
      ></CreateTask>}></Route>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
