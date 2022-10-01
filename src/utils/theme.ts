import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  fontColor: "#202020",
  bgColor: "#fff",
  headerBg: "#ed702d",
  storyBg: "#fff",
  lineColor: "#f5f5f5",
  commentBg: "#efefef",
  tagBg: "#efefef",
  borderColor: "#dfdfdf",
};

export const darkTheme: DefaultTheme = {
  fontColor: "#fff",
  bgColor: "#292c33",
  headerBg: "#292c33",
  storyBg: "#343538",
  lineColor: "#35383C",
  commentBg: "#343538",
  tagBg: "#fff",
  borderColor: "#555",
};

export const theme = {
  lightTheme,
  darkTheme,
};
