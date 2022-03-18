import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 110rem;
  margin: 10rem auto 5rem;
  /* margin-top: 10rem;
  margin-bottom: 5rem; */
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.6rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
`;

export const Info = styled.div`
  margin-left: 10rem;
`;
