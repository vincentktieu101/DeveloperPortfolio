import styled from "styled-components";
import Lightbulbs from "@images/main/lightbulbs.jpeg";
import Button from "@material-ui/core/Button";

const CoverBackground = styled.div`
  position: absolute;
  z-index: -1;
  height: 80vh;
  padding: 10vh;
  background-image: url(${Lightbulbs});
  opacity: 0.9;
  background-position: left;
  background-size: cover;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

const CoverHeroImage = styled.img`
  z-index: 0;
  height: 700px;
  margin-top: 180px;

  @media (min-width: 800px) {
    height: 780px;
    margin-right: 500px;
    margin-bottom: 60px;
    margin-top: 0px;
  }

  @media (min-width: 1100px) {
    height: 780px;
    margin-right: 680px;
    margin-bottom: 60px;
    margin-top: 0px;
  }
`;

const CoverBody = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: -200px;

  @media (min-width: 800px) {
    margin-left: 350px;
    margin-top: -150px;
  }

  @media (min-width: 1100px) {
    margin-left: 550px;
    margin-top: -150px;
  }
`;

const CoverText = styled.div`
  line-height: 0.9;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const CoverButtons = styled.div`
  display: flex;
  justify-content: space-between;

  > * + * {
    margin-left: 10px;
  }
`;

const CoverButton = styled(Button)`
  width: 100%;
  height: 40px;
`;

const CoverAnimatedTitle = styled.div`
  height: 42px;
  padding: 4px 0;
  overflow: hidden;
`;

const CoverAnimatedLine = styled.h4`
  line-height: 50px;

  &:first-child {
    animation: animated-title 8s infinite;
  }

  @keyframes animated-title {
    0% {
      margin-top: 0px;
    }
    30% {
      margin-top: 0px;
    }
    50% {
      margin-top: -50px;
    }
    80% {
      margin-top: -50px;
    }
    100% {
      margin-top: 0px;
    }
  }
`;

export {
  CoverBackground,
  CoverHeroImage,
  CoverBody,
  CoverText,
  CoverButtons,
  CoverButton,
  CoverAnimatedTitle,
  CoverAnimatedLine,
};
