import { Link } from "react-router-dom";

import { DirectionsCar as CarIcon } from "@mui/icons-material";
import { TwoWheeler as MotorIcon } from "@mui/icons-material";
import { DirectionsBike as BikeIcon } from "@mui/icons-material";
import { ElectricScooter as TrotinetIcon } from "@mui/icons-material";

import "../style.css";

const typeIcons = {
  0: <CarIcon/>,
  1: <MotorIcon/>,
  2: <BikeIcon/>,
  3: <TrotinetIcon/>,
}

const Vehicle = (props) => {
  
  const reservation = props.reservation;
  const vehicle = reservation.vehicle;

  return (
    <div className="vehicle">
      <div className="icon-left">
        {typeIcons[vehicle.type]}
      </div>
      <div className="data-right">
        <h3> {vehicle.regNumber} </h3>
        <p> Razdaljina: {vehicle.distance}m </p>
        <p> Vreme od: {(new Date(reservation.startTime)).toLocaleString("sr")} </p>
        <p> Vreme do: {(new Date(reservation.endTime)).toLocaleString("sr")} </p>
        <p> Cena: {reservation.cena} + gorivo </p>
      </div>
    {props.hideReserveButton ? null :
      <div className="buttons-right">
        <Link className="link-button" to="/user/reserve"> Rezerviši </Link>
      </div>
    }

    </div>
  );
}

export default Vehicle;
