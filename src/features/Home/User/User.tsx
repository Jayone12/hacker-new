import styled from "styled-components";
import RankIcon from "../../../assets/images/rank_icon_bg.png";
import { ReactComponent as MoveArrowIcon } from "../../../assets/images/move_arrow.svg";
import { diffTime } from "../../../utils/diffTime";

const Container = styled.li`
  width: 228px;
  padding: 16px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1), 0px 6px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-right: 20px;
`;

const RankWrapper = styled.div`
  font-size: 12px;
  color: #ed702d;
`;

const Rank = styled.span`
  display: inline-block;
  width: 24px;
  height: 19px;
  text-align: center;
  padding-top: 5px;
  background: url(${RankIcon}) no-repeat;
  margin-right: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

const UserName = styled.h4`
  font-size: 20px;
  line-height: 20px;
  color: ${({ theme }) => theme.fontColor};
  margin-top: 10px;
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const UserContainer = styled.div`
  font-size: 12px;
  color: #727272;
  font-weight: blod;
  span {
    color: #ed702d;
    font-size: 10px;
    padding: 2px 5px;
    border: 1px solid #ed702d;
    border-radius: 20px;
    margin-right: 5px;
  }
`;

const Joined = styled.div``;

const Karma = styled.div`
  margin-top: 10px;
`;

const MoveIcon = styled.div`
  width: 24px;
  height: 12px;
  background-color: #478fa8;
  border-radius: 30px;
  text-align: center;
  padding: 6px 0;
`;

interface Props {
  id?: string;
  karma?: number;
  created?: number;
}

const User = ({ id, karma, created }: Props) => {
  return (
    <Container>
      <RankWrapper>
        <Rank>1</Rank>
        Today's User
      </RankWrapper>
      <UserName>{id}</UserName>
      <UserInfo>
        <UserContainer>
          <Joined>
            <span>Joined</span>
            {diffTime(created!)}
          </Joined>
          <Karma>
            <span>karma</span>
            {karma}
          </Karma>
        </UserContainer>
        <MoveIcon>
          <MoveArrowIcon />
        </MoveIcon>
      </UserInfo>
    </Container>
  );
};
export default User;
