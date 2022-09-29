import { Link } from "react-router-dom";
import styled from "styled-components";
import { diffTime } from "../../utils/diffTime";
import domainFromUrl from "../../utils/domainFromUrl";

const Container = styled.li`
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 14px;
  margin-bottom: 10px;
`;

const Title = styled.h4`
  font-size: 16px;
  line-height: 24px;
`;

const StoryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 12px;
  color: #949494;
`;

interface Props {
  title?: string;
  url?: string;
  time?: number;
  id?: number;
}

const Story = ({ title, url, time, id }: Props) => {
  return (
    <Container>
      <Title>
        {url ? (
          <a href={url}>{title}</a>
        ) : (
          <Link to={`item/${id}`}>{title}</Link>
        )}
      </Title>
      <StoryInfo>
        <span>{url && domainFromUrl(url!)}</span>
        <span>{diffTime(time!)}</span>
      </StoryInfo>
    </Container>
  );
};
export default Story;
