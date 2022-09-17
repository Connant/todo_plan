import { State } from "./rootreducer";

export const getTaskList = (state: State) => state["Data"].taskList;
