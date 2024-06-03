import styled from "styled-components";
import Header from "../components/Header";
import AllBoards from "../components/AllBoards";
import ShowSidebar from "../components/ShowSidebar";

export default function Board() {
  return (
    <StyledBoard>
      <Header />
      <AllBoards />

      <ShowSidebar />
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  position: relative;
`;
