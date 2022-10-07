import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as UserIcon } from "../../../assets/images/user_icon.svg";
import { diffTime } from "../../../utils/diffTime";

const Container = styled.li``;

const CreateAt = styled.span`
  display: inline-block;
  font-size: 10px;
  color: #4ca5c4;
  padding: 5px 6px 4px;
  background: rgba(76, 165, 196, 0.15);
  border-radius: 10px;
  margin-bottom: 10px;
`;

const StoryTitle = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  color: ${({ theme }) => theme.fontColor};
  text-overflow: ellipsis;
  overflow: hidden;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const UserName = styled.span`
  font-size: 12px;
  margin-left: 5px;
`;

interface Props {
  by?: string;
  title?: string;
  time?: number;
  url?: string;
}

const Story = ({ by, title, time, url }: Props) => {
  return (
    <Container>
      <CreateAt>{diffTime(time!)}</CreateAt>
      <StoryTitle>
        <a href={url}>{title}</a>
      </StoryTitle>
      <User>
        <UserIcon />
        <UserName>
          <Link to={`/user/${by}/submissions`}>{by}</Link>
        </UserName>
      </User>
    </Container>
  );
};
export default Story;
