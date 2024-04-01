import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import Challenge from "./pages/Challenge";
import { useEffect, useState } from "react";
import axios from "./api/axios";
import ChallengeContent from "./components/ChallengeContent";

const fetchChallengesURL = "/challenge";

const App = () => {
  const [challengeRoutes, setChallengesRoutes] = useState([]);

  useEffect(() => {
    const fetchChallengeRoutes = async () => {
      try {
        const challengeRoutesResponse = await axios.get(fetchChallengesURL);
        setChallengesRoutes(challengeRoutesResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchChallengeRoutes();
  }, [challengeRoutes]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public */}
        <Route path="/" element={<Main />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {challengeRoutes.map((route) => (
          <Route
            key={route.id}
            path={route.name}
            element={<ChallengeContent RouteID={route.id} />}
          />
        ))}

        {/* auth */}
        <Route element={<RequireAuth allowedRoles={["USER"]} />}>
          <Route path="home" element={<Home />} />
          <Route path="challenge" element={<Challenge />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
