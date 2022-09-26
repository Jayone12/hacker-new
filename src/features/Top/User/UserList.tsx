import styled from "styled-components";

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
  &:nth-child(2n) {
    background-color: #e2ecf0;
    color: #202020;
  }
`;

const Rank = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
`;

const Medal = styled.span`
  font-size: 12px;
`;

const UserName = styled.div`
  width: 100%;
  text-align: center;
`;

const Karma = styled.div`
  width: 100%;
  text-align: center;
  color: #ed702d;
`;

interface Props {
  index: number;
  id?: string;
  karma?: number;
}

const UserList = ({ index, id, karma }: Props) => {
  const rankIconHandle = (index: number) => {
    switch (index + 1) {
      case 1:
        return `🥇`;
      case 2:
        return `🥈`;
      case 3:
        return `🥉`;
      default:
        return;
    }
  };

  return (
    <Container>
      <Rank>
        <Medal>{rankIconHandle(index)}</Medal>
        {index + 1}
      </Rank>
      <UserName>{id}</UserName>
      <Karma>{karma}</Karma>
    </Container>
  );
};
export default UserList;
