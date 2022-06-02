import { useState } from "react";

import Vehicle from "./Vehicle";

import { Button } from "@mui/material";

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

const Vehicles = () => {

  const [selectedType, setSelectedType] = useState(-1);

  const data = [
    {
      regNumber: "NS 555 RT",
      distance: 200,
      price: 100,
      type: 0,
    },
    {
      regNumber: "NS 904 BR",
      distance: 1200,
      price: 100,
      type: 1,
    },
    {
      regNumber: "Bike 12",
      distance: 600,
      price: 100,
      type: 2,
    },
    {
      regNumber: "Trotinet 31",
      distance: 10,
      price: 100,
      type: 3,
    },
    {
      regNumber: "NS 418 NJ",
      distance: 1000,
      price: 100,
      type: 1,
    },
  ]

  const handleIconPress = (value) => () => {
    setSelectedType((oldSelectedType) => {
      if (oldSelectedType === Number(value)){
        return -1;
      }
      return Number(value);
    })
  }

  return (
    <div className="root">
      <div className="filteri">
        {Object.keys(typeIcons).map(iconId => 
          <Button key={`typeIcons-${iconId}`} variant={ Number(iconId) === selectedType ? "contained" : ""} onClick={handleIconPress(iconId)} > {typeIcons[iconId]} </Button>
        )}
      </div>
      {data
        .filter(item => item.type === selectedType || selectedType === -1)
        .sort((item1, item2) => item1.distance > item2.distance)
        .map(vehicle => <Vehicle key={`vehicle-${vehicle.regNumber}`} vehicle={vehicle}/>)
      }
    </div>
  )
}

export default Vehicles;
