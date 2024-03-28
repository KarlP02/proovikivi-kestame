import "../styles/ChallengeStyles.css";
import { Box } from "@mui/material";
import React from "react";
import ChallengeForm from "../components/ChallengeForm";

const Challenge = () => {
  return (
    <Box className="challenge_form_page">
      <ChallengeForm />
    </Box>
  );
};

export default Challenge;
