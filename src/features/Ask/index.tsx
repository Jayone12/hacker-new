import Banner from "../../components/Banner";
import { IStory } from "../../types/types";
import askBanner from "../../assets/images/ask_banner.png";
import Pagination from "../../components/Pagination";
import Stories from "./Stories";

interface Props {
  stories?: (IStory | undefined)[];
  isLoading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const AskContainer = ({ stories, isLoading, page, setPage }: Props) => {
  return (
    <section>
      <Banner src={askBanner} alt="We're here!" />
      {isLoading ? <span>Loading...</span> : <Stories stories={stories} />}
      <Pagination page={page} setPage={setPage} />
    </section>
  );
};
export default AskContainer;
