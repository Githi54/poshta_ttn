import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
} from "@mui/material";
import { TTN } from "../../types/ttn.type";
import SearchIcon from "@mui/icons-material/Search";
import { getTTNInfo } from "../../api/ttn.api";
import { TtnItem } from "../../components/TtnItem";
import { Loading } from "../../components/Loading";
import { PreviewCard } from "../../components/PreviewCard";

export const TTNPage = () => {
  const [ttn, setTtn] = useState<TTN | null>(null);
  const [input, setInput] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setTtn(null);

      const {
        target: { value },
      } = event;

      if (value.length > 14) {
        return;
      }

      setInput(value);
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!input.trim().length) {
        return;
      };

      setIsLoad(true);
      const response = await getTTNInfo(+input);

      console.log(response);

      if (response) {
        setTtn(response);
        setIsLoad(false);
      }
    },
    [ttn, input]
  );

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Box style={{ display: "flex" }}>
        <form action="submit" onSubmit={(event) => handleSubmit(event)}>
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
        </form>
      </Box>
      {isLoad && <Loading isLoad={isLoad} />}
      {ttn !== null ? (<TtnItem ttn={ttn} />) : (<PreviewCard />)}
    </Container>
  );
};
