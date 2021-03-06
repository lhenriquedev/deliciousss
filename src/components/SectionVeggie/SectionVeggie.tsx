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
export function SectionVeggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getPopularRecipe();
  }, []);

  async function getPopularRecipe() {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  }
  return (
    <S.Wrapper>
      <S.Container>
        <h2>Veggies Recipes</h2>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {veggie.map((recipe: RecipeProps) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                  <S.Card>
                    <img src={recipe.image} alt={recipe.title} />
                    <figcaption>{recipe.title}</figcaption>
                    <S.Gradient />
                  </S.Card>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </S.Container>
    </S.Wrapper>
  );
}
