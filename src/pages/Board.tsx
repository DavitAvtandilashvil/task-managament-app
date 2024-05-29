import styled from "styled-components";
import Header from "../components/Header";

export default function Board() {
  return (
    <StyledBoard>
      <Header />
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: auto;
`;
