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
} from "@mui/material";
import axios from "../api/axios";
import { useState, useRef, useEffect } from "react";

const ChallengeForm = () => {
  const [name, setName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [personEmail, setPersonEmail] = useState("");
  const [category, setCategory] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [goal, setGoal] = useState("");
  const [description, setDescription] = useState("");
  const [question, setQuestion] = useState("");
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  const handleSubmit = (e) => {
    return null;
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoryResponse = await axios.get("/challenge/category");
        setCategoryData(categoryResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

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
            type="string"
            value={personEmail}
            inputRef={personEmailRef}
            onChange={(e) => setPersonEmail(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
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
            {categoryData.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
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
          <Button type="submit">Loo Väljakutse</Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default ChallengeForm;
