import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "./form/form";
import MainList from "./main-list/main-list";

import Main from "./main/main";

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="/list" element={<MainList />} />

      <Route path="/form" element={<Form />} />

    </Routes>
  );
}
