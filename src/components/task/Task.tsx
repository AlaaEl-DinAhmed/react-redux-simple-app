import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { Task as TaskItem, removeTask } from "../../features/tasks-slice";

export const Task = ({ task }: { task: TaskItem }) => {
  const dispatch = useDispatch();
  return (
    <section className="border-b-2 py-3">
      <div className="flex justify-between">
        <div className="flex">
          <CheckCircleIcon className="icon mr-3" />
          <h2>{task.title}</h2>
        </div>
        <div className="flex">
          <TrashIcon
            className="icon"
            onClick={() => dispatch(removeTask(task.id))}
          />
        </div>
      </div>
    </section>
  );
};
