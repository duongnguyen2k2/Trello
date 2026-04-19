import { Box } from "@mui/material";
import ModeSelect from "../ModeSelect";

const index = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        display: "flex",
        alignItems: "center",
        height: (theme) => theme.trelloCustom.appBarHeight,
        width: "100%",
      }}
    >
      <ModeSelect />
    </Box>
  );
};

export default index;
