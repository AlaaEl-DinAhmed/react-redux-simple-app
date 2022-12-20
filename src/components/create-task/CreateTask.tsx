import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks-slice";

export const CreateTask = () => {
  const taskRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const addNewTask = (e: any) => {
    e.preventDefault();
    dispatch(addTask({ title: taskRef.current?.value || "" }));
    e.target.reset();
  };

  return (
    <form onSubmit={addNewTask}>
      <input
        className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-purple-600"
        type="text"
        placeholder="Add task"
        aria-label="Add task"
        ref={taskRef}
      />
    </form>
  );
};
