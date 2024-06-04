import styled from "styled-components";
import SingleTask from "./SingleTask";

interface SingleColumnProps {
  task: ITask;
}

export default function SingleColumn({ task }: SingleColumnProps) {
  console.log(task);
  return (
    <StyledSingleColumn>
      <Status>
        <div></div>
        <p>
          {task.name.toUpperCase()} ({task.tasks.length})
        </p>
      </Status>
      <Tasks>
        {task.tasks.map((content, index) => {
          return <SingleTask key={index} content={content} />;
        })}
      </Tasks>
    </StyledSingleColumn>
  );
}

const StyledSingleColumn = styled.div`
  width: 28rem;
`;

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
