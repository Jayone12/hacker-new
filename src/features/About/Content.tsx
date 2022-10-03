import styled from "styled-components";
import { CgChevronDown } from "react-icons/cg";
import { ReactComponent as TitleArrow } from "../../assets/images/title_arrow.svg";
import { Link } from "react-router-dom";

const Container = styled.li`
  background-color: ${({ theme }) => theme.storyBg};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontColor};
  > svg {
    margin-left: 10px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-top: 20px;
  > a {
    text-decoration: underline;
  }
`;

const FaqLists = styled.ul`
  margin-top: 20px;
`;

const FaqList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 14px 0;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }
  > svg {
    font-size: 22px;
    font-weight: 400;
  }
`;

const ListTitle = styled.h5`
  width: 90%;
`;

interface Props {
  title: string;
  description?: string;
  faqList?: string[];
  url?: string;
}

const Content = ({ title, description, faqList, url }: Props) => {
  return (
    <Container>
      {url ? (
        <Title>
          <Link to={url}>
            {title} <TitleArrow />
          </Link>
        </Title>
      ) : (
        <Title>
          {title} <TitleArrow />
        </Title>
      )}

      {description ? (
        <Description dangerouslySetInnerHTML={{ __html: `${description}` }} />
      ) : (
        <FaqLists>
          {faqList?.map((list) => (
            <FaqList key={list}>
              <ListTitle>{list}</ListTitle> <CgChevronDown width="22px" />
            </FaqList>
          ))}
        </FaqLists>
      )}
    </Container>
  );
};
export default Content;
