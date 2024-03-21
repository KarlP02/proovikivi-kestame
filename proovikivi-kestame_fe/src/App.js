import "./App.css";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public */}
        <Route path="main" element={<Main />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* auth */}
        <Route element={<RequireAuth allowedRoles={["USER"]} />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
