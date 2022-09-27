import styled from "styled-components";
import { IStory } from "../../types/types";
import Story from "./Story";

const Container = styled.ul``;

interface Props {
  stories?: (IStory | undefined)[];
}

const Stories = ({ stories }: Props) => {
  return (
    <Container>
      {stories?.map((story) => (
        <Story key={story?.id} {...story} />
      ))}
    </Container>
  );
};
export default Stories;
