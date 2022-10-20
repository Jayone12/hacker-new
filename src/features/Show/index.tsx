import styled from "styled-components";
import Banner from "../../components/Banner";
import showBanner from "../../assets/images/show_banner.png";
import LayoutButtons from "../../components/LayoutButtons";
import Stories from "../../components/Stories";
import Pagination from "../../components/Pagination";
import { IStory } from "../../types/types";
import Skeleton from "../../components/Skeleton";

const ContentConatiner = styled.div`
  padding: 20px;
`;

const SkeletonContainer = styled.ul`
  width: 350px;
  margin-top: 20px;
  padding: 0 14px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1), 0px 6px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

interface Props {
  layout: boolean;
  handlechangeLayout: (state: boolean) => void;
  data?: {
    stories?: (IStory | undefined)[];
    total: number;
  };
  isLoading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ShowContent = ({
  layout,
  handlechangeLayout,
  isLoading,
  data,
  page,
  setPage,
}: Props) => {
  return (
    <section>
      <Banner
        src={showBanner}
        alt="show your TALENTS, Share anything here, Experience hacker effect"
      />
      <ContentConatiner>
        <LayoutButtons
          layout={layout}
          handlechangeLayout={handlechangeLayout}
        />
        {isLoading ? (
          <SkeletonContainer>
            {Array(10)
              .fill(0)
              .map((skeleton, index) => (
                <Skeleton key={skeleton + index} />
              ))}
          </SkeletonContainer>
        ) : (
          <>
            <Stories layout={layout} stories={data?.stories} />
            <Pagination page={page} setPage={setPage} total={data?.total} />
          </>
        )}
      </ContentConatiner>
    </section>
  );
};
export default ShowContent;
