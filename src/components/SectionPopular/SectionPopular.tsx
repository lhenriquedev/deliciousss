import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import * as S from "./styled";

interface RecipeProps {
  id: number;
  title: string;
  image: string;
}

export function SectionPopular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularRecipe();
  }, []);

  async function getPopularRecipe() {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  }

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <h2>Popular Picks</h2>

          <Splide
            options={{
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "3rem",
            }}
          >
            {popular.map((recipe: RecipeProps) => {
              return (
                <SplideSlide key={recipe.id}>
                  <S.Card>
                    <Link to={`/recipe/${recipe.id}`}>
                      <img src={recipe.image} alt={recipe.title} />
                      <figcaption>{recipe.title}</figcaption>
                      <S.Gradient />
                    </Link>
                  </S.Card>
                </SplideSlide>
              );
            })}
          </Splide>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
