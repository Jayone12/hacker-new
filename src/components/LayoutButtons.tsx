import styled from "styled-components";
import { TbList } from "react-icons/tb";
import { TbLayoutGrid } from "react-icons/tb";

const Container = styled.div<{ layout: boolean }>`
  text-align: right;
  font-size: 24px;
  > svg {
    cursor: pointer;
    margin-left: 5px;
    color: ${({ layout }) => (layout ? "#727272" : "#DFDFDF")};
  }
  > svg:not(:last-child) {
    color: ${({ layout }) => (layout ? "#DFDFDF" : "#727272")};
  }
`;

interface Props {
  layout: boolean;
  handlechangeLayout: (state: boolean) => void;
}

const LayoutButtons = ({ layout, handlechangeLayout }: Props) => {
  return (
    <Container layout={layout}>
      <TbList onClick={() => handlechangeLayout(true)} />
      <TbLayoutGrid onClick={() => handlechangeLayout(false)} />
    </Container>
  );
};

export default LayoutButtons;
