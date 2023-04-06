import { Route, Navigate, Routes } from "react-router-dom";
import { TTNPage } from "./pages/ttn";
import { DepartmentsPage } from "./pages/departments";
import { Navigation } from "./components/Nav";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<TTNPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
