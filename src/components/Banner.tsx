import styled from "styled-components";

const Img = styled.img`
  width: 390px;
  height: 240px;
  margin-top: 2px;
`;

interface Props {
  src: string;
  alt: string;
}

const Banner = ({ src, alt }: Props) => {
  return <Img src={src} alt={alt} />;
};
export default Banner;
