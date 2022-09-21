import axios from "axios";
import { TaskList, TaskType } from "./reducer";

const url = axios.create({
  baseURL: `/task.mock.json`,
});

export const api = {
  async getProducts(): Promise<TaskList> {
    const res = await url.get<TaskList>(``);
    return res.data;
  },
  async postProducts(): Promise<TaskType> {
    const task = await url.post<TaskType>(``);
    return task.data;
  },
};
