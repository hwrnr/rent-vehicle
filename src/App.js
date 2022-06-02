import React, { useState } from "react";

import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import UserRouting from "./userRouting";

import logo from "./logo.svg";

import UserApp from "./UserApp";
import Routing from "./routing";

import './App.css';
import { AppBar, Drawer, Toolbar, Box, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

function App() {

  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
