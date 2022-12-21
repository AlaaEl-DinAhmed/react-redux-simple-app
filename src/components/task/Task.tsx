import { Task as TaskItem } from "../../features/tasks-slice";

export const Task = ({ task }: { task: TaskItem }) => {
  return <div className="py-3 border-b-2">{task.title}</div>;
};
