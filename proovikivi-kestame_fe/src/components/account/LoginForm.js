import {
  Alert,
  Button,
  FormControl,
  TextField,
  Box,
  Fade,
} from "@mui/material";
import axios from "../../api/axios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const loginURL = "/api/auth/authenticate";

const LoginForm = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const register = "/register";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertOpen, setAlertOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      axios
        .post(loginURL, {
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          const accessToken = response.data.token;
          setAuth({ email, accessToken });
          setEmail("");
          setPassword("");
          navigate(from, { replace: true });
        })
        .catch(function (error) {
          console.error(error);
          setAlertMessage("Email and/or password incorrect");
          setAlertSeverity("error");
          setAlertOpen(true);
        });
    } else {
      setAlertMessage("Email and/or password missing");
      setAlertSeverity("error");
      setAlertOpen(true);
    }
    setTimeout(() => setAlertOpen(false), 5000);
  };

  return (
    <Box>
      <Fade in={alertOpen}>
        <Alert
          severity={alertSeverity}
          onClose={() => {
            setAlertMessage("");
            setAlertOpen(false);
          }}
        >
          {alertMessage}
        </Alert>
      </Fade>
      <form onSubmit={handleSubmit}>
        <FormControl className="login_form_main">
          <TextField
            className="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            className="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Button variant="contained" onClick={() => navigate(register)}>
            Register
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default LoginForm;
