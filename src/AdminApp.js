import React, { useState } from "react";

import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AdminRouting from "./adminRouting";

import logo from "./logo.svg";

import "./App.css";
import { AppBar, Drawer, Toolbar, Box, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (status) => () => {
    setIsDrawerOpen(status);
  };

  const DrawerLink = (props) => {
    return (
      <Link
        onClick={toggleDrawer(false)}
        className="drawer-button"
        {...props}
      ></Link>
    );
  };

  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          <Drawer
            anchor="left" //from which side the drawer slides in
            variant="permanent" //if and how easily the drawer can be closed
            open={isDrawerOpen} //if open is true, drawer is shown
            onClose={toggleDrawer(false)} //function that is called when the drawer should close
          >
            <Box style={{minHeight: "100%", display: "flex", flexDirection: "column"}}>
              <div className="fake-toolbar" style={{ height: "5.6em", backgroundColor: "#1976d2", color: "white", width: "100%",
                  display: "flex", alignItems: "center", justifyContent: "center" }} >
                <p> Rentify (Admin panel) </p>
              </div>
              <div style={{ width: "17em"}}>
                <img src={logo} alt="" />
              </div>
              <div class="apart">
                <div>
                  <DrawerLink to="/admin"> Početna </DrawerLink>
                  <DrawerLink to="/admin/vehicles"> Vozila </DrawerLink>
                  <DrawerLink to="/admin/users"> Korisnici </DrawerLink>
                </div>
                <div>
                  <DrawerLink to="/auth"> Odjavi me </DrawerLink>
                </div>
              </div>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
      <AdminRouting />
    </div>
  );
}

export default App;
