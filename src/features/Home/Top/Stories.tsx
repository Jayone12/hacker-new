import styled from "styled-components";
import Story from "./Story";
import { IStory } from "../../../types/types";

const Container = styled.ul`
  width: 350px !important;
  margin-top: 20px;
  margin-left: 20px;
  padding: 0 14px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1), 0px 6px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

interface Props {
  stories?: (IStory | undefined)[];
  rank: number;
}

const Stories = ({ stories, rank }: Props) => {
  return (
    <Container>
      {stories?.map((story, index) => (
        <Story story={story} index={rank + index} key={story?.id} />
      ))}
    </Container>
  );
};
export default Stories;
