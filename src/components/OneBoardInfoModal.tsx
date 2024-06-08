import styled from "styled-components";
import arrowDown from "/assets/icon-chevron-down.svg";
import arrowUp from "/assets/icon-chevron-up.svg";
import { useEffect, useState } from "react";
import { useBoard } from "../context/useBoard";
import ellipsis from "/assets/icon-vertical-ellipsis.svg";
import check from "/assets/icon-check.svg";

export default function OneBoardInfoModal() {
  const [isStatusModalOpen, setIsStatusModalOpen] = useState<boolean>(false);
  const [isHoverModalOpen, setIsHoverModalOpen] = useState(false);
  const [substuckCounter, setSubstuckCounter] = useState(0);

  const {
    setWhichModalIsOpen,
    clickedBoard,
    boards,
    setBoards,
    choosenBoardCategory,
  } = useBoard();

  function handleSubstuck(title: string) {
    const boardNameIndex = boards.findIndex(
      (board) => board.name === choosenBoardCategory
    );

    const columnNameIndex = boards[boardNameIndex].columns.findIndex(
      (column) => column.name === clickedBoard.status
    );

    const taskTitleIndex = boards[boardNameIndex].columns[
      columnNameIndex
    ].tasks.findIndex((task) => task.title === clickedBoard.title);

    const substuckIndex = boards[boardNameIndex].columns[columnNameIndex].tasks[
      taskTitleIndex
    ].subtasks.findIndex((substuck) => substuck.title === title);

    boards[boardNameIndex].columns[columnNameIndex].tasks[
      taskTitleIndex
    ].subtasks[substuckIndex].isCompleted =
      !boards[boardNameIndex].columns[columnNameIndex].tasks[taskTitleIndex]
        .subtasks[substuckIndex].isCompleted;

    setBoards([...boards]);
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    clickedBoard?.subtasks?.map((item) => {
      if (item.isCompleted) {
        setSubstuckCounter((count) => (count += 1));
      }
    });

    return () => {
      setSubstuckCounter(0);
    };
  }, [clickedBoard?.subtasks]);

  return (
    <OneBoardInfoModalWrapper onClick={() => setWhichModalIsOpen("")}>
      <StyledOneBoardInfoModal onClick={(e) => e.stopPropagation()}>
        <TiTleDiv>
          <Title>{clickedBoard.title}</Title>

          <img
            src={ellipsis}
            alt="ellipsis"
            onClick={() => setIsHoverModalOpen((modal) => !modal)}
          />

          {isHoverModalOpen && (
            <HoverModal>
              <EditBoard>Edit Task</EditBoard>
              <DeleteBoard>Delete Task</DeleteBoard>
            </HoverModal>
          )}
        </TiTleDiv>

        <Description>{clickedBoard.description}</Description>

        <SubstakTitle>
          Subtasks ({substuckCounter} of {clickedBoard.subtasks?.length})
        </SubstakTitle>

        <SubstaksList>
          {clickedBoard.subtasks?.map((item, index) => {
            return (
              <SingleSubstak
                key={index}
                iscompleted={item?.isCompleted ? "true" : "false"}
                onClick={() => handleSubstuck(item.title)}
              >
                <div>
                  {item?.isCompleted && <img src={check} alt="check" />}
                </div>
                <p>{item.title}</p>
              </SingleSubstak>
            );
          })}
        </SubstaksList>

        <StatusTitle>Current Status</StatusTitle>

        <StatusList>
          <CurrentStatus onClick={() => setIsStatusModalOpen((open) => !open)}>
            <p>{clickedBoard.status}</p>
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

  @media screen and (min-width: 768px) {
    width: 48rem;
    padding: 3.2rem;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 15rem;
  }
`;

const TiTleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2.3rem;
  justify-content: space-between;

  & > img {
    cursor: pointer;
  }
`;

const HoverModal = styled.div`
  position: absolute;
  top: 9.5rem;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  width: 19.2rem;
  gap: 1.6rem;
  background: ${(props) => props.theme.body.bgColor};
  border-radius: 0.8rem;
  z-index: 99;
`;

const EditBoard = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2.3rem;
  color: #828fa3;
`;

const DeleteBoard = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2.3rem;
  color: #ea5555;
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
  flex-direction: column;
  gap: 0.8rem;
`;

const SingleSubstak = styled.div<{ iscompleted: string }>`
  padding: 1.3rem 0.8rem 1.6rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.6rem;

  @media screen and (min-width: 1440px) {
    &:hover {
      background: rgba(99, 95, 199, 0.25);
      cursor: pointer;
      transition: all 0.3s ease;
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 2px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background: ${(props) =>
      props.iscompleted === "true" ? "#635FC7" : props.theme.primary.bgColor};
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
