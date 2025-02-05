import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList.js';
import {useEffect, useContext } from "react";
import TasksContext from './context/task.js';



function App() {
  const {fetchTask} = useContext(TasksContext)
  useEffect(() => {
    fetchTask();
  }, [])

  return (
    <div className="App">
      <TaskCreate />
      <h1>Görevler</h1>
      <TaskList />
    </div>
  );
}

export default App;
