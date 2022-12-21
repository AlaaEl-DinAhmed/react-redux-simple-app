import "./App.css";
import { CreateTask } from "./components/create-task/CreateTask";
import { TasksList } from "./components/tasks-list/TasksList";

function App() {
  return (
    <div className="w-3/4 mx-auto">
      <CreateTask />
      <TasksList />
    </div>
  );
}

export default App;
