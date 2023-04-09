import { Box, Typography } from "@mui/material";

type Props = {
  name: string;
  description: string;
};

const typographyStyle = {
  fontSize: "14px",
  lineHeight: 1.25,
  paddingBottom: "16px",
  color: "#33332f",
  paddingLeft: "15px",
};

export const TtnDescription: React.FC<Props> = ({ name, description }) => (
  <Box style={{ display: "flex", gap: "10px", maxWidth: "320px" }}>
    <Typography style={typographyStyle}>{name}</Typography>
    <Typography style={typographyStyle}>{description.length > 0 ? description : "Невідомо"}</Typography>
  </Box>
);
