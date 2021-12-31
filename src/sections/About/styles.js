import styled from "styled-components";

const AboutMainSummary = styled.div`
  width: 100%;
  max-width: 700px;
  margin-right: 10px;
  line-height: 1.5;

  @media(min-width: 1000px) {
    width: 400px;
  }

  @media(min-width: 1200px) {
    width: 480px;
  }
`;

const AboutUcsbImage = styled.img`
  height: auto;
  width: auto;
  max-width: 100%;
  margin-top: 30px;
  opacity: 0.9;

  @media(min-width: 1000px) {
    height: 380px
  }

  @media(min-width: 1200px) {
    height: 440px;
  }
`;

export { AboutMainSummary, AboutUcsbImage };