import * as S from "./styled";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

export function SearchBox() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate(`/searched/${input}`);
  }

  return (
    <S.Container>
      <S.Form onSubmit={handleSubmit}>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Find the best food for you"
        />
      </S.Form>
    </S.Container>
  );
}
