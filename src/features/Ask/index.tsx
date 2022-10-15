import Banner from "../../components/Banner";
import { IStory } from "../../types/types";
import askBanner from "../../assets/images/ask_banner.png";
import Pagination from "../../components/Pagination";
import Stories from "./Stories";
import Skeleton from "../../components/Skeleton";

interface Props {
  data?: {
    stories: (IStory | undefined)[] | undefined;
    total: number;
  };
  isLoading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const AskContainer = ({ data, isLoading, page, setPage }: Props) => {
  return (
    <section>
      <Banner src={askBanner} alt="We're here!" />
      {isLoading ? (
        <ul>
          {Array(10)
            .fill(0)
            .map((skeleton) => (
              <Skeleton key={skeleton} />
            ))}
        </ul>
      ) : (
        <>
          <Stories stories={data?.stories} />
          <Pagination page={page} setPage={setPage} total={data?.total} />
        </>
      )}
    </section>
  );
};
export default AskContainer;
