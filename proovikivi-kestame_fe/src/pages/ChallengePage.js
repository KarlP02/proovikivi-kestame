import { Box } from "@mui/material";
import ChallengeContent from "../components/ChallengeContent";

const ChallengePage = (RouteID) => {
  return (
    <Box>
      <ChallengeContent RouteID={RouteID.RouteID} />
    </Box>
  );
};

export default ChallengePage;
