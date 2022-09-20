import styled from "styled-components";
import useShowDataFetch from "./useShowDataFetch";
import Story from "./Story";

const Container = styled.ul`
  margin-top: 20px;
  margin-bottom: 56px;
  display: flex;
  position: absolute;
  padding-left: 20px;
`;

const Stories = () => {
  const { data: stories, isLoading } = useShowDataFetch();
  return (
    <Container>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {stories?.map((story) => (
            <Story key={story?.id} {...story} />
          ))}
        </>
      )}
    </Container>
  );
};
export default Stories;
