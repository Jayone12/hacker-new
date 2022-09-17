import axios, { AxiosError, AxiosResponse } from "axios";
import { IStory } from "./types/types";

const BASE_URL = "https://hacker-news.firebaseio.com/v0/";

const getStory = async (id: number) => {
  try {
    const { data: story }: AxiosResponse<IStory, AxiosError> = await axios.get(
      `${BASE_URL}/item/${id}.json`
    );
    return story;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

export const getTopStories = async () => {
  try {
    const { data: storyIds }: AxiosResponse<number[], AxiosError> =
      await axios.get(`${BASE_URL}/topstories.json`);
    const stories = await Promise.all(storyIds.slice(0, 15).map(getStory));
    return stories;
  } catch {
    console.log("Error while getting list of stories.");
  }
};
