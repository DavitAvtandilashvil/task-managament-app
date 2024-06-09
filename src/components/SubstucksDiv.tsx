import styled from "styled-components";

export default function SubstucksDiv() {
  return (
    <StyledSubstucksDiv>
      <Title>Subtasks</Title>
    </StyledSubstucksDiv>
  );
}

const StyledSubstucksDiv = styled.div`
  margin-top: 2.4rem;
`;

const Title = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.512rem;
  color: ${(props) => props.theme.secondary.txtColor};
`;
