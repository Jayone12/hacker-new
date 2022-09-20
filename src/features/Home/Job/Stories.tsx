import styled from "styled-components";
import useJobDataFetch from "./useJobDataFetch";
import Story from "./Story";

const Container = styled.ul`
  margin-top: 20px;
  margin-bottom: 56px;
  display: flex;
  position: absolute;
  padding-left: 20px;
`;

const Stories = () => {
  const { data: stories, isLoading, refetch } = useJobDataFetch();

  return (
    <Container>
      {stories?.map((story) => (
        <Story key={story?.id} {...story} />
      ))}
    </Container>
  );
};
export default Stories;
