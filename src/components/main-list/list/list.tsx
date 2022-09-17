
import React from "react";
import "./list.scss";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const today = dayjs();

const formatDate = (date: any) => dayjs(date).format("DD.MM.YYYY");

const formatTime = (date: any) => dayjs(date).format("HH:mm:ss");

console.log(formatTime(today))

const date = formatDate(today);
const time = formatTime(today);


export default function List(): JSX.Element {
  return (
    <section>
      <p className="date">{date}</p>
      <p className="date">{time}</p>
      <ul className="list">
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
            <li className="list__item">
              <input
                className="list__item--input"
                type="checkbox"
                name="name"
              />
              <p className="list__item__title">Title</p>
              <p className="list__item__description">
                Featherback yellowtail amberjack squeaker, knifejaw North
                American freshwater catfish mora; makso shark. South American
                darter Asian cearps;
              </p>
            </li>

            <li className="list__item">
              <input
                className="list__item--input"
                type="checkbox"
                name="name"
              />
              <p className="list__item__title">Title</p>
              <p className="list__item__description">
              Пернатый желтохвост амберджек пищалка, ножечелюст Север
                  мора американского пресноводного сома; максо акула. южноамериканец
                  стрекозы азиатские;
              </p>
            </li>
          </ul>
        </li>

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
