import styled from "styled-components";

const PagingContainer = styled.div`
  margin-top: 56px;
  padding-bottom: 72px;
  text-align: center;
  button {
    width: 30px;
    height: 26px;
    background-color: #fff;
    border: 1px solid #dfdfdf;
    border-radius: 50px;
    color: #000;
    padding-top: 4px;
  }
  span {
    margin: 0 35px;
    padding: 5px 11px 5px 14px;
    background-color: #fff;
    border: 1px solid #dfdfdf;
    border-radius: 30px;
    color: #000;
    letter-spacing: 4px;
  }
`;

interface Props {
  page: number;
  total?: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ page, total, setPage }: Props) => {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < 9) {
      setPage(page + 1);
    }
  };
  return (
    <PagingContainer>
      <button onClick={handlePrev}>&lt;</button>
      <span>
        {page}/{total ? total : 9}
      </span>
      <button onClick={handleNext}>&gt;</button>
    </PagingContainer>
  );
};

export default Pagination;
