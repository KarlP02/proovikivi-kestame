import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";

const ProjectForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState([]);

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            className="name"
            label="Projekti/algatuse/tegevuse nimi"
            type="string"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormControl>
        <FormControl>
          <InputLabel id="type-label">Algatuse tüüp</InputLabel>
          <Select
            className="type"
            labelId="type-label"
            label="Algatuse tüüp"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            {/* {categoryData.map((data) => (
              <MenuItem key={data.id} value={data.id}>
                {data.name}
              </MenuItem>
            ))} */}
          </Select>
        </FormControl>
      </form>
    </Box>
  );
};
export default ProjectForm;
