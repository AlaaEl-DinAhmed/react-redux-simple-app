import {
  CheckCircleIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Task as TaskItem } from "../../features/tasks-slice";

export const Task = ({ task }: { task: TaskItem }) => {
  return (
    <section className="border-b-2 py-3">
      <div className="flex justify-between">
        <div className="flex">
          <CheckCircleIcon className="icon mr-8" />
          <h2>{task.title}</h2>
        </div>
        <div className="flex">
          <PencilIcon className="icon mr-4" />
          <TrashIcon className="icon" />
        </div>
      </div>
    </section>
  );
};
