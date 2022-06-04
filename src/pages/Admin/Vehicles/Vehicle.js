import { Link } from "react-router-dom";

import { DirectionsCar as CarIcon } from "@mui/icons-material";
import { TwoWheeler as MotorIcon } from "@mui/icons-material";
import { DirectionsBike as BikeIcon } from "@mui/icons-material";
import { ElectricScooter as TrotinetIcon } from "@mui/icons-material";

import "../../style.css";

const typeIcons = {
  0: <CarIcon/>,
  1: <MotorIcon/>,
  2: <BikeIcon/>,
  3: <TrotinetIcon/>,
}

const Vehicle = (props) => {
  
  const vehicle = props.vehicle;

  return (
    <div className="vehicle">
      <div className="icon-left">
        {typeIcons[vehicle.type]}
      </div>
      <div className="data-right">
        <h3> {props.vehicle.regNumber} </h3>
        <p> Cena: {vehicle.price} RSD/h </p>
      </div>
      <div className="buttons-right">
        <Link className="link-button" to={`/admin/vehicle/${vehicle.id}/edit`}> Izmeni </Link>
        <Link className="link-button" to={`/admin/vehicle/${vehicle.id}/edit`}> Pregledaj </Link>
      </div>

    </div>
  );
}

export default Vehicle;
