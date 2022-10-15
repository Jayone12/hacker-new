import styled from "styled-components";
import Banner from "../../components/Banner";
import Pagination from "../../components/Pagination";
import { IStory } from "../../types/types";
import JobBanner from "../../assets/images/job_banner.png";
import Story from "./Story";
import Skeleton from "../../components/Skeleton";

const ContentConatiner = styled.ul`
  padding: 20px;
`;

const SkeletonContainer = styled.ul`
  width: 350px;
  margin-top: 20px;
  margin-left: 20px;
  padding: 0 14px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1), 0px 6px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

interface Props {
  data?: {
    stories?: (IStory | undefined)[];
    total: number;
  };
  isLoading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const JobContainer = ({ data, isLoading, page, setPage }: Props) => {
  return (
    <section>
      <Banner src={JobBanner} alt="Find Your Ideal Job" />
      {isLoading ? (
        <SkeletonContainer>
          {Array(10)
            .fill(0)
            .map((skeleton) => (
              <Skeleton key={skeleton} />
            ))}
        </SkeletonContainer>
      ) : (
        <>
          <ContentConatiner>
            {data?.stories?.map((story) => (
              <Story key={story?.id} {...story} />
            ))}
          </ContentConatiner>
          <Pagination page={page} setPage={setPage} total={data?.total} />
        </>
      )}
    </section>
  );
};
export default JobContainer;
