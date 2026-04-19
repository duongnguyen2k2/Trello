import { Box } from "@mui/material";

const index = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        display: "flex",
        alignItems: "center",
        height: (theme) => theme.trelloCustom.boardBarHeight,
        width: "100%",
      }}
    >
      Board bar
    </Box>
  );
};

export default index;
