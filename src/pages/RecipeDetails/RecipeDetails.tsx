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
  }

  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <S.Wrapper>
      <S.TitleContainer>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </S.TitleContainer>

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
          <>
            <div className="summary-container">
              <h3>Summary:</h3>
              <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
            </div>

            <div className="instructions-container">
              <h3>Instructions:</h3>
              <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
            </div>
          </>
        )}

        {activeTab === "ingredients" && (
          <ul className="list-ingredients">
            {details.extendedIngredients.map((ingredient: any) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </S.Info>
    </S.Wrapper>
  );
}
