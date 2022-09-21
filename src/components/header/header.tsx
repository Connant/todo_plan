import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

export default function Header(): JSX.Element {
  const location = window.location.pathname;

  const main = "Welcome, here you can write down your tasks.";
  const list = "That's what we need to do today.";
  const form = "let's add a new task";

  const content = (loc: string) => {
    if (loc === "/") {
      return main;
    }

    if (loc === "/list") {
      return list;
    }

    if (loc === "/form") {
      return form;
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__main-title">Task list</h1>
      </Link>

      <Link to="/list">
        <h2 className="header__main-title">back</h2>
      </Link>

      <h2 className="header__title">{content(location)}</h2>

      {location === "/list" ? (
        <Link to="/form">
          <button className="heder__button" />
        </Link>
      ) : (
        ""
      )}
    </header>
  );
}
