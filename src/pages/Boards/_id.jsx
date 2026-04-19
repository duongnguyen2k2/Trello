import { Box, Container } from "@mui/material";
import ModeSelect from "../../components/ModeSelect";
import AppBar from "../../components/AppBar";
import BoardBar from "../Boards/BoardBar";
import BoardContent from "./BoardContent";
const Board = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
};

export default Board;
