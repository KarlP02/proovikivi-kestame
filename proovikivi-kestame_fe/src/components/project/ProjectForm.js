import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  ToggleButtonGroup,
  ToggleButton,
  Fade,
  Alert,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";

const ProjectPostURL = "/project/upload";
const mainTypeURL = "/project/main-type";
const contributionURL = "/project/contribution";
const typeURL = "/project/type";
const goalURL = "/goal";

const ProjectForm = () => {
  const { auth } = useAuth();

  const location = useLocation();
  const { challengeId } = location.state || {};

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [mainType, setMainType] = useState("");
  const [contribution, setContribution] = useState("");
  const [type, setType] = useState("");
  const [goal, setGoal] = useState([]);

  const [mainTypeData, setMainTypeData] = useState([]);
  const [contributionData, setContributionData] = useState([]);
  const [typeData, setTypeData] = useState([]);
  const [goalData, setGoalData] = useState([]);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const mainTypeResponse = await axios.get(mainTypeURL);
        const contributionResponse = await axios.get(contributionURL);
        const typeResponse = await axios.get(typeURL);
        const goalResponse = await axios.get(goalURL);
        setMainTypeData(mainTypeResponse.data);
        setContributionData(contributionResponse.data);
        setTypeData(typeResponse.data);
        setGoalData(goalResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInfo();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth.email !== undefined || challengeId !== undefined) {
      axios
        .post(ProjectPostURL, {
          user: auth.email,
          name: name,
          description: description,
          keywords: keywords,
          mainType: mainType,
          contribution: contribution,
          type: type,
          goal: goal,
          challengeId: challengeId,
        })
        .then(function (response) {
          console.log(response);
          setAlertMessage("Form submitted successfully");
          setAlertSeverity("success");
          setAlertOpen(true);
        })
        .catch(function (error) {
          console.error(error);
          setAlertMessage("Check that every field is filled");
          setAlertSeverity("error");
          setAlertOpen(true);
        });
    } else {
      setAlertMessage("Need to be logged in to submit");
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
      <form className="project-form-main" onSubmit={handleSubmit}>
        <FormControl className="project-form-1">
          <TextField
            className="name"
            label="Projekti/algatuse/tegevuse nimi"
            type="string"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            className="description"
            label="Lisa projekti/algatuse/tegevuse lühikirjeldus"
            type="string"
            value={description}
            multiline
            rows={6}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <TextField
            className="keywords"
            label="Lisa soovi korral märksõnu"
            type="string"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </FormControl>
        <FormControl className="project-form-2">
          <InputLabel id="main-type-label">Algatuse peamine tüüp</InputLabel>
          <Select
            className="main-type"
            labelId="type-label"
            label="Algatuse peamine tüüp"
            value={mainType}
            onChange={(e) => setMainType(e.target.value)}
            required
          >
            {mainTypeData.map((data) => (
              <MenuItem key={data.id} value={data.id}>
                {data.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className="project-form-3">
          <InputLabel id="contribution-label">Panus</InputLabel>
          <Select
            className="contribution"
            labelId="contribution-label"
            label="Algatuse tüüp"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            required
          >
            {contributionData.map((data) => (
              <MenuItem key={data.id} value={data.id}>
                {data.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className="project-form-4">
          <InputLabel id="type-label">Algatuse tüüp</InputLabel>
          <Select
            className="type"
            labelId="type-label"
            label="Algatuse tüüp"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            {typeData.map((data) => (
              <MenuItem key={data.id} value={data.id}>
                {data.name}
              </MenuItem>
            ))}
          </Select>
          <Box>Valige kuni 3 eesmärki</Box>
          <ToggleButtonGroup
            className="goal"
            labal="Eesmärk"
            value={goal}
            onChange={(e, newGoal) => setGoal(newGoal)}
            required
          >
            {goalData.map((data) => (
              <ToggleButton
                key={data.id}
                value={data.id}
                disabled={goal.length >= 3 && !goal.includes(data.id)}
              >
                {data.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <Button variant="contained" type="submit">
            Loo Projekt
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
export default ProjectForm;
