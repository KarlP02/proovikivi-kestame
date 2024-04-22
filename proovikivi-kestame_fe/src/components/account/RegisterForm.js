import {
  Alert,
  Button,
  FormControl,
  TextField,
  Box,
  Fade,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "../../api/axios";
import { useEffect, useState } from "react";

const registerURL = "/api/auth/register";
const roleURL = "/role/selectable";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const [roleData, setRoleData] = useState([]);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    const fetchinfo = async () => {
      try {
        const response = await axios.get(roleURL);
        setRoleData(response.data.name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchinfo();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwordAgain) {
      axios
        .post(registerURL, {
          firstname: firstName,
          lastname: lastName,
          email: email,
          role: role,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          setFirstName("");
          setLastName("");
          setEmail("");
          setRole("");
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
      <form className="register_form_main" onSubmit={handleSubmit}>
        <FormControl className="register_form_1">
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
        </FormControl>
        <FormControl className="register_form_2">
          <InputLabel id="role-label">Vali roll</InputLabel>
          <Select
            className="role-type"
            labelId="role-label"
            label="Vali roll"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            {roleData.map((role, index) => (
              <MenuItem key={index + 1} value={role}>
                {role}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className="register_form_3">
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
