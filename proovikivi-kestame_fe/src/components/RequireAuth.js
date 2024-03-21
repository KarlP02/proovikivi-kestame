import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const isRoleAllowed = auth.roles == allowedRoles;

  return isRoleAllowed ? (
    <Outlet />
  ) : auth.email ? (
    <Navigate to="/main" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
