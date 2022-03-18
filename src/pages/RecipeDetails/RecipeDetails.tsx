import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as S from "./styled";

interface DetailsProps {
  title: string;
  image: string;
  summary: string;
  instructions: string;

  extendedIngredients: [];
}

export function RecipeDetails() {
  const [details, setDetails] = useState<DetailsProps>({} as DetailsProps);
  const [activeTab, setActiveTab] = useState("instructions");

  // ? Pegar o parâmetro da URL e mostrar a página baseado no id.
  let params = useParams();

  async function fetchDetails() {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  }

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <S.Wrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>

      <S.Info>
        <S.Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </S.Button>
        <S.Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </S.Button>

        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient: any) => (
              <li>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </S.Info>
    </S.Wrapper>
  );
}
