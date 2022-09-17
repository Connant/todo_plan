import React from "react";
import Header from "../header/header";
import Settings from "../settings/settings";
import List from "./list/list";

import "./main-list.scss";

export default function MainList(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="main-list">
        <List />
        <Settings />
      </div>
    </div>
  );
}
