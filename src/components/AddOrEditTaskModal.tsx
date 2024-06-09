import styled from "styled-components";
import SubstucksDiv from "./SubstucksDiv";

export default function AddOrEditTaskModal() {
  return (
    <AddOrEditModalWrapper>
      <StyledAddOrEditModal>
        <h2>Add New Task</h2>

        <TitleDiv>
          <p>Title</p>
          <input type="text" placeholder="e.g. Take coffee bre" />
        </TitleDiv>

        <DescriptionDiv>
          <p>Description</p>
          <input
            type="text"
            placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little."
          />
        </DescriptionDiv>

        <SubstucksDiv />
      </StyledAddOrEditModal>
    </AddOrEditModalWrapper>
  );
}

const AddOrEditModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledAddOrEditModal = styled.div`
  width: 34.3rem;
  margin-top: 7.7rem;
  margin-left: 50%;
  transform: translateX(-50%);
  background: ${(props) => props.theme.body.bgColor};
  padding: 2.4rem 2.4rem 3.2rem 2.4rem;
  border-radius: 0.8rem;

  @media screen and (min-width: 768px) {
    width: 48rem;
    padding: 3.2rem;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 15rem;
  }

  & > h2 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.268rem;
    color: ${(props) => props.theme.primary.txtColor};
  }
`;

const TitleDiv = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > p {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    color: ${(props) => props.theme.secondary.txtColor};
  }

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

const DescriptionDiv = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > p {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    color: ${(props) => props.theme.secondary.txtColor};
  }

  & > input {
    width: 100%;
    padding: 0.8rem 1.5rem 3.3rem 1.6rem;
    border: 1px solid rgba(130, 143, 163, 0.25);
    font-family: inherit;

    &::placeholder {
      white-space: pre-line;
      color: rgba(0, 1, 18, 0.25);
    }
  }
`;
