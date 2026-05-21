import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 520,
        minHeight: 420,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularIndeterminate />
    </Box>
  );
}
