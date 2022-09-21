import { useEffect } from "react";
import "./list.scss";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { getTaskList } from "../../../store/selectors";
import {
  loadTaskList,
  TaskType,
  useAppDispatch,
  useAppSelector,
} from "../../../store/reducer";

dayjs.extend(duration);

const today = dayjs();

const formatDate = (date: any) => dayjs(date).format("DD.MM.YYYY");

const date = formatDate(today);

export default function List(): JSX.Element {
  const task = useAppSelector(getTaskList);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(loadTaskList(task));
  // }, [dispatch, task]);

  return (
    <section>
      <p className="date">{date}</p>
      {/* <p className="date">{currentTime}</p> */}
      <ul className="list">
        {task.map((product: TaskType, i) => (
          <li className="list__item" key={i}>
            <input
              className="list__item--input"
              type="checkbox"
              name="name"
              defaultChecked={product.done === true ? true : false}
            />

            <p className="list__item__title">{product.title}</p>
            <button className="list__item__button" />
            <p className="list__item__description">{product.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
