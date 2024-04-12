import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import ChallengePage from "./pages/ChallengePage";
import ProjectFormPage from "./pages/ProjectFormPage";
import ProjectPage from "./pages/ProjectPage";
import ChallengeFormPage from "./pages/ChallengeFormPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public */}
        <Route path="/" element={<Main />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="challenge/:challengeId" element={<ChallengePage />} />
        <Route path="project/:projectId" element={<ProjectPage />} />

        {/* auth */}
        <Route element={<RequireAuth allowedRoles={["USER"]} />}>
          <Route path="home" element={<Home />} />
          <Route path="challenge" element={<ChallengeFormPage />} />
          <Route path="project" element={<ProjectFormPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
