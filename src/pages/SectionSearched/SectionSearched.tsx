import { useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

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
