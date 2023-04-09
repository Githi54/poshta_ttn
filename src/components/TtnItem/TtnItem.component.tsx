import { Box, Typography } from "@mui/material";
import { TTN } from "../../typing/types/ttn.type";
import { TtnDescription } from "../TtnDescription";

type Props = {
  ttn: TTN;
};

export const TtnItem: React.FC<Props> = ({ ttn: { Status, WarehouseRecipient, WarehouseSender } }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "400px",
        border: "1px solid lightgray",
        borderRadius: "10px",
        gap: "10px",
      }}
    >
      <Box style={{ height: "50px" }}>
        <img
          style={{
            objectFit: "contain",
            maxWidth: "200px",
            paddingLeft: "5px",
            paddingTop: "5px",
          }}
          src="/logos/nplogo.png"
        />
      </Box>
      <Box style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <TtnDescription name="Статус:" description={Status} />
        <TtnDescription name="Відправник:" description={WarehouseSender} />
        <TtnDescription name="Отримувач:" description={WarehouseRecipient} />
      </Box>
    </Box>
  );
};
