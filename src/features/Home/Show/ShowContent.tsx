import { Link } from "react-router-dom";
import styled from "styled-components";
import BorderLine from "../../../components/BorderLine";
import { IStory } from "../../../types/types";
import { ReactComponent as Arrow } from "../../../assets/images/title_arrow.svg";
import { ReactComponent as Update } from "../../../assets/images/update_icon.svg";
import Stories from "./Stories";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "@tanstack/query-core";

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
  position: relative;
  height: 222px;
  overflow-x: scroll;
  padding-bottom: 10px;
  height: 300px;
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

const ShowContent = ({ stories, isLoading, isFetching, refetch }: Props) => {
  return (
    <>
      <TitleContainer>
        <Title>
          <Link to="/show">
            Today's Show <Arrow />
          </Link>
        </Title>
        <Refresh>
          <button onClick={() => refetch()}>
            <Update />
          </button>
        </Refresh>
      </TitleContainer>
      <StoriesContainer>
        {isLoading ? (
          <span>Loading</span>
        ) : isFetching ? (
          <span>Refetching...</span>
        ) : (
          <Stories stories={stories} />
        )}
      </StoriesContainer>
      <BorderLine />
    </>
  );
};
export default ShowContent;
