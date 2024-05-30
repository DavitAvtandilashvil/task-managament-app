import styled from "styled-components";

export default function SingleTask() {
  return (
    <StyledSingleTask>
      <Title>Build UI for onboarding flow</Title>
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
