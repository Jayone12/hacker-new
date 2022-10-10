import styled from "styled-components";
import Banner from "../../components/Banner";
import showBanner from "../../assets/images/show_banner.png";
import LayoutButtons from "../../components/LayoutButtons";
import Stories from "../../components/Stories";
import Pagination from "../../components/Pagination";
import { IStory } from "../../types/types";

const ContentConatiner = styled.div`
  padding: 20px;
`;

interface Props {
  layout: boolean;
  handlechangeLayout: (state: boolean) => void;
  stories?: (IStory | undefined)[];
  isLoading: boolean;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const ShowContent = ({
  layout,
  handlechangeLayout,
  isLoading,
  stories,
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
          <span>Loading...</span>
        ) : (
          <Stories layout={layout} stories={stories} />
        )}
        <Pagination page={page} setPage={setPage} />
      </ContentConatiner>
    </section>
  );
};
export default ShowContent;
