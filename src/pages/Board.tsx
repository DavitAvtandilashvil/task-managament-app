import styled from "styled-components";
import Header from "../components/Header";
import AllBoards from "../components/AllBoards";

export default function Board() {
  return (
    <StyledBoard>
      <Header />
      <AllBoards />
    </StyledBoard>
  );
}

const StyledBoard = styled.div``;
