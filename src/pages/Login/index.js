import { useState } from "react";
import { TextField, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import logo from "../../logo.svg";

import PasswordField from "../../components/PasswordField";

import "../style.css";

const Login = () => {

  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login force-margin">
      <img src={logo} alt=""/>
      <TextField fullWidth placeholder="Email" />
      <PasswordField fullWidth placeholder="Password" />
    {isRegister ? 
      <PasswordField fullWidth placeholder="Repeat password" />
      : null }

      <Button fullWidth variant="contained" onClick={() => navigate("/user")}> {isRegister ? "Register" : "Login" } </Button>
      <Button fullWidth onClick={() => setIsRegister(value => !value)}> { isRegister ? "Login instead" : "Register instead" } </Button>
    </div>
  )
}

export default Login;
