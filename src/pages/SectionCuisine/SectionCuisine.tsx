import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as S from "./styled";

interface CuisineProps {
  id: number;
  image: string;
  title: string;
  cuisineName: string;
}

export function SectionCuisine() {
  const [cuisine, setCuisine] = useState<CuisineProps[]>([]);
  const { type } = useParams<{ type: string }>();

  async function getCuisine(cuisineName: string | undefined) {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisineName}`
    );

    const recipes = await data.json();
    setCuisine(recipes.results);
  }

  useEffect(() => {
    // getCuisine();
    getCuisine(type);
  }, [type]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Grid
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {cuisine.map((item) => {
            return (
              <Link to={`/recipe/${item.id}`}>
                <S.Card key={item.id}>
                  <img src={item.image} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </S.Card>
              </Link>
            );
          })}
        </S.Grid>
      </S.Container>
    </S.Wrapper>
  );
}
