import { Box, Container } from "@mui/material";
import { NavItem } from "../NavItem";

export const Navigation = () => {
  return (
    <Container>
      <Box style={{ display: "flex", gap: "10px" }}>
        <NavItem to="/" content="Перевірити ТТН" />
        <NavItem to="/departments" content="Відділення пошти" />
      </Box>
    </Container>
  );
};
