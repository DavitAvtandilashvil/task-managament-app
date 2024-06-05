import styled from "styled-components";
import { useBoard } from "../context/useBoard";

interface SingleTaskProps {
  content: IContent;
}

export default function SingleTask({ content }: SingleTaskProps) {
  const { setWhichModalIsOpen } = useBoard();

  function handleOpenInformation() {
    setWhichModalIsOpen("oneBoardInfoModal");
  }

  return (
    <StyledSingleTask onClick={() => handleOpenInformation()}>
      <Title>{content.title}</Title>
      <SubStaks>0 of 3 substasks</SubStaks>
    </StyledSingleTask>
  );
}

const StyledSingleTask = styled.div`
  width: 28rem;
  background: ${(props) => props.theme.primary.bgColor};
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 2.3rem;
  padding-bottom: 2.3rem;
  padding-left: 1.6rem;
  border-radius: 0.8rem;

  @media screen and (min-width: 1440px) {
    &:hover {
      cursor: pointer;
      transition: all 0.3s ease;
      & > h2 {
        color: #635fc7;
      }
    }
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 18.9px;
  color: ${(props) => props.theme.primary.txtColor};
`;

const SubStaks = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 15.12px;
  color: #828fa3;
`;
