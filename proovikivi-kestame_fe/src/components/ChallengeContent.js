import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "../api/axios";

const challengeContentURL = "/challenge";

const ChallengeContent = ({ RouteID }) => {
  const [challengeContent, setChallengeContent] = useState([]);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(challengeContentURL + `/${RouteID}`);
        setChallengeContent(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChallenge();
  }, [RouteID]);

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
    </Box>
  );
};

export default ChallengeContent;
