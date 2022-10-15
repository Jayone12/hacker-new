import styled from "styled-components";
import LayoutButtons from "../../../components/LayoutButtons";
import Pagination from "../../../components/Pagination";
import Skeleton from "../../../components/Skeleton";
import Stories from "../../../components/Stories";
import { IStory } from "../../../types/types";

const Container = styled.div`
  margin-top: 20px;
  padding: 0 20px;
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
        <SkeletonContainer>
          {Array(10)
            .fill(0)
            .map((skeleton) => (
              <Skeleton key={skeleton} />
            ))}
        </SkeletonContainer>
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
