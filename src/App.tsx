import "./App.css";
import { CreateTask } from "./components/create-task/CreateTask";
import { TasksList } from "./components/tasks-list/TasksList";

function App() {
  return (
    <div className="mx-auto w-3/4 ">
      <CreateTask />
      <TasksList />
    </div>
  );
}

export default App;
