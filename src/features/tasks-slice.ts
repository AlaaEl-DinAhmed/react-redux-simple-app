import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type Task = {
  id: string;
  title: string;
};

type DraftTask = Pick<Task, "title">;

type TasksState = {
  entities: Task[];
  loading?: boolean;
};

const initialState: TasksState = {
  entities: [],
  loading: false,
};

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (): Promise<Task[]> => {
    const response = await fetch("api/tasks").then((response) =>
      response.json()
    );
    return response.tasks;
  }
);

const createTask = (draftTask: DraftTask): Task => {
  return { id: self.crypto.randomUUID(), ...draftTask };
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.push(task);
    },
    removeTask: (state, action: PayloadAction<Task["id"]>) => {
      const index = state.entities.findIndex(
        (task) => task.id === action.payload
      );
      state.entities.splice(index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    });
  },
});

export const tasksReducer = tasksSlice.reducer;

export const { addTask, removeTask } = tasksSlice.actions;
