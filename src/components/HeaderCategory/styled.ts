import { NavLink } from "react-router-dom";
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
  padding: 0 3.2rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  text-decoration: none;

  font-size: 1.6rem;
  font-weight: 700;

  img {
    width: 100%;
    object-fit: cover;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    filter: brightness(0.9);
    overflow: hidden;

    transition: filter 0.2s ease-in;

    &:hover {
      filter: brightness(0.8);
    }
  }
  color: ${(props) => props.theme.fontColor};
`;
