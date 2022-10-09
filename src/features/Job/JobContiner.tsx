import styled from "styled-components";
import Banner from "../../components/Banner";
import Pagination from "../../components/Pagination";
import { IStory } from "../../types/types";
import JobBanner from "../../assets/images/job_banner.png";
import Story from "./Story";

const ContentConatiner = styled.ul`
  padding: 20px;
`;

interface Props {
  stories?: (IStory | undefined)[];
  isLoading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const JobContainer = ({ stories, isLoading, page, setPage }: Props) => {
  return (
    <section>
      <Banner src={JobBanner} alt="Find Your Ideal Job" />
      <ContentConatiner>
        {isLoading ? (
          <span>Loding...</span>
        ) : (
          stories?.map((story) => <Story key={story?.id} {...story} />)
        )}
      </ContentConatiner>
      <Pagination page={page} setPage={setPage} />
    </section>
  );
};
export default JobContainer;
