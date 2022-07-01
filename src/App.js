import "./App.css";
import {
  NotFound,
  Login,
  Dashboard,
  LoadingWrapper,
  PrivateRoute,
} from "./Components/ComponentContainer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <LoadingWrapper>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LoadingWrapper>
  );
};

export default App;
