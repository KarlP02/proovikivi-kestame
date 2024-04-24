import "../../styles/LoginStyles.css";
import { Box } from "@mui/material";
import LoginForm from "../../components/account/LoginForm";

const Login = () => {
  return (
    <Box className="login-form-page">
      <LoginForm />
    </Box>
  );
};

export default Login;
