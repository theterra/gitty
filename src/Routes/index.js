import { Routes, Route } from "react-router-dom";
import UserDetails from "Screens/UserDetails";

const ReactRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UserDetails />} />
    </Routes>
  );
};

export default ReactRoutes;
