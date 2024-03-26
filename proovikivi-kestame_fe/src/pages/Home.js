import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Link to="/challenge">
        <Button>create challenge</Button>
      </Link>
    </Box>
  );
};

export default Home;
