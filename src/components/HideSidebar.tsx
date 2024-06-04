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
  margin-left: 3.1rem;
  margin-top: 2.4rem;
  gap: 1.5rem;

  & > span {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.89rem;
    color: #828fa3;
  }
`;
