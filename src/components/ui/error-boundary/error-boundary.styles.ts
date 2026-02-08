import type { SxProps } from "@mui/material";

const container: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  minHeight: 400,
  gap: 2,
  p: 4,
  textAlign: "center",
};

const title: SxProps = {
  fontWeight: 600,
  color: "#1D3557",
};

const message: SxProps = {
  color: "#6c757d",
  maxWidth: 480,
};

const retryButton: SxProps = {
  mt: 1,
  textTransform: "none",
  bgcolor: "#1D3557",
  "&:hover": {
    bgcolor: "#15253F",
  },
};

export default { container, title, message, retryButton };
