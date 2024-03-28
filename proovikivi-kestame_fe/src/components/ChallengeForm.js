import {
  Alert,
  Button,
  FormControl,
  TextField,
  Box,
  Fade,
  Select,
  MenuItem,
  InputLabel,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import axios from "../api/axios";
import { useState, useRef, useEffect } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useAuth from "../hooks/useAuth";

const challengeURL = "/challenge/category";
const targetAudienceURL = "/challenge/targetaudience";
const goalURL = "/challenge/goal";

const challengePostURL = "/challenge/upload";

const ChallengeForm = () => {
  const { auth } = useAuth();

  const [name, setName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [personEmail, setPersonEmail] = useState("");
  const [category, setCategory] = useState("");
  const [targetAudience, setTargetAudience] = useState([]);
  const [goal, setGoal] = useState([]);
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [beginDate, setBeginDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [categoryData, setCategoryData] = useState([]);
  const [targetAudienceData, setTargetAudienceData] = useState([]);
  const [goalData, setGoalData] = useState([]);

  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertOpen, setAlertOpen] = useState(false);

  const nameRef = useRef(null);
  const contactPersonRef = useRef(null);
  const personEmailRef = useRef(null);
  const categoryRef = useRef(null);
  const targetAudienceRef = useRef(null);
  const goalRef = useRef(null);
  const descriptionRef = useRef(null);
  const questionRef = useRef(null);
  const beginDateRef = useRef(null);
  const endDateRef = useRef(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const categoryResponse = await axios.get(challengeURL);
        const targetAudienceResponse = await axios.get(targetAudienceURL);
        const goalResponse = await axios.get(goalURL);
        setCategoryData(categoryResponse.data);
        setTargetAudienceData(targetAudienceResponse.data);
        setGoalData(goalResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInfo();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth.email !== undefined) {
      axios
        .post(challengePostURL, {
          name: nameRef.current.value,
          contact_person: contactPersonRef.current.value,
          person_email: personEmailRef.current.value,
          begin_date: beginDateRef.current.value,
          end_date: endDateRef.current.value,
          description: descriptionRef.current.value,
          question: questionRef.current.value,
          email: auth.email,
          category: categoryRef.current.value,
          target_audience: targetAudience,
          goal: goal,
        })
        .then(function (response) {
          console.log(response);
          setAlertMessage("Form submitted successfully");
          setAlertSeverity("success");
          setAlertOpen(true);
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      setAlertMessage("Check that every field in the form is filled");
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
      <form className="challenge_form_main" onSubmit={handleSubmit}>
        <FormControl className="challenge_form_1">
          <TextField
            className="name"
            label="Väljakutse nimi"
            type="string"
            value={name}
            inputRef={nameRef}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            className="contact_person"
            label="Peamine kontaktisik"
            type="string"
            value={contactPerson}
            inputRef={contactPersonRef}
            onChange={(e) => setContactPerson(e.target.value)}
            required
          />
          <TextField
            className="person_email"
            label="Kontaktisiku e-maili aadress"
            type="email"
            value={personEmail}
            inputRef={personEmailRef}
            onChange={(e) => setPersonEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl className="challenge_form_1">
          <InputLabel id="category-label">Väljakutse kategooria</InputLabel>
          <Select
            className="category"
            labelId="category-label"
            label="Väljakutse kategooria"
            value={category}
            inputRef={categoryRef}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {categoryData.map((data) => (
              <MenuItem key={data.id} value={data.id}>
                {data.name}
              </MenuItem>
            ))}
          </Select>
          <Box>Valige kuni 3 sihtgruppi</Box>
          <ToggleButtonGroup
            className="target_audience"
            label="Sihtgrupp"
            value={targetAudience}
            onChange={(e, newTargetAudience) =>
              setTargetAudience(newTargetAudience)
            }
            required
          >
            {targetAudienceData.map((data) => (
              <ToggleButton
                key={data.id}
                value={data.id}
                disabled={
                  targetAudience.length >= 3 &&
                  !targetAudience.includes(data.id)
                }
              >
                {data.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
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
          <TextField
            className="description"
            label="Väljakutse kirjeldus"
            type="string"
            value={description}
            inputRef={descriptionRef}
            multiline
            rows={6}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <TextField
            className="question"
            label="Küsimused"
            type="string"
            value={question}
            inputRef={questionRef}
            multiline
            rows={3}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="begin_date"
              label="Algus kuupäev"
              value={beginDate}
              inputRef={beginDateRef}
              onChange={(e) => setBeginDate(e)}
              required
            />
            <DatePicker
              className="end_date"
              label="Lõpp kuupäev"
              value={endDate}
              inputRef={endDateRef}
              onChange={(e) => setEndDate(e)}
              required
            />
          </LocalizationProvider>
          <Button variant="contained" type="submit">
            Loo Väljakutse
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default ChallengeForm;
