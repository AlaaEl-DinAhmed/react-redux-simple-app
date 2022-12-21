import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Task } from "../task/Task";

export const TasksList = () => {
  const tasks = useSelector((state: RootState) => state.tasks.entities);
  return (
    <section className="mt-5">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </section>
  );
};
