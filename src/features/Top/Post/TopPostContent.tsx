import styled from "styled-components";
import LayoutButtons from "../../../components/LayoutButtons";
import Pagination from "../../../components/Pagination";
import Stories from "../../../components/Stories";
import { IStory } from "../../../types/types";

const Container = styled.div`
  margin-top: 20px;
  padding: 0 20px;
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

const TopPostContent = ({
  layout,
  handlechangeLayout,
  data,
  isLoading,
  page,
  setPage,
}: Props) => {
  return (
    <Container>
      <LayoutButtons layout={layout} handlechangeLayout={handlechangeLayout} />
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          <Stories layout={layout} stories={data?.stories} />
          <Pagination page={page} setPage={setPage} total={data?.total} />
        </>
      )}
    </Container>
  );
};
export default TopPostContent;
