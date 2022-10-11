import styled from "styled-components";
import Content from "../features/About/Content";
import TEMPLATES from "../features/About/Templates";

const Container = styled.section`
  padding: 20px;
`;

const About = () => {
  return (
    <Container>
      <ul>
        {TEMPLATES.map((content) => (
          <Content key={content.title} {...content} />
        ))}
      </ul>
    </Container>
  );
};
export default About;
