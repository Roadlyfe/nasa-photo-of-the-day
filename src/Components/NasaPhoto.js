import React from "react";
import styled from "styled-components";

const StyledPage = styled.div`
  p {
    color: ${(pr) => pr.theme.color};
    font-size: 2rem;
  }
  h1 {
    font-size: 5rem;
    color: ${(pr) => pr.theme.secondaryColor};
  }
  .explanation {
    max-width: 65%;
    font-size: 1.6rem;
    color: ${(pr) => pr.theme.tertiaryColor};
  }
`;

const NasaPhoto = (props) => {
  return (
    <StyledPage className="nasa-photo-wrapper">
      <h1>{props.photo.title}</h1>
      <p>{props.photo.date}</p>
      <img src={props.photo.hdurl} />
      <p className="explanation">{props.photo.explanation}</p>
    </StyledPage>
  );
};
export default NasaPhoto;
