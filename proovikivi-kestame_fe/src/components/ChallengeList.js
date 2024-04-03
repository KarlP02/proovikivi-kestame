import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const challengeListURL = "/challenge/name";

const ChallengeList = () => {
  const navigate = useNavigate();

  const [challengeList, setChallengesList] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(challengeListURL);
        setChallengesList(response.data.name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChallenges();
  }, []);

  const changePage = (e) => {
    navigate(`/${e}`);
  };

  return (
    <Box>
      {challengeList.map((challenge, index) => (
        <Button
          variant="contained"
          key={index + 1}
          onClick={() => changePage(challenge)}
        >
          {challenge}
        </Button>
      ))}
    </Box>
  );
};

export default ChallengeList;
