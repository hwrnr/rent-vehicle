import React, { useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, IconButton, InputAdornment } from "@mui/material";

const PasswordField = (props) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
      <TextField
        {...props}
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
        InputProps={{
         endAdornment: (
           <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword((value) => (!value))}
                edge="end"
                component="span"
                color="primary"
                tabIndex={-1}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
         )
       }}
      />
  );
};

export default PasswordField;

