import React from "react";
import "./App.css";
import Login from "./component/Login";
import Registration from "./component/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
