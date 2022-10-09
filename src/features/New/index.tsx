import styled from "styled-components";
import Banner from "../../components/Banner";
import newBanner from "../../assets/images/new_banner.png";
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

const NewContent = ({
  layout,
  handlechangeLayout,
  stories,
  isLoading,
  page,
  setPage,
}: Props) => {
  return (
    <section>
      <Banner src={newBanner} alt="NEW Articles" />
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
export default NewContent;
