import styled from "styled-components";
import logo from "/assets/logo-mobile.svg";
// import arrowUp from "/assets/icon-chevron-up.svg";
import arrowDown from "/assets/icon-chevron-down.svg";
import addTask from "/assets/icon-add-task-mobile.svg";
import ellipsis from "/assets/icon-vertical-ellipsis.svg";
import darkLogo from "/assets/logo-dark.svg";
import lightLogo from "/assets/logo-light.svg";
import { useBoard } from "../context/useBoard";

export default function Header() {
  const {
    isDarkMode,
    setIsBoardModalOpen,
    isEditModalOpen,
    setIsEditModalOpen,
    setWhichModalIsOpen,
    choosenBoardCategory,
  } = useBoard();
  return (
    <StyledHeader>
      <LogoAndPlatform>
        <LogoContainer>
          <img src={logo} alt="logo" />
          {!isDarkMode ? (
            <img src={darkLogo} alt="dark-logo" />
          ) : (
            <img src={lightLogo} alt="light-logo" />
          )}
        </LogoContainer>
        <Platform onClick={() => setIsBoardModalOpen((modal) => !modal)}>
          <h2>{choosenBoardCategory}</h2>
          <img src={arrowDown} alt="arrowDown" />
        </Platform>
      </LogoAndPlatform>
      <Add>
        <AddImgContainer onClick={() => setWhichModalIsOpen("createModal")}>
          <img src={addTask} alt="add-task" />
          <p>+ Add New Task</p>

          {isEditModalOpen && (
            <HoverModal>
              <EditBoard>Edit Board</EditBoard>
              <DeleteBoard>Delete Board</DeleteBoard>
            </HoverModal>
          )}
        </AddImgContainer>
        <img
          src={ellipsis}
          alt="ellipsis"
          onClick={() => setIsEditModalOpen((edit) => !edit)}
        />
      </Add>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  background: ${(props) => props.theme.primary.bgColor};
  width: 100%;
  max-width: 50rem;
  margin: auto;

  @media screen and (min-width: 768px) {
    max-width: 130rem;
  }

  @media screen and (min-width: 1440px) {
    max-width: none;
    padding-left: 2.4rem;
    padding-right: 3.2rem;
  }
`;

const LogoAndPlatform = styled.div`
  display: flex;
`;

const LogoContainer = styled.div`
  width: 2.4rem;
  height: 2.5rem;

  & > img:nth-child(2) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 15.2rem;
    height: 2.5rem;
    align-self: center;

    & > img:nth-child(1) {
      display: none;
    }

    & > img:nth-child(2) {
      display: block;
    }
  }
`;

const Platform = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-left: 1.6rem;

  & > h2 {
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: ${(props) => props.theme.primary.txtColor};
  }

  @media screen and (min-width: 768px) {
    margin-left: 2.4rem;
    border-left: ${(props) => `1px solid ${props.theme.primary.border}`};
    height: 8rem;
    padding-left: 2.4rem;

    & > h2 {
      font-size: 2rem;
    }

    & > img {
      display: none;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 2.4rem;
  }
`;

const Add = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  position: relative;

  @media screen and (min-width: 768px) {
    gap: 2.4rem;

    & > img {
      cursor: pointer;
    }
  }
`;

const AddImgContainer = styled.div`
  padding: 1rem 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background: #635fc7;
  cursor: pointer;

  & > p {
    display: none;
  }

  @media screen and (min-width: 768px) {
    padding: 1.5rem 2.5rem;
    border-radius: 3rem;
    & > img {
      display: none;
    }

    & > p {
      display: block;
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      color: #fff;
    }
  }
`;

const HoverModal = styled.div`
  position: absolute;
  top: 5.5rem;
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
