import styled from "styled-components";
import IconShowSidebar from "/assets/icon-show-sidebar.svg";

export default function ShowSidebar() {
  return (
    <StyledShowSidebar>
      <img src={IconShowSidebar} alt="show-sidebar" />
    </StyledShowSidebar>
  );
}

const StyledShowSidebar = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #635fc7;
    width: 56px;
    height: 48px;
    border-radius: 0px 10rem 10rem 0px;
    position: absolute;
    bottom: 3.2rem;
  }
`;
