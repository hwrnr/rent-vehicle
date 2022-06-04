import { useState } from "react";

import Vehicle from "./Vehicle";

import { Button, Select, MenuItem, TextField } from "@mui/material";

import { DirectionsCar as CarIcon } from "@mui/icons-material";
import { TwoWheeler as MotorIcon } from "@mui/icons-material";
import { DirectionsBike as BikeIcon } from "@mui/icons-material";
import { ElectricScooter as TrotinetIcon } from "@mui/icons-material";

import ActivityView from "../../../components/ActivityView";

import "../../style.css";

const typeIcons = {
  0: <CarIcon />,
  1: <MotorIcon />,
  2: <BikeIcon />,
  3: <TrotinetIcon />,
};

const AdminVehicles = () => {
  const [selectedType, setSelectedType] = useState(-1);

  const [kategorija, setKategorija] = useState(0);
  const [regBroj, setRegBroj] = useState("");
  const [cena, setCena] = useState("");

  const [data, setData] = useState([
    {
      id: 1,
      regNumber: "NS 555 RT",
      distance: 200,
      price: 100,
      type: 0,
    },
    {
      id: 2,
      regNumber: "NS 904 BR",
      distance: 1200,
      price: 100,
      type: 1,
    },
    {
      id: 3,
      regNumber: "Bike 12",
      distance: 600,
      price: 100,
      type: 2,
    },
    {
      id: 4,
      regNumber: "Trotinet 31",
      distance: 10,
      price: 100,
      type: 3,
    },
    {
      id: 5,
      regNumber: "NS 418 NJ",
      distance: 1000,
      price: 100,
      type: 1,
    },
  ]);

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
      <div className="columns-container">
        <div className="column">
          <div className="filteri">
            {Object.keys(typeIcons).map((iconId) => (
              <Button
                key={`typeIcons-${iconId}`}
                variant={Number(iconId) === selectedType ? "contained" : ""}
                onClick={handleIconPress(iconId)}
              >
              {typeIcons[iconId]}
            </Button>
            ))}
          </div>
          {data
            .filter((item) => item.type === selectedType || selectedType === -1)
            .sort((item1, item2) => item1.regNumber > item2.regNumber)
            .sort((item1, item2) => item1.type > item2.type)
            .map((vehicle) => (
              <Vehicle key={`vehicle-${vehicle.id}`} vehicle={vehicle} />
            ))}
        </div>
        <div className="column">
          <h2> Unesite novo vozilo </h2>

          <div className="force-margin">

            <Select value={kategorija} onChange={(event) => setKategorija(Number(event.target.value))}>
              {Object.keys(typeIcons).map((iconId) => (
                <MenuItem key={`select-kat-${iconId}`} value={iconId}> {typeIcons[iconId]} </MenuItem>
              ))}
            </Select>

            <TextField
              placeholder="Registarski/serijski broj vozila"
              fullWidth
              value={regBroj}
              onChange={(e) => setRegBroj(e.target.value)}
            />

            <TextField
              placeholder="Cena iznajmiljivanja vozila po satu"
              fullWidth
              value={cena}
              onChange={(e) => setCena(e.target.value)}
            />

          <Button fullWidth variant="contained" onClick={() => {
            const dataCopy = [...data];
            dataCopy.push({
                id: Object.keys(data).length + 1,
                regNumber: regBroj,
                distance: 200,
                price: Number(cena),
                type: kategorija,
            })
            setData(dataCopy);
          }} > Unesi vozilo </Button>

          </div>
        </div>
        <div className="column">
          <ActivityView />
        </div>
      </div>
    </div>
  );
};

export default AdminVehicles;
