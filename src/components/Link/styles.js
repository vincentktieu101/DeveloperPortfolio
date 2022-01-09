import styled from "styled-components";

const StyledExternalLink = styled.a`
  color: ${props => props.color ? props.color : "black"};
`;

// TODO: prob reduce this using tailwind

const StyledIconExternalLink = styled.div`
  font-weight: bold;
  font-size: 20px;
  font-family: "Oswald";
`;

export { StyledExternalLink, StyledIconExternalLink };