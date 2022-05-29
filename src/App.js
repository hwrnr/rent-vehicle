import React, { useState } from "react";

import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routing";

import logo from "./logo.svg";

import './App.css';
import { AppBar, Drawer, Toolbar, Box, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

function App() {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (status) => () => {
    setIsDrawerOpen(status);
  }

  const DrawerLink = (props) => {
    return (
      <Link onClick={toggleDrawer(false)} className="drawer-button" {...props}></Link>
    )
  }


  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Toolbar>
              {/* hamburger icon shows the drawer on click */}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
              >
                <Menu />
              </IconButton>
              <p> Rent vehicle </p>

              <p style={{marginLeft: "auto"}}> 3120.84 RSD </p>

              <Drawer
                anchor="left" //from which side the drawer slides in
                variant="temporary" //if and how easily the drawer can be closed
                open={isDrawerOpen} //if open is true, drawer is shown
                onClose={toggleDrawer(false)} //function that is called when the drawer should close
              >
                  <Box>
                    <div style={{width: "17em"}}>
                      <img src={logo} alt=""/>
                    </div>
                    <DrawerLink to="/"> Home </DrawerLink>
                    <DrawerLink to="/vehicles"> Vehicles </DrawerLink>
                  </Box>
              </Drawer>
            </Toolbar>
        </AppBar>
        <Routing/>
      </Router>
    </div>
  );
}

export default App;
