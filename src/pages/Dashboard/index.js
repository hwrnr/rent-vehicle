import { useState } from "react";
import { TextField, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import logo from "../../logo.svg";

import PasswordField from "../../components/PasswordField";

import "../style.css";

const Dashboard = () => {

  const navigate = useNavigate();

  return (
    <div className="login force-margin">
      <img src={logo} alt=""/>

      <Button fullWidth variant="contained" onClick={() => navigate("/user")}> User App </Button>
      <Button fullWidth variant="contained" onClick={() => navigate("/admin")}> Admin App </Button>
      <Button fullWidth variant="contained" onClick={() => navigate("/auth")}> Login for user </Button>
    </div>
  )
}

export default Dashboard;
