import axios, { AxiosError, AxiosResponse } from "axios";
import { IStory, IUser } from "./types/types";

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

const getUser = async (name: string) => {
  try {
    const { data: user }: AxiosResponse<IUser, AxiosError> = await axios.get(
      `${BASE_URL}/user/${name}.json`
    );
    return user;
  } catch (error) {
    console.log("Error while getting a user.");
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

export const getNewStories = async () => {
  try {
    const { data: storyIds }: AxiosResponse<number[], AxiosError> =
      await axios.get(`${BASE_URL}/newstories.json`);
    const stories = await Promise.all(storyIds.slice(0, 4).map(getStory));
    return stories;
  } catch {
    console.log("Error while getting list of stories.");
  }
};

export const getBestUsers = async () => {
  try {
    const { data: storyIds }: AxiosResponse<number[], AxiosError> =
      await axios.get(`${BASE_URL}/beststories.json`);
    const stories = await Promise.all(storyIds.slice(0, 5).map(getStory));
    const users = await Promise.all(stories.map((story) => getUser(story!.by)));
    return users;
  } catch {
    console.log("Error while getting list of stories.");
  }
};

export const getShowStories = async () => {
  try {
    const { data: storyIds }: AxiosResponse<number[], AxiosError> =
      await axios.get(`${BASE_URL}/showstories.json`);
    const stories = await Promise.all(storyIds.slice(0, 5).map(getStory));
    return stories;
  } catch {
    console.log("Error while getting list of stories.");
  }
};
