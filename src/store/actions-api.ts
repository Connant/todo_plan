import { ThunkAction } from "@reduxjs/toolkit";
import { Action } from "redux";
import { addTask, loadTaskList, setError } from "./reducer";
// import { RootState } from "./rootreducer";
import { api } from "./service";
import { RootState } from "./store";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const getAllTask =
  (): AppThunk =>
  async (dispatch, _getState): Promise<void> => {
    try {
      const task = await api.getProducts();

      dispatch(loadTaskList(task));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };

export const sendTask =
  (elem: any): AppThunk =>
  async (dispatch, _getState): Promise<void> => {
    try {
      // const elem = await api.postProducts();
      dispatch(addTask(elem));
    } catch (error: any) {
      dispatch(setError(error.message));
    }
  };
