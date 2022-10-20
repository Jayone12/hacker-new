import { Link } from "react-router-dom";
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
  id?: number;
}

const Story = ({ title, id }: Props) => {
  return (
    <Container>
      <Title>
        <Link to={`/ask/item/${id}`}>
          {/* eslint-disable-next-line */}
          <Ask>{title!.match(/[\w\s]+\HN:/)}</Ask>
          {/* eslint-disable-next-line */}
          {title!.replace(/[\w\s]+\HN:/, "")}
        </Link>
      </Title>
    </Container>
  );
};
export default Story;
