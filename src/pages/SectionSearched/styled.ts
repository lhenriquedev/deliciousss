import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem auto 0;

  h2 {
    font-size: 2rem;
    color: #444;
    margin-bottom: 1.6rem;
  }
`;

export const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
`;

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

export const Card = styled.figure`
  img {
    max-width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  figcaption {
    padding: 1rem;

    font-family: "Inter", sans-serif;
    font-size: 1.6rem;
    font-weight: 600;

    text-align: center;
    color: #444;
  }
`;
