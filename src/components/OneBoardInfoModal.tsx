import styled from "styled-components";
import arrowDown from "/assets/icon-chevron-down.svg";
import arrowUp from "/assets/icon-chevron-up.svg";
import { useState } from "react";
import { useBoard } from "../context/useBoard";

export default function OneBoardInfoModal() {
  const [isStatusModalOpen, setIsStatusModalOpen] = useState<boolean>(false);

  const { setWhichModalIsOpen } = useBoard();

  return (
    <OneBoardInfoModalWrapper onClick={() => setWhichModalIsOpen("")}>
      <StyledOneBoardInfoModal>
        <Title>
          Research pricing points of various competitors and trial different
          business models
        </Title>

        <Description>
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </Description>

        <SubstakTitle>Subtasks (2 of 3)</SubstakTitle>

        <SubstaksList>
          <SingleSubstak>
            <div></div>
            <p>Research competitor pricing and business models</p>
          </SingleSubstak>

          <SingleSubstak>
            <div></div>
            <p>Research competitor pricing and business models</p>
          </SingleSubstak>
        </SubstaksList>

        <StatusTitle>Current Status</StatusTitle>

        <StatusList>
          <CurrentStatus onClick={() => setIsStatusModalOpen((open) => !open)}>
            <p>Doing</p>
            {isStatusModalOpen ? (
              <img src={arrowUp} alt="arrow-up" />
            ) : (
              <img src={arrowDown} alt="arrow-down" />
            )}
          </CurrentStatus>

          {isStatusModalOpen && (
            <StatusCategories>
              <p>Todo</p>
              <p>Doing</p>
              <p>Done</p>
            </StatusCategories>
          )}
        </StatusList>
      </StyledOneBoardInfoModal>
    </OneBoardInfoModalWrapper>
  );
}

const OneBoardInfoModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledOneBoardInfoModal = styled.div`
  width: 34.3rem;
  margin-top: 7.7rem;
  margin-left: 50%;
  transform: translateX(-50%);
  background: ${(props) => props.theme.body.bgColor};
  padding: 2.4rem 2.4rem 3.2rem 2.4rem;
  border-radius: 0.8rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.268rem;
  color: ${(props) => props.theme.primary.txtColor};
`;

const Description = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2.3rem;
  color: #828fa3;
  margin-top: 2.4rem;
`;

const SubstakTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.512rem;
  color: #828fa3;
  margin-top: 2.4rem;
`;

const SubstaksList = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
`;

const SingleSubstak = styled.div`
  padding: 1.3rem 0.8rem 1.6rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & > div {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 2px;
    border: 1px solid rgba(130, 143, 163, 0.25);
  }

  & > p {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    color: ${(props) => props.theme.primary.txtOpacity};
  }
`;

const StatusTitle = styled.p`
  margin-top: 2.4rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.512rem;
  color: ${(props) => props.theme.secondary.txtColor};
`;

const StatusList = styled.div`
  position: relative;
`;

const CurrentStatus = styled.div`
  border: 1px solid #828fa340;
  padding: 0.9rem 1.6rem;
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2.3rem;
    color: ${(props) => props.theme.primary.txtColor};
  }
`;

const StatusCategories = styled.div`
  position: absolute;
  width: 100%;
  background: ${(props) => props.theme.primary.bgColor};
  top: 4.8rem;
  border-radius: 0.8rem;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & > p {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2.3rem;
    color: #828fa3;
  }
`;
