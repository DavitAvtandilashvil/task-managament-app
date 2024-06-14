import styled from "styled-components";
import Header from "../components/Header";
import AllBoards from "../components/AllBoards";
import ShowSidebar from "../components/ShowSidebar";
import OneBoardInfoModal from "../components/OneBoardInfoModal";
import { useBoard } from "../context/useBoard";
import AddOrEditTaskModal from "../components/AddOrEditTaskModal";

export default function Board() {
  const { whichModalIsOpen } = useBoard();

  return (
    <StyledBoard>
      <Header />
      <AllBoards />

      <ShowSidebar />

      {whichModalIsOpen === "oneBoardInfoModal" && <OneBoardInfoModal />}

      {whichModalIsOpen === "createModal" && <AddOrEditTaskModal />}
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  position: relative;
`;
