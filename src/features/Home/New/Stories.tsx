import styled from "styled-components";
import { IStory } from "../../../types/types";
import Story from "../New/Story";

const Container = styled.ul`
  margin-top: 20px;
  margin-bottom: 56px;
  padding: 14px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1), 0px 6px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  > li:not(:last-child) {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #656567;
  }
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
