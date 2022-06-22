import { useState, useEffect } from "react";

import Vehicle from "./Vehicle";

import { Button } from "@mui/material";

import { DirectionsCar as CarIcon } from "@mui/icons-material";
import { TwoWheeler as MotorIcon } from "@mui/icons-material";
import { DirectionsBike as BikeIcon } from "@mui/icons-material";
import { ElectricScooter as TrotinetIcon } from "@mui/icons-material";

import axios from "axios";

import "../style.css";

const typeIcons = {
  0: <CarIcon />,
  1: <MotorIcon />,
  2: <BikeIcon />,
  3: <TrotinetIcon />,
};

const Vehicles = () => {
  const [selectedType, setSelectedType] = useState(-1);

  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get(`http://127.0.0.1:5984/vehicles/_all_docs?include_docs=true`).then((res) => {
      setData(res.data.rows.map(row => row.doc));
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleIconPress = (value) => () => {
    setSelectedType((oldSelectedType) => {
      if (oldSelectedType === Number(value)) {
        return -1;
      }
      return Number(value);
    });
  };

  return (
    <div className="root">
      <div className="filteri">
        {Object.keys(typeIcons).map((iconId) => (
          <Button
            key={`typeIcons-${iconId}`}
            variant={Number(iconId) === selectedType ? "contained" : ""}
            onClick={handleIconPress(iconId)}
          >
            {" "}
            {typeIcons[iconId]}{" "}
          </Button>
        ))}
      </div>
      {data
        .filter((item) => item.type === selectedType || selectedType === -1)
        .sort((item1, item2) => item1.distance > item2.distance)
        .map((vehicle) => (
          <Vehicle key={`vehicle-${vehicle.regNumber}`} vehicle={vehicle} />
        ))}
    </div>
  );
};

export default Vehicles;
