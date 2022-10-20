import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "@tanstack/query-core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/images/title_arrow.svg";
import { ReactComponent as Update } from "../../../assets/images/update_icon.svg";
import BorderLine from "../../../components/BorderLine";
import Skeleton from "../../../components/Skeleton";
import { IStory } from "../../../types/types";
import Stories from "./Stories";

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 40px;
  padding: 0 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -0.004px;
`;

const Refresh = styled.div`
  display: flex;
  align-items: center;
`;

const StoriesContainer = styled.div`
  padding-bottom: 10px;
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
  stories?: (IStory | undefined)[];
  isLoading: boolean;
  isFetching: boolean;
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<
    QueryObserverResult<(IStory | undefined)[] | undefined, unknown>
  >;
}

const AskContent = ({ stories, isLoading, isFetching, refetch }: Props) => {
  return (
    <>
      <TitleContainer>
        <Title>
          <Link to="/ask">
            Today's Ask <Arrow />
          </Link>
        </Title>
        <Refresh>
          <button onClick={() => refetch()}>
            <Update />
          </button>
        </Refresh>
      </TitleContainer>
      <StoriesContainer>
        {isLoading || isFetching ? (
          <SkeletonContainer>
            {Array(5)
              .fill(0)
              .map((skeleton, index) => (
                <Skeleton key={skeleton + index} />
              ))}
          </SkeletonContainer>
        ) : (
          <Stories stories={stories} />
        )}
      </StoriesContainer>
      <BorderLine />
    </>
  );
};
export default AskContent;
