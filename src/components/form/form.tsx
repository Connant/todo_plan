import React from "react";
import Header from "../header/header";
import "./form.scss";

export default function Form(): JSX.Element {
  return (
    <div>
      <Header />
      <section className="form-section">
        <h2 className="form-section__title">New task? great, let's do it!</h2>
        <form className="form-section__form form">
          <label className="form__label label-title" htmlFor="title">
            Title
          </label>
          <input
            className="form__input input-title"
            type="text"
            name="title"
            id="title"
          />
          <label
            className="form__label label-description"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="form__input input-description"
            name="description"
            id="description"
          />
          <label className="form__label label-tag" htmlFor="tag">
            Tag
          </label>
          <select className="form__input input-tag" name="tag" id="tag">
            <option value="value1">#important</option>
            <option value="value2">#communication</option>
            <option value="value3">without tag</option>
          </select>
          <label className="form__label label-date" htmlFor="deadline_date">
            Deadline date
          </label>
          <input
            className="form__input input-date"
            type="date"
            name="deadline_date"
            id="deadline_date"
            defaultValue="2022-09-15"
          />
          <button className="form__button" type="submit">
            Add task
          </button>
        </form>
      </section>
    </div>
  );
}
