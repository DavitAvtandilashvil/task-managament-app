import styled from "styled-components";
import logo from "/assets/logo-mobile.svg";
// import arrowUp from "/assets/icon-chevron-up.svg";
import arrowDown from "/assets/icon-chevron-down.svg";
import addTask from "/assets/icon-add-task-mobile.svg";
import ellipsis from "/assets/icon-vertical-ellipsis.svg";

export default function Header() {
  return (
    <StyledHeader>
      <LogoAndPlatform>
        <LogoContainer>
          <img src={logo} alt="logo" />
        </LogoContainer>
        <Platform>
          <h2>Platform Launch</h2>
          <img src={arrowDown} alt="arrowDown" />
        </Platform>
      </LogoAndPlatform>
      <Add>
        <AddImgContainer>
          <img src={addTask} alt="add-task" />
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
  padding: 1.6rem;
  background: ${(props) => props.theme.primary.bgColor};
`;

const LogoAndPlatform = styled.div`
  display: flex;
`;

const LogoContainer = styled.div`
  width: 2.4rem;
  height: 2.5rem;
`;

const Platform = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-left: 1.6rem;
`;

const Add = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const AddImgContainer = styled.div`
  width: 4.8rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  background: #635fc7;
`;
