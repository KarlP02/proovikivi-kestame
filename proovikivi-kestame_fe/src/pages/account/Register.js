import "../../styles/RegisterStyles.css";
import { Box } from "@mui/material";
import RegisterForm from "../../components/account/RegisterForm";

const Register = () => {
  return (
    <Box className="register_form_page">
      <RegisterForm />
    </Box>
  );
};

export default Register;
