import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList.js';
import {useEffect } from "react";



function App() {

  useEffect(() => {
    fetchTask();
  }, [])
  
  
  
  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;
