// import './Addtask.css';
// import React, { useState } from 'react';
// import axios from 'axios'; // Import axios

// function Addtask(props) {
//   const [task, setTask] = useState('');

//   const addTask = () => {
//     if (task.trim() === '') {
//       return;
//     } else {
//       axios
//         .post('http://localhost:8000/api/tasks/', {
//           todo: task,
//           isComplete: false,
//         })
//         .then((res) => {
//           setTask('');
//           props.addTask(res.data);
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   return (
//     <div className='addtask'>
//       <input
//         type='text'
//         placeholder='Add Task ... '
//         value={task}
//         onChange={(event) => setTask(event.target.value)} // Fix the typo here
//       />
//       <button onClick={() => addTask()}>Add Task</button>
//     </div>
//   );
// }

// export default Addtask;
import './Addtask.css';
import React, { useState } from 'react';
import axios from 'axios'; // Import axios

function Addtask(props) {
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() === '') {
      return;
    } else {
      axios
        .post('http://localhost:8000/api/tasks', {
          todo: task,
          isComplete: false,
        })
        .then((res) => {
          setTask('');
          props.addTask(res.data);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='addtask'>
      <input
        type='text'
        placeholder='Add Task ... '
        value={task}
        onChange={(event) => setTask(event.target.value)} // Fix the typo here
      />
      <button onClick={() => addTask()}>Add Task</button>
    </div>
  );
}

export default Addtask;


