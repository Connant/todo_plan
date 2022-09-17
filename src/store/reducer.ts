import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const ActionType = {
  ADD: "ADD",
  DELETE: "DELETE",
};

export type FilterState = {
  sort: string;
};

export type AppClient = {
  filter: FilterState;
};

export type TaskType = {
  id: number;
  title: string;
  description: string;
  done: boolean;
};

export type TaskList = TaskType[];

export type AppData = {
  task: TaskType;
  taskList: TaskList;
};

const initialState: AppData = {
  task: {} as TaskType,
  taskList: [],
};

const appDataSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {
    addTaskList: (state, action: PayloadAction<TaskList>) => {
      state.taskList = action.payload;
    },
  },
});

export const { addTaskList } = appDataSlice.actions;

export default appDataSlice.reducer;
