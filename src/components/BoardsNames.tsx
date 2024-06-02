import styled from "styled-components";
import board from "/assets/icon-board.svg";
import DarkOrLight from "./DarkOrLight";
import { useBoard } from "../context/useBoard";

export default function BoardsNames() {
  const { boards } = useBoard();
  console.log(boards);
  return (
    <StyledBoardsNames>
      <AllBoards>
        <p>ALL BOARDS (3)</p>
        <ChooseBoard>
          {boards?.map((item, index) => {
            return (
              <SingleBoard key={index}>
                <img src={board} alt="board" />
                <p>{item.name}</p>
              </SingleBoard>
            );
          })}

          <NewBoardButton>
            <img src={board} alt="board" />
            <p>+ Create New Board</p>
          </NewBoardButton>
        </ChooseBoard>

        <DarkOrLight />
      </AllBoards>
    </StyledBoardsNames>
  );
}

const StyledBoardsNames = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const AllBoards = styled.div`
  width: 264px;
  margin-left: 50%;
  transform: translateX(-50%);
  background: ${(props) => props.theme.primary.bgColor};
  padding-top: 1.6rem;
  padding-bottom: 1.6rem;
  border-radius: 0.8rem;
  margin-top: 1.6rem;

  & > p {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    letter-spacing: 2.4000000953674316px;
    color: #828fa3;
    margin-left: 2.4rem;
  }
`;

const ChooseBoard = styled.div`
  margin-top: 1.9rem;
  display: flex;
  flex-direction: column;
`;

const SingleBoard = styled.div`
  width: 24rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border-radius: 0rem 10rem 10rem 0rem;
  background: #635fc7;
  padding: 1.4rem 0rem 1.5rem 2.4rem;

  & > img {
    width: 1.6rem;
    height: 1.6rem;
  }

  & > p {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.89rem;
    color: #fff;
  }
`;

const NewBoardButton = styled.div`
  width: 24rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  border-radius: 0rem 10rem 10rem 0rem;
  padding: 1.4rem 0rem 1.5rem 2.4rem;
  & > img {
    width: 1.6rem;
    height: 1.6rem;
  }

  & > p {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.89rem;
    color: #635fc7;
  }
`;
