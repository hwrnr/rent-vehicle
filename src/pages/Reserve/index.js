import { useState } from "react";

import { TextField } from '@mui/material';
import { Link } from "react-router-dom";

import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import srLocale from 'date-fns/locale/sr'

import Vehicle from "../Vehicles/Vehicle";

import "../style.css";

const Reserve = (props) => {

  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const [vehicle, setVehicle] = useState({
    regNumber: "NS 418 NJ",
    distance: 1000,
    price: 100,
    type: 1,
  });

  return (
    <>
      <h2> Rezerviši vozilo </h2>
      <Vehicle hideReserveButton={true} vehicle={vehicle} />
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={srLocale}>
        <div className="makeBigger">
          <DateTimePicker 
            renderInput={(props) => <TextField {...props} />}
            label="Početno vreme"
            value={startTime}
            fullwidth
            onChange={(newValue) => {
              if (newValue < endTime)
                setStartTime(newValue);
            }}
          />
        </div>
        <div className="makeBigger">
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Krajnje vreme"
            value={endTime}
            fullwidth
            onChange={(newValue) => {
              if (newValue > startTime)
                setEndTime(newValue);
            }}
          />
        </div>

        <p> Cena: {Math.ceil((endTime - startTime) / (1000 * 60 * 60)) * vehicle.price } RSD</p>
        <Link className="link-button" to="/vehicles"> Rezerviši </Link>
      </LocalizationProvider>
    </>
  );
};

export default Reserve;
