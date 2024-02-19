import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./component/administrator/AdminPage";
import PageTitle from "./component/administrator/PageTitle";
import Login from "./component/Login";
import TotalProductCategoriesPage from "./component/administrator/ProductCategory/TotalProductCategoriesPage";
import TotalProductPage from "./component/administrator/Product";
import Customer from "./component/administrator/Customer";
import TotalVariantPage from "./component/administrator/Variant";
import CustomerPage from "./component/customer/CustomerPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <PageTitle title="SuperIndo | Login" />
              <Login />
            </>
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <PageTitle title="SuperIndo | Admin Dashboard" />
                <AdminPage />
              </AdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/product-categories"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <PageTitle title="SuperIndo | Total Product Categories" />
                <TotalProductCategoriesPage />
              </AdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <PageTitle title="SuperIndo | Total Products" />
                <TotalProductPage />
              </AdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <PageTitle title="SuperIndo | Total Customers" />
                <Customer />
              </AdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/variants"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <PageTitle title="SuperIndo | Total Variants" />
                <TotalVariantPage />
              </AdminRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/customer-page"
          element={
            <ProtectedRoute>
              <PageTitle title="SuperIndo | Total Variants" />
              <CustomerPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
