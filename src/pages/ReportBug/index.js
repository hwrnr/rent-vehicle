import { TextField, Button } from "@mui/material";


import "../style.css";

const ReportBug = () => {
  return (
    <div className="root force-margin">
      <h3> Prijava greške u radu aplikacije </h3>
      <TextField 
        fullWidth
        placeholder="Kratak opis greške"
      />
      <TextField 
        fullWidth
        placeholder="Detaljnije objašnjenje"
        multiline={true}
        minRows={3}
      />
      <Button
        fullWidth
        variant="contained"
      > Prijavi </Button>
    </div>
  )
}

export default ReportBug;
