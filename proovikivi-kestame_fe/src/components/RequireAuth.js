import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  const decoded = auth?.accessToken ? jwtDecode(auth.accessToken) : undefined;
  const roles = [];

  if (decoded !== undefined) {
    const roleString = decoded?.role;
    const match = roleString.match(/name=([^)]+)/);
    const roleName = match ? match[1] : [];

    roles.push(roleName);
  }

  return roles.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth.email ? (
    <Navigate to="/error" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
