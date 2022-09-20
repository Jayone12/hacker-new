import styled from "styled-components";
import { ReactComponent as ClockIcon } from "../../../assets/images/clock_icon.svg";
import { diffTime } from "../../../utils/diffTime";
import domainFromUrl from "../../../utils/domainFromUrl";

const Container = styled.li`
  width: 228px;
  height: 160px;
  padding: 16px;
  box-sizing: border-box;
  background: #e2ecf0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-right: 20px;
`;

const Title = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  line-height: 20px;
`;

const SiteUrl = styled.span`
  font-size: 12px;
  color: #727272;
  text-decoration: underline;
`;

const CreatedAt = styled.div`
  color: #727272;
  font-size: 12px;
  letter-spacing: -0.1px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 20px;
`;

interface Props {
  title?: string;
  time?: number;
  url?: string;
}

const Story = ({ title, time, url }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      {url ? <SiteUrl>{domainFromUrl(url!)}</SiteUrl> : null}
      <CreatedAt>
        <ClockIcon />
        {diffTime(time!)}
      </CreatedAt>
    </Container>
  );
};
export default Story;
