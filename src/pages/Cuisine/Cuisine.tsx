import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import * as S from "./styles";

interface CuisineProps {
  id: number;
  image: string;
  title: string;
  cuisineName: string;
}

function Cuisine() {
  const [cuisine, setCuisine] = useState<CuisineProps[]>([]);
  const { type } = useParams<{ type: string }>();

  async function getCuisine(cuisineName: string | undefined) {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisineName}`
    );

    const recipes = await data.json();
    console.log(recipes);
    // setCuisine(recipes.results);
  }

  useEffect(() => {
    // getCuisine();
    getCuisine(type);
  }, [type]);

  return (
    <S.Grid>
      {cuisine.map((item) => {
        return (
          <S.Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </S.Card>
        );
      })}
    </S.Grid>
  );
}

export default Cuisine;
