import { useAppSelect } from "../../hooks";
import { Task } from "../task/Task";

export const TasksList = () => {
  const tasks = useAppSelect((state) => state.tasks.entities);
  return (
    <section className="mt-5">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </section>
  );
};
