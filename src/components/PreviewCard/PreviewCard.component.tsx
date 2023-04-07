import { Box, Typography } from "@mui/material";

export const PreviewCard = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        height: "150px",
        maxWidth: "226px",
        border: "1px solid lightgray",
        borderRadius: "10px",
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
      <Typography
        style={{
          fontSize: "24px",
          lineHeight: 1.25,
          paddingBottom: "16px",
          color: "#33332f",
          paddingLeft: "15px",
        }}
      >
        Відстежуй свої доставки!
      </Typography>
    </Box>
  );
};
