import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import { useState } from "react";

// function App() {
//   return (
//     <div className='App'>
//       <h1>Hello</h1>
//     </div>

//   );
// }

/*
class App extends React.Component{

  render(){
    return <h1>Hello from a class</h1>
  }
}

*/

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    console.log(id);

    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
    // console.log(task);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete", id);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map(
        (task) =>
          // console.log(task.reminder);
          task.id === id ? { ...task, reminder: !task.reminder } : task
        // console.log(task.reminder);
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
};

export default App;
