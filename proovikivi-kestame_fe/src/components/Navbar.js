import {
  AppBar,
  Box,
  Button,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

const defaultPages = ["main"];
const loginPages = ["login", "register"];
const userPages = ["home", "challenge"];

const Navbar = () => {
  const { auth } = useAuth();

  const navigate = useNavigate();

  const [pages, setPages] = useState([]);

  useEffect(() => {
    const userLoggedIn = async () => {
      try {
        if (auth?.accessToken !== undefined) {
          setPages(defaultPages.concat(userPages));
        } else {
          setPages(defaultPages.concat(loginPages));
        }
      } catch (error) {
        console.error(error);
      }
    };
    userLoggedIn();
  }, [auth]);

  const changePage = (e) => {
    if (e === "main") {
      e = "";
    }
    const url = `/${e}`;
    navigate(url);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box>
            {pages.map((page) => (
              <Button
                sx={{ color: "black" }}
                key={page}
                onClick={() => changePage(page)}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
