import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const projectListURL = "/project";

const ProjectContent = () => {
  const { projectId } = useParams();
  const projectLink = `/${projectId}`;

  const [projectContent, setProjectContent] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const Response = await axios.get(projectListURL + projectLink);
        setProjectContent(Response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchInfo();
  }, [projectLink]);

  return (
    <Box>
      <Typography>Projekti nimi: {projectContent?.name}</Typography>
      <Typography>Kirjeldus: {projectContent?.description}</Typography>
      <Typography>
        Projekti peamine tüüp: {projectContent?.mainType?.name}
      </Typography>
      <Typography>Projekti tüüp: {projectContent?.type?.name}</Typography>
      <Typography>Panustus: {projectContent?.contribution?.name}</Typography>
      <Box>
        Eesmärgid:
        {projectContent?.goal?.map((data) => (
          <Typography key={data.id}>{data.name}</Typography>
        ))}
      </Box>
    </Box>
  );
};
export default ProjectContent;
