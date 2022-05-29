import React from "react";

import { Route, Routes } from "react-router-dom";

import Page from "./pages";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Page.Home/>} />
      <Route path="/vehicles" element={<Page.Vehicles/>} />
      <Route path="/reserve" element={<Page.Reserve/>} />

    </Routes>
  )

}

export default Routing;
