import * as S from "./styled";

import italianFood from "../../assets/italian-food.jpg";
import americanFood from "../../assets/american-food.jpg";
import thaiFood from "../../assets/thai-food.jpg";
import japaneseFood from "../../assets/japanese-food.jpg";

export function HeaderCategory() {
  return (
    <S.Wrapper>
      <S.Container>
        <ul>
          <S.Link to={"/cuisine/Italian"}>
            <img src={italianFood} alt="" />
            <span>Italian Food</span>
          </S.Link>

          <S.Link to={"/cuisine/American"}>
            <img src={americanFood} alt="" />
            <span>American Food</span>
          </S.Link>

          <S.Link to={"/cuisine/Thai"}>
            <img src={thaiFood} alt="" />
            <span>Thai Food</span>
          </S.Link>

          <S.Link to={"/cuisine/Japanese"}>
            <img src={japaneseFood} alt="" />
            <span>Japanese Food</span>
          </S.Link>
        </ul>
      </S.Container>
    </S.Wrapper>
  );
}
