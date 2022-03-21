import styled from "styled-components";

import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2.4rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;

  color: ${(props) => props.theme.fontColor};
`;

export const Nav = styled.nav`
  max-width: 110rem;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 2rem;
    color: ${(props) => props.theme.fontColor};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
