import { createContext } from "react";

const TaskContext = createContext():

function Provider({children}){
    <TaskContext.Provider>
        {children}
    </TaskContext.Provider>
}
export {Provider}
export default TaskContext;