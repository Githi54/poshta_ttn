import { useCallback, useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { TTN } from "../../types/ttn.type";
import SearchIcon from "@mui/icons-material/Search";

export const TTNPage = () => {
  const [ttn, setTtn] = useState<TTN | null>(null);
  const [input, setInput] = useState("");

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const { target: { value } } = event;

      if (value.length === 14) {
        return;
      }

      setInput(value);
    },
    []
  );

  return (
    <Container style={{margin: "0 auto"}}>
      <form>
        <Box style={{ display: "flex" }}>
          <TextField
            variant="outlined"
            placeholder="Введіть номер ТТН"
            value={input}
            style={{
              position: "absolute",
              display: "block",
            }}
            onChange={(event) => handleInputChange(event)}
          />
          <Button
            type="submit"
            style={{
              position: "relative",
              top: "0.5rem",
              left: "10rem",
              paddingLeft: "10px",
              border: "1px solid transparent",
            }}
          >
            <SearchIcon />
          </Button>
        </Box>
      </form>
    </Container>
  );
};
