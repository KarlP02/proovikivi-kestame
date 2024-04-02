import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const fetchChallengesURL = "/challenge/name";

const ChallengeList = () => {
  const navigate = useNavigate();

  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const challengesResponse = await axios.get(fetchChallengesURL);
        setChallenges(challengesResponse.data.name);
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
      {challenges.map((challenge, index) => (
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
