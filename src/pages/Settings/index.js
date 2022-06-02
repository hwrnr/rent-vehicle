import "../style.css";

import { Button } from '@mui/material';

const Card = (props) => {
  return (
    <div className="card-item">
      <h4> {props.title} </h4>
      <p> {props.text} </p>
    </div>
  );
}

const Settings = (props) => {

  const person = {
    name: "Petar",
    surname: "Petrović",
    jmbg: "3333333333333",
    brDokumenta: "999999999",
    address: "Ulica 12",
  }

  return (
    <div className="root">
      <Card title="Ime" text={person.name} />
      <Card title="Prezime" text={person.surname} />
      <Card title="JMBG" text={person.jmbg} />
      <Card title="Broj lične karte (pasoša)" text={person.brDokumenta} />
      <Card title="Adresa" text={person.address} />

      <div style={{width: "calc(100% - 2em)", margin: "1em"}}>
        <Button variant="contained" style={{width: "100%"}}>Promeni lozinku </Button>
        <Button color="error" style={{width: "100%", marginTop: "1em"}}>Obriši nalog</Button>
      </div>
    </div>
  )
}

export default Settings;
