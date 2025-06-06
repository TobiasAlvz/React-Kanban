import { useContext } from "react";
import { TasksContext } from "../contexts/TaskContext";
import { TaskCard } from "./TaskCard";

export const TaskBoard: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <section className="row">
      <div className="col-12 col-lg-4">
        {tasks
          .filter((task) => task.status === "todo")
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
      <div className="col-12 col-lg-4">
        {tasks
          .filter((task) => task.status === "doing")
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
      <div className="col-12 col-lg-4">
        {tasks
          .filter((task) => task.status === "done")
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
    </section>
  );
};
