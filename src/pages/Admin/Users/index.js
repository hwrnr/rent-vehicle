import { useState } from "react";

import { Button, MenuItem, Select, TextField } from "@mui/material";

import "../../style.css";

const typeIcons = {
  0: "Klijent",
  1: "Administrator",
  2: "Vozač",
  3: "Tehnička podrška",
  4: "Serviser",
};

const Users = () => {
  const [selectedType, setSelectedType] = useState(-1);

  const [kategorija, setKategorija] = useState(0);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jmbg, setJmbg] = useState("");
  const [plata, setPlata] = useState("");
  const [brojDokumenta, setBrojDokumenta] = useState("");
  const [brojRacuna, setBrojRacuna] = useState("");

  const [data, setData] = useState([
    {
      id: 1,
      name: "Petar",
      surname: "Petrović",
      jmbg: "3333333333333",
      email: "petar.petrovic@example.com",
      phone: "063/123-456",
      type: 0,
      brDokumenta: "999999999",
    },
    {
      id: 2,
      name: "Marko",
      surname: "Marković",
      jmbg: "4444444444444",
      email: "marko.markovic@example.com",
      phone: "063/729-486",
      type: 1,
      brDokumenta: "888888888",
      plata: 65000,
      brojRacuna: "74-87390748932-34",
    },
    {
      id: 3,
      name: "Ivan",
      surname: "Ivanović",
      jmbg: "5555555555555",
      email: "ivan.ivanovic@example.com",
      phone: "063/123-456",
      type: 1,
      brDokumenta: "777777777",
      plata: 65000,
      brojRacuna: "74-46376843723-34",
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
              <Button key={`typeIcons-${iconId}`} variant={Number(iconId) === selectedType ? "contained" : ""} onClick={handleIconPress(iconId)}>
                {typeIcons[iconId]}
              </Button>
            ))}
          </div>
          {data
            .filter((item) => item.type === selectedType || selectedType === -1)
            .sort((item1, item2) => item1.regNumber > item2.regNumber)
            .sort((item1, item2) => item1.type > item2.type)
            .map((user) => (
              <div className="user-container" key={`user-${user.id}`}>
                <div className="user-info">
                  <div className="user-name">
                    <p>{user.name}</p>
                    <p>{user.surname}</p>
                  </div>
                  <div className="user-details">
                    <p> JMBG: {user.jmbg} </p>
                    <p> Email: {user.email} </p>
                    <p> Telefon: {user.phone} </p>
                  </div>
                </div>
                <div className="user-info">
                  <div className="user-type">
                    <p>{typeIcons[user.type]}</p>
                  </div>
                  <div style={{ textAlign: "right" }} className="user-details">
                    <p> Broj lične karte (pasoša): {user.brDokumenta} </p>
                    {user.type === 0 ? null : (
                      <>
                        <p> Plata: {user.plata} </p>
                        <p> Broj računa: {user.brojRacuna} </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="column">
          <h2> Unesite novog korisnika </h2>

          <div className="force-margin">
            <Select fullWidth value={kategorija} onChange={(event) => setKategorija(Number(event.target.value))}>
              {Object.keys(typeIcons).map((iconId) => (
                <MenuItem key={`select-kat-korisnik-${iconId}`} value={iconId}>
                  {" "}
                  {typeIcons[iconId]}{" "}
                </MenuItem>
              ))}
            </Select>

            <TextField placeholder="Ime" fullWidth value={name} onChange={(event) => setName(event.target.value)} />

            <TextField placeholder="Prezime" fullWidth value={surname} onChange={(event) => setSurname(event.target.value)} />

            <TextField placeholder="JMBG" fullWidth value={jmbg} onChange={(event) => setJmbg(event.target.value)} />

            <TextField
              placeholder="Broj lične karte (pasoša)"
              fullWidth
              value={brojDokumenta}
              onChange={(event) => setBrojDokumenta(event.target.value)}
            />

            <TextField placeholder="Telefon" fullWidth value={phone} onChange={(event) => setPhone(event.target.value)} />

            <TextField placeholder="Email" fullWidth value={email} onChange={(event) => setEmail(event.target.value)} />

            <TextField placeholder="Plata" fullWidth value={plata} onChange={(event) => setPlata(event.target.value)} />

            <TextField placeholder="Broj računa" fullWidth value={brojRacuna} onChange={(event) => setBrojRacuna(event.target.value)} />

            <Button
              fullWidth
              variant="contained"
              onClick={() => {
                const dataCopy = [...data];
                dataCopy.push({
                  id: dataCopy.length + 1,
                  name: name,
                  surname: surname,
                  jmbg: jmbg,
                  email: email,
                  phone: phone,
                  type: kategorija,
                  brDokumenta: brojDokumenta,
                  plata: plata,
                  brojRacuna: brojRacuna,
                });
                setData(dataCopy);
                setKategorija(0);
                setName("");
                setSurname("");
                setJmbg("");
                setEmail("");
                setPhone("");
                setBrojDokumenta("");
                setPlata("");
                setBrojRacuna("");
              }}
            >
              {" "}
              Unesi novog korisnika{" "}
            </Button>
          </div>
        </div>
        {
          // <div className="column">
          // <ActivityView />
          // </div>
        }
      </div>
    </div>
  );
};

export default Users;
