import "../../styles/ChallengeStyles.css";
import { Box } from "@mui/material";
import React from "react";
import ChallengeForm from "../../components/challenge/ChallengeForm";

const ChallengeFormPage = () => {
  return (
    <Box className="challenge-form-page">
      <ChallengeForm />
    </Box>
  );
};

export default ChallengeFormPage;
