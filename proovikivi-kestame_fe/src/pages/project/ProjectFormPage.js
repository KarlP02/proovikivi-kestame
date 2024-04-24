import "../../styles/ProjectStyles.css";
import { Box } from "@mui/material";
import ProjectForm from "../../components/project/ProjectForm";

const ProjectFormPage = () => {
  return (
    <Box className="project-form-page">
      <ProjectForm />
    </Box>
  );
};
export default ProjectFormPage;
