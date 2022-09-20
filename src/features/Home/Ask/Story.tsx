import styled from "styled-components";

const Container = styled.li`
  padding: 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1), 0px 6px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: 16px;
`;

const Title = styled.h4`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
`;

const Ask = styled.span`
  color: #ed702d;
`;

interface Props {
  title?: string;
}

const Story = ({ title }: Props) => {
  return (
    <Container>
      <Title>
        <Ask>{title!.match(/[\w\s]+\:/)}</Ask>
        {title!.replace(/[\w\s]+\:/, "")}
      </Title>
    </Container>
  );
};
export default Story;
