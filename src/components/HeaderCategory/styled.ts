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
    justify-content: center;
    align-items: center;
    gap: 1.6rem;

    list-style: none;
  }

  li {
    display: inline-block;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  cursor: pointer;
  transform: scale(0.8);
  width: 8rem;
  height: 8rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  svg {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: 1.2rem;
    color: #fff;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg,
    h4 {
      color: #fff;
    }
  }
`;
