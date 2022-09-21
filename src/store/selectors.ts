import { State } from "./rootreducer";

export const getTaskList = (state: State) => state.taskList;

export const getTask = (state: State) => state.task;
