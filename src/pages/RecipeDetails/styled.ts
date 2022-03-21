import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 110rem;
  margin: 5rem auto 5rem;
  /* margin-top: 10rem;
  margin-bottom: 5rem; */
  display: flex;

  padding: 1.6rem;
  border-radius: 10px;

  background: #fff;

  flex-direction: column;

  .active {
    background: #ff6a28;
    color: #fff;
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
  padding: 1.2rem 3.2rem;
  margin-right: 2rem;
  background: #fff;
  border-radius: 5px;
  border: 2px solid #ff6a28;
  font-weight: 600;
  font-size: 1.6rem;

  color: #333;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 3.6rem;
    color: #ff6a28;
  }

  img {
    width: 60%;
    height: 50vh;
    object-fit: contain;
  }
`;

export const Info = styled.div`
  .summary-container {
    margin-top: 1.6rem;

    h3 {
      font-size: 2.6rem;
      color: #333;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.8;
    }
  }

  .instructions-container {
    margin-top: 1.6rem;
    h3 {
      font-size: 2.6rem;
      color: #333;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.6rem;
      padding-left: 1.8rem;
      line-height: 1.8;
    }

    li + li {
      margin-top: 1.6rem;
    }
  }

  .list-ingredients {
    padding-left: 1.8rem;
    line-height: 1.8%;

    li + li {
      margin-top: 1.6rem;
    }
  }
`;
