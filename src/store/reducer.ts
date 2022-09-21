import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from "./store";

export type TaskType = {
  id: string;
  title: string;
  description: string;
  done: boolean;
};

export type TaskList = TaskType[];

export type State = {
  task: TaskType;
  taskList: TaskList;
  error: string;
};

const initialState: State = {
  task: {} as TaskType,
  taskList: [],
  error: 'error',
};

const appDataSlice = createSlice({
  name: "Data",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskType>) => {
      state.task = action.payload;
    },
    loadTaskList: (state, action: PayloadAction<TaskList>) => {
      state.taskList = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { addTask, loadTaskList, setError } = appDataSlice.actions;

export default appDataSlice.reducer;

// export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
