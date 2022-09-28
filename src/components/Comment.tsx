import { ReactComponent as ClockIcon } from "../assets/images/clock_icon.svg";
import { ReactComponent as UserIconBig } from "../assets/images/user_icon_big.svg";
import { FiChevronUp } from "react-icons/fi";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  padding: 20px 10px;
  border-bottom: 1px solid #727272;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const CommentInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  > svg {
    margin-right: 5px;
  }
`;

const CreatedAt = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 10px;
  color: #b7b7b7;
  > svg {
    margin-right: 5px;
  }
`;

const CustomComponent = ({ isActive, ...rest }: { isActive: boolean }) => (
  <FiChevronUp {...rest} />
);

const Arrow = styled(CustomComponent)`
  transform: ${({ isActive }) => isActive && "rotate(-180deg)"};
  transition: all 0.2s ease-in-out;
`;

const Description = styled.p`
  padding-top: 20px;
  font-size: 14px;
  line-height: 20px;
`;

const Comment = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <Container>
      <CommentHeader onClick={toggleHandler}>
        <CommentInfo>
          <User>
            <UserIconBig width="20px" height="20px" />
            Jeffreyrogers
          </User>
          <CreatedAt>
            <ClockIcon width="14px" height="14px" />2 hours ago
          </CreatedAt>
        </CommentInfo>
        <Arrow isActive={isActive} />
      </CommentHeader>
      {isActive && (
        <Description>
          I sort of did this. I went from a software job building web
          applications to working on radio hardware. The parts I worked on were
          the FPGAs that did the signal processing. I didn't do any of the board
          layout or PCB design, but I had to read the schematics and understand
          how to interface with various things on the board. It was interesting,
          but I found the work frustrating and the iteration time very long. I
          eventually went back to software and am happy with that choice.
        </Description>
      )}
    </Container>
  );
};
export default Comment;
