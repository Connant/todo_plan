import React, { useEffect, useState } from "react";
import "./list.scss";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useSelector } from "react-redux";
import { getTaskList } from "../../../store/selectors";
import {
  TaskList,
  TaskType,
  useAppDispatch,
  useAppSelector,
} from "../../../store/reducer";
import { getAllTask } from "../../../store/actions-api";

dayjs.extend(duration);

const today = dayjs();

const formatDate = (date: any) => dayjs(date).format("DD.MM.YYYY");

const date = formatDate(today);

export default function List(): JSX.Element {
  const task = useAppSelector(getTaskList);
  const dispatch = useAppDispatch();

  console.log(task);

  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  // let time = new Date().toLocaleTimeString();
  // let [currentTime, changeTime] = useState(time);

  // function checkTime() {
  //   time = new Date().toLocaleTimeString();
  //   changeTime(time);
  // }

  // setInterval(checkTime, 1000);
  return (
    <section>
      <p className="date">{date}</p>
      {/* <p className="date">{currentTime}</p> */}
      <ul className="list">
        {task.map((product: TaskType, i) => (
          <li className="list__item">
            <input className="list__item--input" type="checkbox" name="name" />
          <p className="list__item__title">Title</p>
          <button className="list__item__button" />
          <p className="list__item__description">
            Featherback yellowtail amberjack squeaker, knifejaw North American
            freshwater catfish mora; makso shark. South American darter Asian
            cearps;
          </p>
            <ul className="list__item list__item--sublist sublist">
              <li className="list__item" key={i}>
                <input
                  className="list__item--input"
                  type="checkbox"
                  name="name"
                />
                <p className="list__item__title">{product.title}</p>
                <p className="list__item__description">{product.description}</p>
              </li>

            </ul>
          </li>
        ))}

        <li className="list__item">
          <input className="list__item--input" type="checkbox" name="name" />
          <p className="list__item__title">Title</p>
          <button className="list__item__button" />
          <p className="list__item__description">
            Featherback yellowtail amberjack squeaker, knifejaw North American
            freshwater catfish mora; makso shark. South American darter Asian
            cearps;
          </p>
        </li>
      </ul>
    </section>
  );
}
