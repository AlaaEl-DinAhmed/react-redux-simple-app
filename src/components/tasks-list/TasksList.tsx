import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../../features/tasks-slice";
import { useTasks } from "../../hooks";
import { AppDispatch } from "../../store";
import { Task } from "../task/Task";

export const TasksList = () => {
  const [tasks, isLoading] = useTasks();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return (
    <section className="mt-5">
      {isLoading && <p>Loading...</p>}
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </section>
  );
};
