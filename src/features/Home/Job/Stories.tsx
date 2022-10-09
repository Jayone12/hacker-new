import styled from "styled-components";
import Story from "./Story";
import { useQuery } from "@tanstack/react-query";
import { getStories } from "../../../apis";
import { IStory } from "../../../types/types";

const Container = styled.ul`
  margin-top: 20px;
  margin-bottom: 56px;
  display: flex;
  position: absolute;
  padding-left: 20px;
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
