import React , {useState , useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Addtask from './Components/Addtask'
import Todolist from './Components/Todolist'
import Updatetask from './Components/Updatetask'
function App() {
  const [todolist,setTodolist] = useState([])
  const [tasktoUpdate , setTasktoUpdate] = useState({})
  const [showPopup,setShowPopup] = useState(false)
  useEffect(() => {
    axios.get('http://localhost:8000/api/tasks').then(res => {
      setTodolist(res.data)
    }).catch(err => console.log(err))
  },[])
  const addTask = newTask => {
    setTodolist([...todolist,newTask])
    
  }
  const taskComplete = task => {
    const newList = [...todolist]
    newList.forEach(item => {
      if(item._id === task._id){
        item.isComplete = task.isComplete
      }
    })
    setTodolist(newList)
  }
  const removeTask = task => {
    const newList = todolist.filter(item => !(item._id === task._id))
    setTodolist(newList)
  }
  const updatetask = task => {
    const newList = [...todolist]
    newList.forEach(item => {
      if(item._id === task._id){
        item.todo = task.todo
      }
    })
    setTodolist(newList)
  }
  return (
    <div>
      <Addtask addTask = {addTask}/>
      <Todolist todolist = {todolist} taskComplete = {taskComplete} removeTask = {removeTask} tasktoUpdate = {task => setTasktoUpdate(task)} showPopup = {() => setShowPopup(!showPopup)}/>
      {showPopup && <Updatetask task = {tasktoUpdate} updatetask = {updatetask} removePopup = {() => setShowPopup(!showPopup)}/>}
    </div>
  )
}

export default App




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';
// import Addtask from './Addtask';
// import Todolist from './Todolist';

// function App() {
//   const [todolist, setTodolist] = useState([]);

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/api/tasks');
//       setTodolist(response.data);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const addTask = async (newTask) => {
//     try {
//       const response = await axios.post('http://localhost:8000/api/tasks', {
//         todo: newTask,
//         isComplete: false,
//       });
//       setTodolist([...todolist, response.data]);
//     } catch (error) {
//       console.error('Error adding task:', error);
//     }
//   };

//   const removeTask = async (taskId) => {
//     try {
//       await axios.delete(`http://localhost:8000/api/tasks/${taskId}`);
//       setTodolist(todolist.filter((task) => task._id !== taskId));
//     } catch (error) {
//       console.error('Error removing task:', error);
//     }
//   };

//   return (
//     <div>
//       <Addtask addTask={addTask} />
//       <Todolist todolist={todolist} removeTask={removeTask} />
//     </div>
//   );
// }
//
// export default App;
//
