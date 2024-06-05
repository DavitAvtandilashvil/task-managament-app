import styled from "styled-components";
import Header from "../components/Header";
import AllBoards from "../components/AllBoards";
import ShowSidebar from "../components/ShowSidebar";
import OneBoardInfoModal from "../components/OneBoardInfoModal";

export default function Board() {
  return (
    <StyledBoard>
      <Header />
      <AllBoards />

      <ShowSidebar />

      <OneBoardInfoModal />
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  position: relative;
`;
