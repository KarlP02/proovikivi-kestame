import {
  Alert,
  Button,
  FormControl,
  TextField,
  Box,
  Fade,
} from "@mui/material";
import axios from "axios";
import { useState, useRef } from "react";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertOpen, setAlertOpen] = useState(false);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordAgainRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value == passwordAgainRef.current.value) {
      axios
        .post("http://localhost:8080/v1/user", {
          firstname: firstNameRef.current.value,
          lastname: lastNameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          deleted: false,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setAlertMessage("Form submitted successfully!");
      setAlertSeverity("success");
      setAlertOpen(true);
    } else {
      setAlertMessage("Passwords do not match!");
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
            className="first_name"
            label="First name"
            type="string"
            value={firstName}
            inputRef={firstNameRef}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            className="last_name"
            label="Last name"
            type="string"
            value={lastName}
            inputRef={lastNameRef}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
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
          <TextField
            className="password_again"
            label="Password again"
            type="password"
            value={passwordAgain}
            inputRef={passwordAgainRef}
            onChange={(e) => setPasswordAgain(e.target.value)}
            required
          />
          <Button type="submit">Create Account</Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default RegisterForm;
