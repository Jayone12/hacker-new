import styled from "styled-components";
import StoryGridLayout from "./StoryGridLayout";
import StoryListLayout from "./StoryListLayout";
import { IStory } from "../types/types";

const Container = styled.ul<{ layout: boolean }>`
  ${({ layout }) =>
    layout
      ? null
      : "display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;"}
`;

interface Props {
  layout: boolean;
  stories?: (IStory | undefined)[];
}

const Stories = ({ layout, stories }: Props) => {
  return (
    <Container layout={layout}>
      {layout ? (
        <>
          {stories?.map((story) => (
            <StoryListLayout key={story?.id} {...story} />
          ))}
        </>
      ) : (
        <>
          {stories?.map((story) => (
            <StoryGridLayout key={story?.id} {...story} />
          ))}
        </>
      )}
    </Container>
  );
};
export default Stories;
