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
  const { isDarkMode } = useBoard();
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
        <Platform>
          <h2>Platform Launch</h2>
          <img src={arrowDown} alt="arrowDown" />
        </Platform>
      </LogoAndPlatform>
      <Add>
        <AddImgContainer>
          <img src={addTask} alt="add-task" />
          <p>+ Add New Task</p>
        </AddImgContainer>
        <img src={ellipsis} alt="ellipsis" />
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

  @media screen and (min-width: 768px) {
    gap: 2.4rem;
  }
`;

const AddImgContainer = styled.div`
  padding: 1rem 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background: #635fc7;

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
