import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import * as S from "./styles";

interface RecipeProps {
  id: number;
  title: string;
  image: string;
}
export function Veggie() {
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
                <S.Card>
                  <figure>
                    <img src={recipe.image} alt={recipe.title} />
                    <figcaption>{recipe.title}</figcaption>
                  </figure>
                  <S.Gradient />
                </S.Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </S.Container>
    </S.Wrapper>
  );
}
