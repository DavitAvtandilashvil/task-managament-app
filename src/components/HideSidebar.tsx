import styled from "styled-components";
import hideSidebar from "/assets/icon-hide-sidebar.svg";
import { useBoard } from "../context/useBoard";

export default function HideSidebar() {
  const { setIsBoardModalOpen } = useBoard();

  return (
    <StyledHideSidebar onClick={() => setIsBoardModalOpen(false)}>
      <img src={hideSidebar} alt="hide-sidebar" />
      <span>Hide Sidebar</span>
    </StyledHideSidebar>
  );
}

const StyledHideSidebar = styled.div`
  display: flex;
  align-items: center;
  margin: 2.4rem 2.3rem 3.2rem 0rem;
  gap: 1.5rem;
  padding-top: 1.4rem;
  padding-bottom: 1.5rem;
  padding: 1.4rem 0rem 1.5rem 3.1rem;
  border-radius: 0rem 10rem 10rem 0rem;

  & > span {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.89rem;
    color: #828fa3;
  }

  &:hover {
    background: ${(props) => props.theme.hover.primary.bgColor};
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;
