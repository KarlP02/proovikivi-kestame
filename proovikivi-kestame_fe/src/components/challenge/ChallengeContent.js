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
    const fetchInfo = async () => {
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
    fetchInfo();
  }, [challengeLink]);

  const changePage = (e) => {
    if (e === "formpage") {
      navigate(projectFormPage, {
        state: { challengeId: challengeId },
      });
    } else {
      navigate(e);
    }
  };

  return (
    <Box className="challenge-content">
      <Box className="general-info">
        <Box className="challenge-info">
          <Typography variant="h2" color="#9525c4">
            {challengeContent?.name}
          </Typography>
          <Typography>Toimumisaeg:</Typography>
          <Typography>
            {challengeContent?.begin_date} - {challengeContent?.end_date}
          </Typography>
          <Typography>Panustab eesmärkidesse:</Typography>
          {challengeContent?.goal?.map((data) => (
            <Typography key={data.id}>{data.name}</Typography>
          ))}
          <Typography>Sihtgrupid:</Typography>
          {challengeContent?.target_audience?.map((data) => (
            <Typography key={data.id}>{data.name}</Typography>
          ))}
        </Box>
        <Box className="media">
          <Typography color="red">video or picture</Typography>
        </Box>
      </Box>
      <Typography>Kontaktisik: {challengeContent?.contact_person}</Typography>
      <Typography>
        Kontaktisiku email: {challengeContent?.person_email}
      </Typography>
      <Typography>Kategooria: {challengeContent?.category?.name}</Typography>
      <Box className="overview">
        <Typography variant="h5">Ülevaade</Typography>
        <Box className="overview-content">
          <Typography>Asukoht:</Typography>
          <Typography>Projektide arv:</Typography>
          <Typography>Meeskonnaliikmed:</Typography>
          <Typography>Vabatahtlikud:</Typography>
          <Typography>Mentorid:</Typography>
          <Typography>Osalejad kokku:</Typography>
        </Box>
      </Box>
      <Box className="main-info">
        <Typography variant="h3">Proovikivi tutvustus</Typography>
        <Box className="main-info-text">
          <Typography>{challengeContent?.description}</Typography>
        </Box>
      </Box>
      {auth.email && (
        <Box className="project-section">
          <Box className="project-top">
            <Typography variant="h3">Loodud projektid</Typography>
            <Button variant="contained" onClick={() => changePage("formpage")}>
              Loo projekt
            </Button>
          </Box>
          <Box className="created-project">
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
