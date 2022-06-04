import React from "react";

import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";

import UserApp from "./UserApp";
import AdminApp from "./AdminApp";

import Page from "./pages";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Page.Dashboard />} />
      <Route path="/user/*" element={<UserApp/>} />
      <Route path="/admin/*" element={<AdminApp/>} />
      <Route path="/auth" element={<Login/>} />
    </Routes>
  )

}

export default Routing;
