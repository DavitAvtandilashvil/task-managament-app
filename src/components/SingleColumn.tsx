import styled from "styled-components";
import SingleTask from "./SingleTask";

export default function SingleColumn() {
  return (
    <StyledSingleColumn>
      <Status>
        <div></div>
        <p>TODO (4)</p>
      </Status>
      <Tasks>
        <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask />
        <SingleTask />
      </Tasks>
    </StyledSingleColumn>
  );
}

const StyledSingleColumn = styled.div``;

const Status = styled.div`
  display: flex;
  gap: 1.2rem;
  & > div {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #49c4e5;
  }

  & > p {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 15.12px;
    letter-spacing: 2.4000000953674316px;
    color: #828fa3;
  }
`;

const Tasks = styled.div`
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
