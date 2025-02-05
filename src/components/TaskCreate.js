import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task"; 

function TaskCreate({onCreate, task, taskFormUpdate,onUpdate}) {
    const {} = useContext(TasksContext);
    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    const handleChange = (event) => {
        setTitle(event.target.value);//input içerisine yazı(başlık) yazdırdık
    }
    const handleTaskChange = (event) => {
        setTaskDesc(event.target.value);//textarea içerisine yazı(görev) yazdırdık
    }
    const handleSubmit = (event) => {
        event.preventDefault();//sayfa yenilemesini önler
        onCreate(title,taskDesc);
        setTitle('');//oluştur butonuna basınca inputu boşaltır
        setTaskDesc('');//oluştur butonuna basınca textareayı boşaltır
        console.log(title,taskDesc);
    }
    const handleUpdate = (event) => {
        event.preventDefault();//sayfa yenilemesini önler
        
        
        if (taskFormUpdate) {   
            onUpdate(task.id,title,taskDesc);
        }else{
            onCreate(title,taskDesc);
        }
        console.log(title,taskDesc);
    }

    return ( 
            
        <div>{taskFormUpdate ? (
        <div className="task-update">    
            <h3>Lütfen Görevi Düzenleyiniz!</h3>
            <form className="task-form">
                <label className="task-label">Başlığı Düzenleyiniz:</label>
                <input value={title} onChange={handleChange} className="task-input" />
                <label className="task-label">Görev Düzenleyiniz:</label>
                <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}></textarea>
                <button onClick={handleUpdate} className="task-button update-button">Düzenle</button>
            </form>
        </div>)
        :
        (<div className="task-create"> 
            <h3>Lütfen Görev Giriniz!</h3>
            <form className="task-form">
                <label className="task-label">Başlık:</label>
                <input value={title} onChange={handleChange} className="task-input" />
                <label className="task-label">Görev Giriniz:</label>
                <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}></textarea>
                <button onClick={handleSubmit} className="task-button">Oluştur</button>
            </form>
        </div>)
        }</div>
    );





     
}

export default TaskCreate;