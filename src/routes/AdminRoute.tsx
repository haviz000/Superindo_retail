import { Navigate } from "react-router-dom";

interface AdminRouteProps {
  children: any;
}

const AdminRoute = ({ children }: AdminRouteProps) => {
  const role = "admin";

  console.log("role", role);

  if (role !== "admin") {
    return <Navigate to={"/customer-page"} replace/>
  } else {
    return <>{children}</>;
  }
};

export default AdminRoute;
