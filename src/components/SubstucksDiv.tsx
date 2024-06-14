import styled from "styled-components";
import cross from "/assets/icon-cross.svg";

export default function SubstucksDiv() {
  return (
    <StyledSubstucksDiv>
      <Title>Subtasks</Title>

      <AddSubstucks>
        <SingleSubstuck>
          <input type="text" placeholder="e.g. Make coffee" />
          <img src={cross} alt="cross" />
        </SingleSubstuck>

        <SingleSubstuck>
          <input type="text" placeholder="e.g. Make coffee" />
          <img src={cross} alt="cross" />
        </SingleSubstuck>

        <SingleSubstuck>
          <input type="text" placeholder="e.g. Make coffee" />
          <img src={cross} alt="cross" />
        </SingleSubstuck>
      </AddSubstucks>

      <AddSubstuckBtn>+ Add New Subtask</AddSubstuckBtn>
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

const AddSubstucks = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const SingleSubstuck = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & > input {
    border-radius: 4px;
    width: 100%;
    border: 1px solid rgba(130, 143, 163, 0.25);
    padding: 0.8rem 0rem 0.9rem 1.6rem;
    font-family: inherit;

    &::placeholder {
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 2.3rem;
      color: rgba(0, 1, 18, 0.25);
    }
  }
`;

const AddSubstuckBtn = styled.button`
  width: 100%;
  margin-top: 1.2rem;
  border-radius: 2rem;
  padding-top: 0.8rem;
  padding-bottom: 0.9rem;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 2.3rem;
  color: #635fc7;
`;
