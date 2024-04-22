"use client";

import { Box, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const challengeContentURL = "/challenge";
const projectListURL = "/project/challenge";
const projectFormPage = "/project";
const projectPage = "/project";

const ChallengeContent = () => {
  const { auth } = useAuth();

  const { challengeId } = useParams();
  const navigate = useNavigate();
  const challengeLink = `/${challengeId}`;

  const [challengeContent, setChallengeContent] = useState([]);
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const ChallengeResponse = await axios.get(
          challengeContentURL + challengeLink,
          {
            cache: false,
          }
        );
        const ProjectResponse = await axios.get(projectListURL + challengeLink);
        setChallengeContent(ChallengeResponse.data);
        setProjectList(ProjectResponse.data.name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChallenge();
  }, [challengeId]);

  const changePage = (e) => {
    if (e == "formpage") {
      navigate(projectFormPage, {
        state: { challengeId: challengeId },
      });
    } else {
      navigate(e);
    }
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
      {auth.email && (
        <Box>
          <Button variant="contained" onClick={() => changePage("formpage")}>
            Loo projekt
          </Button>
          <Box>
            {projectList.map((project, index) => (
              <Button
                variant="contained"
                key={index + 1}
                onClick={() => changePage(projectPage + `/${index + 1}`)}
              >
                {project}
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ChallengeContent;
