import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/header";
import "./main.scss";

export default function Main(): JSX.Element {
  return (
    <div className="main">
      <Header />
      <div className="main__button-wrapper">
        <Link to="/list" className="main__button" data-text="Get started">
          {/* <Link to="/" className="main__button--link"> */}
          Get started
          {/* </Link> */}
        </Link>
      </div>
    </div>
  );
}
