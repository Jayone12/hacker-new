import styled from "styled-components";
import Content from "../features/About/Content";
import TEMPLATES from "../features/About/Templates";

const Container = styled.section`
  padding: 20px;
`;

const ContentsContainer = styled.ul``;

const About = () => {
  return (
    <Container>
      <ContentsContainer>
        {TEMPLATES.map((content) => (
          <Content key={content.title} {...content} />
        ))}
      </ContentsContainer>
    </Container>
  );
};
export default About;
