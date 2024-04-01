import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const fetchChallengesURL = "/challenge";

const ChallengeList = () => {
  const navigate = useNavigate();

  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const challengesResponse = await axios.get(fetchChallengesURL);
        setChallenges(challengesResponse.data);
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
      {challenges.map((challenge) => (
        <Button
          variant="contained"
          key={challenge.id}
          onClick={() => changePage(challenge.name)}
        >
          {challenge.name}
        </Button>
      ))}
    </Box>
  );
};

export default ChallengeList;
