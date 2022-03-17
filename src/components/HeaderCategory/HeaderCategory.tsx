import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import { NavLink } from "react-router-dom";

import * as S from "./styled";

export function HeaderCategory() {
  return (
    <S.Wrapper>
      <S.Container>
        <ul>
          <NavLink to={"/cuisine/Italian"}>
            <li>
              <FaPizzaSlice />
              <h4>Italian</h4>
            </li>
          </NavLink>

          <NavLink to={"/cuisine/American"}>
            <li>
              <FaHamburger />
              <h4>American</h4>
            </li>
          </NavLink>
          <NavLink to={"/cuisine/Thai"}>
            <li>
              <GiNoodles />
              <h4>Thai</h4>
            </li>
          </NavLink>
          <NavLink to={"/cuisine/Japanese"}>
            <li>
              <GiChopsticks />
              <h4>Japanese</h4>
            </li>
          </NavLink>
        </ul>
      </S.Container>
    </S.Wrapper>
  );
}
