import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

const RedirectInfo = ({
  text,
  redirectText,
  additionStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{ color: "#727667d" }}
      style={additionStyles ? additionStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
