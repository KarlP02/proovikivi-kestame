import "../../styles/LoginStyles.css";
import { Box } from "@mui/material";
import LoginForm from "../../components/account/LoginForm";

const Login = () => {
  return (
    <Box className="login_form_page">
      <LoginForm />
    </Box>
  );
};

export default Login;
