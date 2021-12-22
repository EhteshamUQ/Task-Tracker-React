import { useState } from "react";
import Header from "./components/molecules/Header";
import Tasks from "./components/organisms/Tasks";
import AddTask from "./components/molecules/addTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Shop Groceries",
      day: "Dec 23rh  ,2021",
      remainder: false,
    },
    {
      id: 2,
      text: "Throw a Party",
      day: "Jan 2nd  ,2021",
      remainder: false,
    },
    {
      id: 3,
      text: "Watch Spiderman NWH",
      day: "Jan 5th  ,2022",
      remainder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    console.log("working");
    console.log(tasks);
  };

  const toggleRemainder = (taskId) => {
    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, remainder: !task.remainder } : task
      )
    );
  };
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="props-demo"
        setShowAddTask={() => setShowAddTask(!showAddTask)}
        showAddTask = {showAddTask}
      />
      {showAddTask ? <AddTask onAdd={addTask} /> : ""}
      {tasks.length !== 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} />
      ) : (
        <p>No Remaining Tasks</p>
      )}
    </div>
  );
}

export default App;
