import styled from "styled-components";

const Line = styled.div`
  width: 390px;
  height: 12px;
  box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.lineColor};
`;

const BorderLine = () => {
  return <Line></Line>;
};
export default BorderLine;
