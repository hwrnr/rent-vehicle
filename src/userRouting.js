import React from "react";

import { Route, Routes } from "react-router-dom";

import Page from "./pages";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Page.Home/>} />
      <Route path="/reserve-vehicles" element={<Page.Vehicles/>} />
      <Route path="/reserve" element={<Page.Reserve/>} />
      <Route path="/settings" element={<Page.Settings/>} />
      <Route path="/credit" element={<Page.Credit/>} />
      <Route path="/report" element={<Page.ReportBug/>} />
      <Route path="/chat" element={<Page.Chat/>} />
      <Route path="/faq" element={<Page.FAQ/>} />

    </Routes>
  )

}

export default Routing;
