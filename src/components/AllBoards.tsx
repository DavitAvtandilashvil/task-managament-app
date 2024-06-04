import styled from "styled-components";
import SingleColumn from "./SingleColumn";
import { useEffect, useState } from "react";
import { useBoard } from "../context/useBoard";
import AddNewColumn from "./AddNewColumn";
import BoardsNames from "./BoardsNames";

export default function AllBoards() {
  const [filteredBoard, setFillteredBoard] = useState<IBoards[]>([]);

  const { boards, choosenBoardCategory, isBoardModalOpen } = useBoard();

  useEffect(() => {
    setFillteredBoard(
      boards.filter((board) => board.name === choosenBoardCategory)
    );
  }, [boards, choosenBoardCategory]);

  return (
    <StyledAllBoards isBoardModalOpen={isBoardModalOpen}>
      <TasksInformations>
        {filteredBoard[0]?.columns.map((task, index) => {
          return <SingleColumn key={index} task={task} />;
        })}
      </TasksInformations>
      <AddNewColumn />

      {isBoardModalOpen && <BoardsNames />}
    </StyledAllBoards>
  );
}

const StyledAllBoards = styled.div<{ isBoardModalOpen: boolean }>`
  height: ${(props) => (props.isBoardModalOpen ? "100vh" : "auto")};
  overflow: ${(props) => (props.isBoardModalOpen ? "hidden" : "auto")};
  padding: 2.4rem 1.6rem;
  display: flex;
  gap: 2.4rem;
  position: relative;
  min-height: calc(100vh - 6.4rem);

  @media screen and (min-width: 1440px) {
    width: 100%;
    overflow-x: visible;
  }
`;

const TasksInformations = styled.div`
  display: flex;
  gap: 2.4rem;
`;
