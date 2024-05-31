import styled from "styled-components";
import SingleColumn from "./SingleColumn";
import { useEffect, useState } from "react";
import { useBoard } from "../context/useBoard";
import AddNewColumn from "./AddNewColumn";

export default function AllBoards() {
  const [filteredBoard, setFillteredBoard] = useState<IBoards[]>([]);

  console.log(filteredBoard);

  const { boards, choosenBoardCategory } = useBoard();

  useEffect(() => {
    setFillteredBoard(
      boards.filter((board) => board.name === choosenBoardCategory)
    );
  }, [boards, choosenBoardCategory]);

  return (
    <StyledAllBoards>
      <TasksInformations>
        {filteredBoard[0]?.columns.map((task, index) => {
          return <SingleColumn key={index} task={task} />;
        })}
      </TasksInformations>
      <AddNewColumn />
    </StyledAllBoards>
  );
}

const StyledAllBoards = styled.div`
  /* width: 100vw; */
  overflow-x: auto;
  padding-top: 2.4rem;
  padding-left: 1.6rem;
  display: flex;
  gap: 2.4rem;

  @media screen and (min-width: 1440px) {
    width: 100%;
    overflow-x: visible;
  }
`;

const TasksInformations = styled.div`
  display: flex;
  gap: 2.4rem;
`;
