import styled from "styled-components";
import SingleColumn from "./SingleColumn";

export default function AllBoards() {
  return (
    <StyledAllBoards>
      <SingleColumn />
      <SingleColumn />
      <SingleColumn />
      <SingleColumn />
    </StyledAllBoards>
  );
}

const StyledAllBoards = styled.div`
  width: 100vw;
  overflow-x: auto;
  padding-top: 2.4rem;
  padding-left: 1.6rem;
  display: flex;
  gap: 2.4rem;
`;
