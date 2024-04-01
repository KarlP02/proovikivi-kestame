import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "../api/axios";

const fetchChallengeURL = "/challenge";

const ChallengeContent = (RouteID) => {
  const [challenge, setChallenge] = useState([]);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const challengeResponse = await axios.get(
          fetchChallengeURL + `/${RouteID.RouteID}`
        );
        setChallenge(challengeResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChallenge();
  }, []);

  return (
    <Box>
      <Typography>Projekti nimi: {challenge?.name}</Typography>
      <Typography>Kontaktisik: {challenge?.contact_person}</Typography>
      <Typography>Kontaktisiku email: {challenge?.person_email}</Typography>
      <Typography>Algus kuupäev: {challenge?.begin_date}</Typography>
      <Typography>Lõpp kuupäev: {challenge?.end_date}</Typography>
      <Typography>Kirjeldus: {challenge?.description}</Typography>
      <Typography>Kategooria: {challenge?.category?.name}</Typography>
      <Box>
        Sihtgrupp:
        {challenge?.target_audience?.map((data) => (
          <Typography key={data.id}>{data.name}</Typography>
        ))}
      </Box>
      <Box>
        Eesmärgid:
        {challenge?.goal?.map((data) => (
          <Typography key={data.id}>{data.name}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ChallengeContent;
