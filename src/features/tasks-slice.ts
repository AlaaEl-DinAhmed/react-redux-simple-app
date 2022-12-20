import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

type Task = {
  id: string;
  title: string;
};

type DraftTask = Pick<Task, "title">;

type TasksState = {
  entities: Task[];
};

const initialState: TasksState = {
  entities: [],
};

const createTask = (draftTask: DraftTask): Task => {
  return { id: nanoid(), ...draftTask };
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.push(task);
    },
    removeTask: (state, action) => {},
  },
});

export const tasksReducer = tasksSlice.reducer;

export const { addTask, removeTask } = tasksSlice.actions;
