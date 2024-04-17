"use client";

import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useParams, useNavigate } from "react-router-dom";

const challengeContentURL = "/challenge";

const ChallengeContent = () => {
  const { challengeId } = useParams();
  const navigate = useNavigate();
  const projectFormPage = "/project";

  const [challengeContent, setChallengeContent] = useState([]);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(
          challengeContentURL + `/${challengeId}`,
          {
            cache: false,
          }
        );
        setChallengeContent(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChallenge();
  }, [challengeId]);

  const changePage = () => {
    navigate(projectFormPage);
  };

  return (
    <Box>
      <Typography>Projekti nimi: {challengeContent?.name}</Typography>
      <Typography>Kontaktisik: {challengeContent?.contact_person}</Typography>
      <Typography>
        Kontaktisiku email: {challengeContent?.person_email}
      </Typography>
      <Typography>Algus kuupäev: {challengeContent?.begin_date}</Typography>
      <Typography>Lõpp kuupäev: {challengeContent?.end_date}</Typography>
      <Typography>Kirjeldus: {challengeContent?.description}</Typography>
      <Typography>Kategooria: {challengeContent?.category?.name}</Typography>
      <Box>
        Sihtgrupp:
        {challengeContent?.target_audience?.map((data) => (
          <Typography key={data.id}>{data.name}</Typography>
        ))}
      </Box>
      <Box>
        Eesmärgid:
        {challengeContent?.goal?.map((data) => (
          <Typography key={data.id}>{data.name}</Typography>
        ))}
      </Box>
      <Button variant="contained" onClick={() => changePage()}>
        Loo projekt
      </Button>
    </Box>
  );
};

export default ChallengeContent;