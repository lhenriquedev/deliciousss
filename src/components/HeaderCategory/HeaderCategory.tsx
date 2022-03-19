import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import * as S from "./styled";

export function HeaderCategory() {
  return (
    <S.Wrapper>
      <S.Container>
        <ul>
          <li>
            <S.Link to={"/cuisine/Italian"}>
              <FaPizzaSlice />
              <h4>Italian</h4>
            </S.Link>
          </li>

          <li>
            <S.Link to={"/cuisine/American"}>
              <FaHamburger />
              <h4>American</h4>
            </S.Link>
          </li>
          <li>
            <S.Link to={"/cuisine/Thai"}>
              <GiNoodles />
              <h4>Thai</h4>
            </S.Link>
          </li>
          <li>
            <S.Link to={"/cuisine/Japanese"}>
              <GiChopsticks />
              <h4>Japanese</h4>
            </S.Link>
          </li>
        </ul>
      </S.Container>
    </S.Wrapper>
  );
}
