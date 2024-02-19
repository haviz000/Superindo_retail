import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: any;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isAuthenticated = true;

  console.log("isAuthenticated", !isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace/>
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
