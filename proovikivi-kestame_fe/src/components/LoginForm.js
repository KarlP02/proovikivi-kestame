import {
  Alert,
  Button,
  FormControl,
  TextField,
  Box,
  Fade,
} from "@mui/material";
import axios from "../api/axios";
import { useState, useRef } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";

const loginURL = "/api/auth/authenticate";

const LoginForm = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertOpen, setAlertOpen] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailRef.current.value != null && passwordRef.current.value != null) {
      axios
        .post(loginURL, {
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
        .then(function (response) {
          console.log(response);
          const accessToken = response.data.token;
          const roles = [];
          roles.push(response.data.role);
          setAuth({ email, password, roles, accessToken });
          navigate(from, { replace: true });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setAlertMessage("Email and/or password incorrect");
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
        <FormControl>
          <TextField
            className="email"
            label="Email"
            type="email"
            value={email}
            inputRef={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            className="password"
            label="Password"
            type="password"
            value={password}
            inputRef={passwordRef}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default LoginForm;
