import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import * as S from "./styled";

interface SearchedProps {
  id: number;
  image: string;
  title: string;
}

export function SectionSearched() {
  const [searchedRecipes, setSearchedRecipes] = useState<SearchedProps[]>([]);

  let params = useParams();

  async function getSearched(term: string | undefined) {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${term}`
    );

    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  }

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Grid>
          {searchedRecipes.map((item) => {
            return (
              <S.StyledLink to={`/recipe/${item.id}`} key={item.id}>
                <S.Card>
                  <img src={item.image} alt={item.title} />
                  <figcaption>{item.title}</figcaption>
                </S.Card>
              </S.StyledLink>
            );
          })}
        </S.Grid>
      </S.Container>
    </S.Wrapper>
  );
}
