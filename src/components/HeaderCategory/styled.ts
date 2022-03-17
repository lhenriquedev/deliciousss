import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 4rem auto 0;

  h2 {
    font-size: 2rem;
    color: #444;
    margin-bottom: 1.6rem;
  }
`;
export const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 3.2rem;

  ul {
    display: flex;
    justify-content: center;

    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      padding: 2rem;

      &:not(:last-child) {
        margin-right: 2rem;
      }

      svg {
        font-size: 3.2rem;
      }
      h4 {
        margin-top: 1rem;
        font-size: 1.6rem;
      }
    }
  }
`;
