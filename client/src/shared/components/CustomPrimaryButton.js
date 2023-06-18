import { Button } from "@mui/material";
import React from "react";

const CustomPrimaryButton = ({ label, addtionStyles, disabled, onClick }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          bgcolor: "#5865F2",
          color: "white",
          textTransform: "none",
          fontSize: "16px",
          fontWeight: 500,
          width: "100%",
          height: "40px",
        }}
        style={addtionStyles ? addtionStyles : {}}
        disabled={disabled}
        onClick={onclick}
      >
        {label}
      </Button>
    </>
  );
};

export default CustomPrimaryButton;
