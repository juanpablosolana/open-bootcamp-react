import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'
const TaskListComponent = () => {
  const defautlTask = new Task('Example', 'Default description', false,LEVELS.NORMAL)
  const changeState = (id) =>{
    console.log('TODO: cambiar estado de una tarea')
  }

  return(
    <div>
        <div>
          Tus tareas:
        </div>
        <TaskComponent task={defautlTask}/>
    </div>
  )
}

export default TaskListComponent;