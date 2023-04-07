import { Route, Navigate, Routes } from "react-router-dom";
import { TTNPage } from "./pages/ttn";
import { DepartmentsPage } from "./pages/departments";
import { Navigation } from "./components/Nav";
import { Box } from "@mui/material";

function App() {
  return (
    <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<TTNPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Box>
  );
}

export default App;
