import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/account/Register";
import Home from "./pages/Home";
import Login from "./pages/account/Login";
import Main from "./pages/Main";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import ChallengePage from "./pages/challenge/ChallengePage";
import ProjectFormPage from "./pages/project/ProjectFormPage";
import ProjectPage from "./pages/project/ProjectPage";
import ChallengeFormPage from "./pages/challenge/ChallengeFormPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public */}
        <Route path="/" element={<Main />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="challenge/:challengeId" element={<ChallengePage />} />

        {/* auth */}
        <Route element={<RequireAuth allowedRoles={["USER"]} />}>
          <Route path="home" element={<Home />} />
          <Route path="challenge" element={<ChallengeFormPage />} />
          <Route path="project" element={<ProjectFormPage />} />
          <Route path="project/:projectId" element={<ProjectPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
