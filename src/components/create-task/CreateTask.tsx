import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks-slice";

export const CreateTask = () => {
  const taskRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const addNewTask = (e: any) => {
    const task = taskRef.current?.value.trim();
    e.preventDefault();
    e.target.reset();
    task ? dispatch(addTask({ title: task })) : alert("Please add a task.");
  };

  return (
    <form onSubmit={addNewTask}>
      <input
        className="rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-purple-600"
        type="text"
        placeholder="Add task"
        aria-label="Add task"
        ref={taskRef}
      />
    </form>
  );
};
