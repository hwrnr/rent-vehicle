import { useState } from "react";
import { Box, Collapse } from "@mui/material";

import "../style.css";

const CollapseContainer = (props) => {

  const [checked, setChecked] = useState(false);

  return (
    <div className="collapse-container">
      <h3 onClick={() => setChecked(value => !value)}> {props.title} </h3>
      <Box sx={{ display: 'flex' }}>
        <Collapse in={checked}>{props.children}</Collapse>
      </Box>
    </div>
  )
}

export default CollapseContainer;
