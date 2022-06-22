import "../style.css";

import {TextField, Button } from '@mui/material';
import {DateTimePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import srLocale from 'date-fns/locale/sr'
import {useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Vehicle from "../Vehicles/Vehicle";

const Reserve = (props) => {
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const navigate = useNavigate();
  const {_id} = useParams();

  const [vehicle, setVehicle] = useState({});

  const fetchData = () => {
    axios.get(`http://127.0.0.1:5984/vehicles/${_id}`).then((res) => {
      setVehicle(res.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleReserve = () => {
    const _id = (new Date()).toISOString();
     axios.put(`http://127.0.0.1:5984/reservations/${_id}`, {
       _id, 
       startTime,
       endTime,
       vehicle,
       cena: Math.ceil((endTime - startTime) / (1000 * 60 * 60)) * vehicle.price,
     }).then(() => {
        navigate("/user/my-reservations");
     })
  }

  return (
    <div className="root">
      <h2> Rezerviši vozilo </h2>
      <Vehicle hideReserveButton={true} vehicle={vehicle} />
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={srLocale}>
        <div className="makeBigger">
          <DateTimePicker
  renderInput = {
    (props) => <TextField {
      ...props
    } />}
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
            renderInput={(props) => <TextField {...props} />
  } label = "Krajnje vreme"
  value = {endTime} fullwidth
            onChange={
    (newValue) => {
      if (newValue > startTime)
        setEndTime(newValue);
    }}
          />
        </div>

        <p> Cena: {Math.ceil((endTime - startTime) / (1000 * 60 * 60)) * vehicle.price } RSD + gorivo</p>
        <Button fullWidth variant="contained" onClick={handleReserve} > Rezerviši </Button>
      </LocalizationProvider>
    </div>
  );
};

export default Reserve;
