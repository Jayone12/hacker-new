import styled from "styled-components";
import { IStory } from "../../../types/types";
import Story from "./Story";

const Container = styled.ul`
  margin-top: 20px;
  margin-bottom: 56px;
  padding: 0 20px;
`;

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
