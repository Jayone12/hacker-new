import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [themeMode, setThemeMode] = useState<boolean>(true);
  /**
   * dark mode에 대한 toggle 함수로 클릭시 테마를 local storage에 저장하고 state를 변경한다.
   */
  const handleThemeMode = () => {
    window.localStorage.setItem("theme", JSON.stringify(!themeMode));
    setThemeMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const getTheme: string | null = window.localStorage.getItem("theme");
    getTheme && setThemeMode(JSON.parse(getTheme));
  }, []);

  return [themeMode, handleThemeMode] as const;
};
export default useDarkMode;
