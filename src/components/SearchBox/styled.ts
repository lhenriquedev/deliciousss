import styled from "styled-components";

export const Container = styled.div`
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 3.2rem;
`;

export const Form = styled.form`
  position: relative;
  margin: 10rem 20rem 0;

  input {
    width: 100%;
    background: transparent;
    border: 2px solid #ccc;
    border-radius: 1rem;
    color: #313131;

    font-size: 1.6rem;
    padding: 1.2rem 3.2rem;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.fontColor};
    }
  }

  svg {
    position: absolute;
    top: 50%;
    left: -0.8%;
    transform: translate(100%, -50%);

    color: ${(props) => props.theme.fontColor};

    font-size: 1.6rem;
  }
`;
