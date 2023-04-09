import { Box, Button, Typography } from "@mui/material";
import "./History.component.css";

type Props = {
  ttnHistory: string[];
  setInput: (str: string) => void;
  handleSubmit: (ttnStr: string, event?: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export const TtnHistory: React.FC<Props> = ({ ttnHistory, setInput, handleSubmit }) => {
  const handleClick = (ttn: string) => {
    setInput(ttn);
    handleSubmit(ttn);
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "280px",
        minWidth: "230px",
        backgroundColor: "lightblue",
        border: "1px solid blue",
        borderRadius: "10px",
        overflowY: "auto",
      }}
      className="history"
    >
      <Typography
        style={{
          display: "block",
          fontSize: "24px",
          lineHeight: 1.25,
          color: "#33332f",
        }}
      >
        Історія пошуку
      </Typography>
      {ttnHistory.map(ttn => (
        <Button key={ttn} style={{fontSize: "18px"}} onClick={() => handleClick(ttn)}>{ttn}</Button>
      ))}
    </Box>
  );
};
