import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopContainer from "../features/Top";

const Top = () => {
  const navigate = useNavigate();

  useEffect(() => {
    return navigate("/top/post");
  }, [navigate]);

  return <TopContainer />;
};
export default Top;
