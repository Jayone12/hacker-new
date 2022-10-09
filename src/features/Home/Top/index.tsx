import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStories } from "../../../apis";
import TopContent from "./TopContent";

const TopStories = () => {
  const { data, isLoading } = useQuery(["top"], () => getStories("top", 0, 15));
  const [refreshTime, setRefreshTime] = useState("");

  const Props = {
    data,
    isLoading,
    refreshTime,
  };

  useEffect(() => {
    setRefreshTime(new Date().getHours() + "");
    const getHour = setInterval(() => {
      const time = new Date();
      const hour = time.getHours();
      const minutes = time.getSeconds();
      if (minutes === 0) {
        if (hour < 10) {
          setRefreshTime("0" + hour);
        } else {
          setRefreshTime(hour + "");
        }
      }
    }, 1000);

    return () => {
      clearInterval(getHour);
    };
  }, []);

  return <TopContent {...Props} />;
};
export default TopStories;
