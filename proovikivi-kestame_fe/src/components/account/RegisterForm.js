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

const registerURL = "/api/auth/register";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertOpen, setAlertOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwordAgain) {
      axios
        .post(registerURL, {
          firstname: firstName,
          lastname: lastName,
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setPasswordAgain("");

          setAlertMessage("Registered account successfully");
          setAlertSeverity("success");
          setAlertOpen(true);
        })
        .catch(function (error) {
          console.error(error);
          setAlertMessage("Something went wrong");
          setAlertSeverity("error");
          setAlertOpen(true);
        });
    } else {
      setAlertMessage("Passwords do not match");
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
        <FormControl className="register_form_main">
          <TextField
            className="first_name"
            label="First name"
            type="string"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            className="last_name"
            label="Last name"
            type="string"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
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
          <TextField
            className="password_again"
            label="Password again"
            type="password"
            value={passwordAgain}
            onChange={(e) => setPasswordAgain(e.target.value)}
            required
          />
          <Button variant="contained" type="submit">
            Create Account
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default RegisterForm;
