import React, { useState } from "react";

import { Link } from "react-router-dom";
import UserRouting from "./userRouting";

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
          {/* hamburger icon shows the drawer on click */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
          <p> Rentify </p>

          <Link
            to="/user/credit"
            style={{
              marginLeft: "auto",
              cursor: "pointer",
              color: "unset",
              textDecoration: "none",
            }}
          >
            {" "}
            3.120,84 RSD{" "}
          </Link>

          <Drawer
            anchor="left" //from which side the drawer slides in
            variant="temporary" //if and how easily the drawer can be closed
            open={isDrawerOpen} //if open is true, drawer is shown
            onClose={toggleDrawer(false)} //function that is called when the drawer should close
          >
            <Box style={{minHeight: "100%", display: "flex", flexDirection: "column"}}>
              <div style={{ width: "17em" }}>
                <img src={logo} alt="" />
              </div>
              <div class="apart">
                <div>
                  <DrawerLink to="/user/"> Početna </DrawerLink>
                  <DrawerLink to="/user/reserve-vehicles"> Napravi rezervaciju </DrawerLink>
                  <DrawerLink to="/user/vehicles"> Moje rezervacije </DrawerLink>
                  <DrawerLink to="/user/credit"> Uplati kredit </DrawerLink>
                  <DrawerLink to="/user/chat"> Razgovor sa tehničkom podrškom </DrawerLink>
                  <DrawerLink to="/user/settings"> O meni </DrawerLink>
                </div>
                <div>
                  <DrawerLink to="/user/faq"> FAQ </DrawerLink>
                  <DrawerLink to="/user/report"> Prijavi grešku u app </DrawerLink>
                  <DrawerLink to="/auth"> Odjavi se </DrawerLink>
                </div>
              </div>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
      <UserRouting />
    </div>
  );
}

export default App;
