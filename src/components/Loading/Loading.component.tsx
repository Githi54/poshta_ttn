import { Box, CircularProgress, Modal } from "@mui/material";

type Props = {
  isLoad: boolean;
};

export const Loading: React.FC<Props> = ({ isLoad }) => {
  return (
    <Modal
      open={isLoad}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </Modal>
  );
};
