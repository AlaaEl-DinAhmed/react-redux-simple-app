import { Task as TaskItem } from "../../features/tasks-slice";

export const Task = ({ task }: { task: TaskItem }) => {
  return (
    <section className="border-b-2 py-3">
      <div className="flex justify-between">
        <div className="">
          <div>done icon</div>
          <h2>{task.title}</h2>
        </div>
        <div className="">
          <div>edit icon</div>
          <div>delete icon</div>
        </div>
      </div>
    </section>
  );
};
