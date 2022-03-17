import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import * as S from "./styles";

interface CuisineProps {
  id: number;
  image: string;
  title: string;
}

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  async function getCuisine(name: any) {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();

    setCuisine(recipes.results);
  }

  useEffect(() => {
    // getCuisine();
    getCuisine(params.type);
  }, [params.type]);

  return (
    <S.Grid>
      {cuisine.map((item: CuisineProps) => {
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
