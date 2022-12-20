import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Task {
  id: string;
  name: string;
}

export type TasksState = {
  entities: Task[];
};

const initialState: TasksState = {
  entities: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.entities.push(action.payload);
    },
    removeTask: (state, action) => {},
  },
});

export const tasksReducer = tasksSlice.reducer;

export const { addTask, removeTask } = tasksSlice.actions;
