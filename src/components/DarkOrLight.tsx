import lightIcon from "/assets/icon-light-theme.svg";
import darkIcon from "/assets/icon-dark-theme.svg";
import styled from "styled-components";

export default function DarkOrLight() {
  return (
    <StyledDarkOrLight>
      <img src={lightIcon} alt="sun" />
      <ChooseMode>
        <div></div>
      </ChooseMode>
      <img src={darkIcon} alt="moon" />
    </StyledDarkOrLight>
  );
}

const StyledDarkOrLight = styled.div`
  background: ${(props) => props.theme.body.bgColor};
  margin-left: 1.6rem;
  margin-right: 1.3rem;
  padding-top: 1.4rem;
  padding-bottom: 1.4rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.3rem;
`;

const ChooseMode = styled.div`
  width: 4rem;
  height: 2rem;
  border-radius: 1.2rem;
  background: #635fc7;
  padding: 0.3rem 0rem 0.3rem 0.3rem;
  /* padding: 0.3rem 0.3rem 0.3rem 2.3rem; */

  & > div {
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background: #fff;
  }
`;
