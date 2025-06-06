import { useContext } from "react"
import type { Task } from "../entities/Task"
import { TasksContext } from "../contexts/TaskContext"

interface TaskCardProps {
  task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { updateTask, deleteTask } = useContext(TasksContext)

  const update = () => {
    if (task.status === "todo") {
      updateTask(task.id, { status: "doing" })
    } else if (task.status === "doing") {
      updateTask(task.id, { status: "done" })
    } else {
      updateTask(task.id, { status: "todo" })
    }
  }

  return (
    <div className="card mb-3">
      <div className="card-header">
        <strong>{task.title}</strong>
      </div>
      <div className="card-body">
        <p>{task.description}</p>
        <ul>
          <li>{task.status}</li>
          <li>{task.priority}</li>
        </ul>
      </div>
      <div className="card-footer d-flex justify-content-end gap-2">
        <button className="btn btn-sm btn-primary" onClick={update}>Atualizar</button>
        <button className="btn btn-sm btn-danger" onClick={() => deleteTask(task.id)}>Excluir</button>
      </div>
    </div>
  )
}