import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Box>
      <Link to="/register">
        <Button>register</Button>
      </Link>
      <Link to="/login">
        <Button>login</Button>
      </Link>
    </Box>
  );
};

export default Main;
