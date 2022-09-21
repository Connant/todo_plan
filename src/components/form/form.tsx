import React, { FormEvent, useState } from "react";
import { loadTaskList, useAppDispatch, useAppSelector } from "../../store/reducer";
import Header from "../header/header";
import { nanoid } from 'nanoid'
import "./form.scss";
import { getTaskList } from "../../store/selectors";
import { useNavigate } from "react-router-dom";

export default function Form(): JSX.Element {

  const task = useAppSelector(getTaskList);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  console.log(task)


  // const send = (data: TaskType) => dispatch(addTask(data));

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    const postData = {
      id: nanoid(),
      title: title,
      description: description,
      done: false
    };

    const arr = task;

    dispatch(loadTaskList([...arr, postData]))
    navigate('/list')
  };


  return (
    <div>
      <Header />
      <section className="form-section">
        <h2 className="form-section__title">New task? great, let's do it!</h2>
        <form className="form-section__form form" action="#" onSubmit={handleSubmit}>
          <label className="form__label label-title" htmlFor="title">
            Title
          </label>
          <input
            className="form__input input-title"
            type="text"
            name="title"
            id="title"
            onChange={(evt) => setTitle(evt.currentTarget.value)}
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
            onChange={(evt) => setDescription(evt.currentTarget.value)}
          />
          <button className="form__button" type="submit">
            Add task
          </button>
        </form>
      </section>
    </div>
  );
}
