import styled from "styled-components";

export default function AddNewColumn() {
  return (
    <StyledAddNewColumn>
      <p>+ New Column</p>
    </StyledAddNewColumn>
  );
}

const StyledAddNewColumn = styled.div`
  min-width: 28rem;
  background: ${(props) => props.theme.secondary.bgColor};
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.024rem;
    color: #828fa3;
  }
`;
