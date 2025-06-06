import { CreateTaskForm } from "./components/CreateTaskForm";
import { TasksContextProvider } from "./contexts/TaskContext";
import { TaskBoard } from "./components/TaskBoard";
// import { Modal } from 'bootstrap'

function App() {
  // const modal = new Modal("#createTaskModal")

  return (
    <TasksContextProvider>
      <div className="container-fluid">
        <div className="d-flex align-items-center gap-4">
          <h1 className="position-sticky top-0">React Kanban</h1>
          <button
            type="button"
            className="btn btn-primary"
            // onClick={() => modal.toggle()}
          >
            Nova tarefa
          </button>

          <div
            className="modal fade"
            id="createTaskModal"
            tabIndex={-1}
            aria-labelledby="createTaskModal"
            aria-hidden
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h2 className="modal-title">Nova tarefa</h2>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    // onClick={() => modal.toggle()}
                  ></button>
                </div>
                <div className="modal-body">
                  <CreateTaskForm />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div>
            <CreateTaskForm />
          </div>
          <div className="">
            <h2 className="mb-3">Quadro de tarefas</h2>
            <TaskBoard />
          </div>
        </div>
        {/* <UpdateTaskModal /> */}
      </div>
    </TasksContextProvider>
  );
}

export default App;
