import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem auto 0;

  h2 {
    font-size: 2rem;
    color: #444;
    margin-bottom: 1.6rem;
    color: ${(props) => props.theme.fontColor};
  }
`;
export const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 3.2rem;
`;

export const Card = styled.div`
  min-height: 15rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    width: 100%;
    object-fit: cover;
  }

  figcaption {
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    z-index: 10;
    padding: 1rem;

    width: 100%;
    height: fit-content;

    font-size: 1.6rem;
    font-weight: 600;
    color: #fff;
    text-align: center;
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
`;
