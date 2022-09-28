import styled from "styled-components";
import BorderLine from "../../components/BorderLine";
import { diffTime } from "../../utils/diffTime";
import { ReactComponent as UserIcon } from "../../assets/images/user_icon.svg";
import { ReactComponent as CommentIcon } from "../../assets/images/comment_icon.svg";
import { Link } from "react-router-dom";

const Container = styled.li`
  position: relative;
  margin-top: 20px;
`;

const Title = styled.h4`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 0 20px;
`;

const Ask = styled.span`
  color: #ed702d;
`;

const Description = styled.div`
  height: 41px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;
  padding: 15px 20px;
`;

const CreatedAt = styled.div`
  text-align: right;
  font-size: 12px;
  color: #949494;
  padding: 15px 20px 0;
`;

const Hr = styled.hr`
  margin: 10px 0;
  border-color: #b7b7b7;
`;

const StoryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 30px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  color: #f5f5f5;
  font-size: 12px;
  > svg {
    margin-right: 5px;
  }
`;

const Point = styled.div`
  margin-left: 10px;
  color: #949494;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #ed702d;
  > svg {
    margin-right: 5px;
  }
`;

interface Props {
  title?: string;
  by?: string;
  text?: string;
  score?: number;
  kids?: number[];
  time?: number;
  id?: number;
}

const Story = ({ title, by, text, score, kids, time, id }: Props) => {
  return (
    <Container>
      <Title>
        <Link to={`item/${id}`}>
          <Ask>{title!.match(/[\w\s]+\:/)}</Ask>
          {title!.replace(/[\w\s]+\:/, "")}
        </Link>
      </Title>
      {text && <Description dangerouslySetInnerHTML={{ __html: `${text}` }} />}
      <CreatedAt>{diffTime(time!)}</CreatedAt>
      <Hr />
      <StoryInfo>
        <User>
          <UserIcon />
          {by}
          <Point>{score} points</Point>
        </User>
        <Comment>
          <CommentIcon /> {kids ? kids?.length : 0}
        </Comment>
      </StoryInfo>
      <BorderLine />
    </Container>
  );
};
export default Story;
