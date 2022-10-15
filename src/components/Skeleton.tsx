import styled from "styled-components";

const SkeletonItem = styled.li`
  position: relative;
  padding: 16px 0 14px 0;
  overflow: hidden;
  > div:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin-bottom: 10px;
    height: 20px;
    background: linear-gradient(to right, #343538, #525356, #343538);
    animation: loading 2s infinite linear;
  }
  > div {
    margin-bottom: 10px;
    height: 20px;
    background-color: #383a3d;
  }

  @keyframes loading {
    0% {
      transform: translateX(0);
    }
    50%,
    100% {
      transform: translateX(460px);
    }
  }
`;

const Skeleton = () => {
  return (
    <SkeletonItem>
      <div></div>
      <div></div>
    </SkeletonItem>
  );
};
export default Skeleton;
