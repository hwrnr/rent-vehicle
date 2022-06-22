import { useState } from "react";
import { TextField, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { Add as PlusIcon } from "@mui/icons-material";

import licna from "../../licna.webp";

import PasswordField from "../../components/PasswordField";

import "../style.css";

const Login = () => {

  const navigate = useNavigate();

  return (
    <div className="login force-margin">
      <p> Za nastavak je neophodno priložiti očitanu ličnu kartu ili pasoš </p>
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", width: "40%"}}>
        <img style={{objectFit: "cover", width: "5em"}} src={licna} alt=""/>
        <PlusIcon style={{color: "blue"}} />
      </div>
      <p> Ukoliko želite da iznajmite motorna vozila, priložite i vozačku dozvolu pored lične karte. Ukoliko nastavite bez vozačke dozvole, za iznajmljivanje će biti dostupno samo nemotorna vozila. </p>
      <Button fullWidth variant="contained" onClick={() => navigate("/user")}> Dodaj vozačku </Button>
      <Button fullWidth onClick={() => navigate("/user")}> Nastavi bez vozačke </Button>
    </div>
  )
}

export default Login;
