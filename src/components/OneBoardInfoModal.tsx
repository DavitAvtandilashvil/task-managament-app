import styled from "styled-components";

export default function OneBoardInfoModal() {
  return (
    <OneBoardInfoModalWrapper>
      <StyledOneBoardInfoModal>
        <Title>
          Research pricing points of various competitors and trial different
          business models
        </Title>

        <Description>
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </Description>

        <SubstakTitle>Subtasks (2 of 3)</SubstakTitle>

        <SubstaksList>
          <SingleSubstak>
            <div></div>
            <p>Research competitor pricing and business models</p>
          </SingleSubstak>

          <SingleSubstak>
            <div></div>
            <p>Research competitor pricing and business models</p>
          </SingleSubstak>
        </SubstaksList>

        <StatusTitle>Current Status</StatusTitle>
      </StyledOneBoardInfoModal>
    </OneBoardInfoModalWrapper>
  );
}

const OneBoardInfoModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledOneBoardInfoModal = styled.div`
  width: 34.3rem;
  margin-top: 7.7rem;
  margin-left: 50%;
  transform: translateX(-50%);
  background: ${(props) => props.theme.body.bgColor};
  padding: 2.4rem 2.4rem 3.2rem 2.4rem;
  border-radius: 0.8rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 2.268rem;
  color: ${(props) => props.theme.primary.txtColor};
`;

const Description = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 2.3rem;
  color: #828fa3;
  margin-top: 2.4rem;
`;

const SubstakTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.512rem;
  color: #828fa3;
  margin-top: 2.4rem;
`;

const SubstaksList = styled.div`
  margin-top: 1.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
`;

const SingleSubstak = styled.div`
  padding: 1.3rem 0.8rem 1.6rem 1.2rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & > div {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 2px;
    border: 1px solid rgba(130, 143, 163, 0.25);
  }

  & > p {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.512rem;
    color: ${(props) => props.theme.primary.txtOpacity};
  }
`;

const StatusTitle = styled.p`
  margin-top: 2.4rem;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.512rem;
  color: ${(props) => props.theme.secondary.txtColor};
`;
