import { useCallback, useEffect, useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { TTN } from "../../typing/types/ttn.type";
import SearchIcon from "@mui/icons-material/Search";
import { getTTNInfo } from "../../api/ttn.api";
import { TtnItem } from "../../components/TtnItem";
import { Loading } from "../../components/Loading";
import { PreviewCard } from "../../components/PreviewCard";
import { TtnHistory } from "../../components/History";

import "./ttn.page.css";
import { TtnErrors } from "../../typing/enums/ttnError.enum";

export const TTNPage = () => {
  const [ttn, setTtn] = useState<TTN | null>(null);
  const [input, setInput] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const [ttnHistory, setTtnHistory] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const ttnHistoryStr = localStorage.getItem("ttnHistory");

    if (!ttnHistoryStr) {
      localStorage.setItem("ttnHistory", ttnHistory.join(" "));
    }

    if (ttnHistoryStr && ttnHistory.length === 0) {
      setTtnHistory(ttnHistoryStr.split(" "));
    }

    if (ttnHistory.length > 0) {
      localStorage.setItem("ttnHistory", ttnHistory.join(" "));
    };

    const onlyNumbers = /^[0-9]+$/;

    if (input.trim().length > 0 && !onlyNumbers.test(input)) {
      setErrorMessage(TtnErrors.ONLY_NUMBERS);
    }
  }, [ttnHistory, input, localStorage]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setTtn(null);
      setErrorMessage("");

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
    async (ttnStr: string, event?: React.FormEvent<HTMLFormElement>) => {
      if (event) {
        event.preventDefault();
      }

      if (errorMessage.trim().length > 0) {
        return;
      }

      if (ttnStr.trim().length < 14 || !ttnStr.trim().length) {
        setErrorMessage(TtnErrors.TTN_LENGTH);
        return;
      }

      setErrorMessage("");

      if (!ttnStr.trim().length) {
        return;
      }

      setIsLoad(true);
      const response = await getTTNInfo(+ttnStr);

      if (response) {
        setTtn(response);
        setIsLoad(false);

        if (!ttnHistory.includes(ttnStr)) {
          setTtnHistory([ttnStr, ...ttnHistory]);
          localStorage.setItem("ttnHistory", ttnHistory.join(" "));
        }
      }
    },
    [ttn, errorMessage, ttnHistory]
  );

  return (
    <Container
      style={{
        display: "flex",
        gap: "30px",
      }}
      className="ttn_container"
    >
      <Box style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <Box style={{ display: "flex" }}>
          <form
            action="submit"
            onSubmit={(event) => handleSubmit(input, event)}
          >
            <TextField
              error={errorMessage.trim().length > 0}
              helperText={errorMessage}
              label={errorMessage.trim().length > 0 ? "Error" : ""}
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
        {ttn !== null ? <TtnItem ttn={ttn} /> : <PreviewCard />}
      </Box>
      <TtnHistory
        ttnHistory={ttnHistory}
        setInput={setInput}
        handleSubmit={handleSubmit}
        setErrorMessage={setErrorMessage}
      />
      {isLoad && <Loading isLoad={isLoad} />}
    </Container>
  );
};
